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
import { downloadAndPlayAudio } from "../helpers/downloadAndPlayAudio";
import { testAudioPlayback } from "../helpers/test";
import { playAudioFromUrl } from "../helpers/test1";

const firstPage = () => {
  const [isHolding, setIsHolding] = useState(false);
  const { startRecording, stopRecording } = useRecording();
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null);
  const router = useRouter();

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

      if (uri) {
        // Dohvatanje trenutnog brojača iz AsyncStorage
        let fileCounter = await AsyncStorage.getItem("fileCounter");
        fileCounter = fileCounter ? parseInt(fileCounter, 10) : 1;

        // Generisanje imena fajla
        const fileName = `${fileCounter}.3gp`;

        // Ažuriranje brojača u AsyncStorage
        await AsyncStorage.setItem("fileCounter", (fileCounter + 1).toString());

        // Otpremanje fajla na S3
        const s3Url = await uploadToS3(uri, fileName);

        if (s3Url) {
          // Ekstrakcija imena fajla iz URL-a
          const extractedFileName = s3Url.split("/").pop();

          // Slanje POST zahteva backend-u sa imenom fajla
          const response = await sendFileNameToBackend(extractedFileName);
          setChatHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            updatedHistory[currentQuestionIndex] = {
              question: response?.transcription || "Pokusaj opet!",
              answer: response?.answer || "Odgovor nije dostupan!",
            };
            return updatedHistory;
          });

          console.log("Odgovor sa servera:", response);
          // await testAudioPlayback(
          //   "https://archive.org/download/testmp3testfile/mpthreetest.mp3"
          // );

          // Pozovi funkciju za preuzimanje i reprodukciju
          // if (
          //   response?.text_to_speech_audio_bucket &&
          //   response?.text_to_speech_audio_key
          // ) {
          //   await downloadAndPlayAudio(
          //     response.text_to_speech_audio_bucket,
          //     response.text_to_speech_audio_key
          //   );
          // }
        }
      }
    } catch (error) {
      console.error("Greška pri obradi:", error);
      alert("Greška pri obradi:", error.message);
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

        {/* Buttons section */}
        <View style={firstPageStyles.buttonsSection}>
          <View style={firstPageStyles.buttonsRow}>
            {!isHolding && (
              <TouchableOpacity disabled={loading}>
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
                onPress={() => router.push("/(secondPage)/textToText")}
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
