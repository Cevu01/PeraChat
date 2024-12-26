import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MicButton from "../assets/svg/MicButton";
import SettingsButton from "../assets/svg/SettingsButton";
import ChatButton from "../assets/svg/ChatButton";
import GradientBackground from "../components/GradientBackground";
import ChatbotBox from "../components/ChatbotBox";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import RadialCircle from "../components/RadialCircle";
import { statusColor } from "../colors";
import useRecording from "../hooks/useRecording";
import { uploadToS3 } from "../helpers/uploadToS3";
import { sendFileNameToBackend } from "../api/process_audio";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firstPageStyles from "../styles/firstPageStyles";
import { playAudio } from "../helpers/playAudio";
import ModalComponent from "../components/ModalComponent";

const firstPage = () => {
  const [isHolding, setIsHolding] = useState(false);
  const { startRecording, stopRecording } = useRecording();
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State za modal
  const [collectionName, setCollectionName] = useState("Dental"); // Default collection
  const scrollViewRef = useRef(null);
  const router = useRouter();

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev); // Otvara ili zatvara modal
  };
  const handleOptionSelect = (option) => {
    setCollectionName(option); // Ažurira trenutno izabranu kolekciju
    toggleModal(); // Zatvara modal
  };

  const handleStopRecordingAndUpload = async () => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { question: null, answer: null },
    ]);

    const currentQuestionIndex = chatHistory.length;
    // const collectionName = "Dental"; // Dodajte naziv kolekcije

    try {
      setIsHolding(false);
      setLoading(true);

      const uri = await stopRecording();
      if (!uri) {
        alert("Greška", "Snimanje nije uspelo. Pokušajte ponovo.");
        return;
      }

      let fileCounter = await AsyncStorage.getItem("fileCounter");
      fileCounter = fileCounter ? parseInt(fileCounter, 10) : 1;

      const fileName = `${fileCounter}.3gp`;
      await AsyncStorage.setItem("fileCounter", (fileCounter + 1).toString());

      const s3Url = await uploadToS3(uri, fileName);
      if (!s3Url) {
        alert("Greška", "Otpremanje fajla na server nije uspelo.");
        return;
      }

      const extractedFileName = s3Url.split("/").pop();

      const { transcription, answer, audioFileUri } =
        await sendFileNameToBackend(extractedFileName, collectionName);

      if (!transcription || !answer) {
        alert(
          "Greška",
          "Nismo uspeli da dobijemo transkripciju ili odgovor. Pokušajte ponovo."
        );
        return;
      }

      // Ažuriranje chat istorije
      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[currentQuestionIndex] = {
          question: transcription || "Pokušaj opet!",
          answer: answer || "Odgovor nije dostupan!",
        };
        return updatedHistory;
      });

      // Odmah pusti audio fajl nakon što se prikaže tekst
      if (audioFileUri) {
        try {
          await playAudio(audioFileUri);
        } catch (playError) {
          alert(
            "Greška",
            "Došlo je do problema sa reprodukcijom audio fajla. Pokušajte ponovo."
          );
        }
      }
    } catch (error) {
      alert(
        "Greška pri obradi",
        error.message || "Došlo je do nepoznate greške."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [chatHistory]);

  return (
    <>
      <StatusBar backgroundColor={statusColor} barStyle="light-content" />
      <SafeAreaView style={firstPageStyles.container}>
        {/* Chat history section */}
        <View style={firstPageStyles.chatContainer}>
          <ScrollView style={firstPageStyles.scrollView} ref={scrollViewRef}>
            <View style={firstPageStyles.botMessageContainer}>
              <View style={firstPageStyles.botIconContainer}>
                <ChatbotBox />
              </View>
              <Text style={firstPageStyles.botText}>
                Zdravo! Ja sam tvoj virtuelni asistent. Postavi mi pitanje.
              </Text>
            </View>
            {chatHistory.map((chat, index) => (
              <View key={index}>
                {!chat.answer && !chat.question && loading && (
                  <LottieView
                    source={require("../assets/loader.json")}
                    autoPlay
                    loop
                    style={firstPageStyles.loader}
                  />
                )}
                {chat.question && (
                  <GradientBackground>
                    <Text style={firstPageStyles.userText}>
                      {chat?.question}
                    </Text>
                  </GradientBackground>
                )}
                {chat.answer && (
                  <View style={firstPageStyles.answerContainer}>
                    <View style={firstPageStyles.botIconContainer}>
                      <ChatbotBox />
                    </View>
                    <Text style={firstPageStyles.botText}>{chat?.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Modal */}
        <ModalComponent
          visible={isModalVisible}
          onClose={toggleModal}
          onSelectOption={handleOptionSelect} // Prosleđujemo izabranu opciju
        />

        {/* Buttons section */}
        <View style={firstPageStyles.buttonsSection}>
          <View style={firstPageStyles.buttonsRow}>
            {!isHolding && (
              <TouchableOpacity onPress={toggleModal} disabled={loading}>
                <SettingsButton />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPressIn={() => {
                setIsHolding(true);
                startRecording(); // Početak snimanja
              }}
              onPressOut={handleStopRecordingAndUpload} // Kraj snimanja i otpremanje
              activeOpacity={1}
              disabled={loading}
            >
              <View style={firstPageStyles.circleWrapper}>
                {isHolding && <RadialCircle />}
                {isHolding ? (
                  <LottieView
                    source={require("../assets/rippleAnimation.json")}
                    autoPlay
                    loop
                    style={{ width: 386, height: 386 }}
                  />
                ) : (
                  <MicButton />
                )}
              </View>
            </TouchableOpacity>

            {!isHolding && (
              <TouchableOpacity
                onPress={() => {
                  if (!collectionName) {
                    console.error("collectionName nije definisan!");
                    return;
                  }
                  router.push({
                    pathname: "/(secondPage)/textToText",
                    params: { collectionName }, // Prosleđujemo collectionName
                  });
                }}
                disabled={loading}
              >
                <ChatButton />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default firstPage;
