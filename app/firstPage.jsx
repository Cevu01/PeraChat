import React, { useEffect, useRef, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
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
import ModalComponent from "../components/ModalComponent";
import { Audio } from "expo-av";
import { AudioContext } from "../state/AudioContext";

const playAudio = async (fileUri, setSoundInstance) => {
  try {
    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });

    // Listen for playback status updates
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        setSoundInstance(null); // Clear the sound instance when playback ends
      }
    });

    await sound.playAsync();
    setSoundInstance(sound); // Save the sound instance for later control
    return sound;
  } catch (error) {
    alert("Greška pri reprodukciji audio fajla:", error.message);
  }
};

const FirstPage = () => {
  const [isHolding, setIsHolding] = useState(false);
  const [soundInstance, setSoundInstance] = useState(null);
  const { startRecording, stopRecording } = useRecording();
  const { chatHistory, setChatHistory } = useContext(AudioContext);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [collectionName, setCollectionName] = useState("Dental");
  const scrollViewRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Do you want to exit the application?", [
        { text: "Cancel", style: "cancel" },
        { text: "Exit", onPress: () => BackHandler.exitApp() },
      ]);
      return true; // Prevent default back behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup the listener
  }, []);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setCollectionName(option);
    toggleModal();
  };

  const handleStopAudio = async () => {
    if (soundInstance) {
      await soundInstance.stopAsync();
      setSoundInstance(null);
    }
  };

  const handleStopRecordingAndUpload = async () => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { question: null, answer: null },
    ]);
    const currentQuestionIndex = chatHistory.length;

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

      // Update chat history
      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[currentQuestionIndex] = {
          question: transcription || "Pokušaj opet!",
          answer: answer || "Odgovor nije dostupan!",
        };
        return updatedHistory;
      });

      // Play audio file after displaying text
      if (audioFileUri) {
        try {
          await playAudio(audioFileUri, setSoundInstance);
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
          onSelectOption={handleOptionSelect}
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
                startRecording(); // Start recording
              }}
              onPressOut={handleStopRecordingAndUpload} // Stop recording and upload
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
                    params: { collectionName },
                  });
                }}
                disabled={loading}
              >
                <ChatButton />
              </TouchableOpacity>
            )}
          </View>

          {/* Stop Audio Button */}
          {soundInstance && (
            <View style={firstPageStyles.stopAudioContainer}>
              <TouchableOpacity
                onPress={handleStopAudio}
                disabled={!soundInstance}
              >
                <Text style={firstPageStyles.stopAudio}>Stop Audio</Text>
                {/* Button to stop audio */}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default FirstPage;
