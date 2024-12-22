import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import MicButton from "../assets/svg/MicButton";
import SettingsButton from "../assets/svg/SettingsButton";
import ChatButton from "../assets/svg/ChatButton";
import GradientBackground from "../components/GradientBackground";
import ChatbotBox from "../components/ChatbotBox";
import { router, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import RadialCircle from "../components/RadialCircle";
import { statusColor } from "../colors";
import useRecording from "../hooks/useRecording";
import { uploadToS3 } from "../helpers/uploadToS3";
import { sendFileNameToBackend } from "../api/process_audio";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firstPage = () => {
  const [isHolding, setIsHolding] = useState(false);
  const { startRecording, stopRecording } = useRecording();
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null);
  const router = useRouter();

  // Funkcija za otpremanje audio fajla na S3 bucket

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
          const response = await sendFileNameToBackend("30.wav");
          setChatHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            updatedHistory[currentQuestionIndex] = {
              question:
                response?.transcription || "Transkripcija nije dostupna",
              answer: response?.answer || "Odgovor nije dostupan",
            };
            return updatedHistory;
          });

          console.log("Odgovor sa servera:", response);
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
      <SafeAreaView style={styles.container}>
        {/* Chat history section */}
        <View style={styles.chatContainer}>
          <ScrollView style={styles.scrollView} ref={scrollViewRef}>
            <View style={styles.botMessageContainer}>
              <View style={styles.botIconContainer}>
                <ChatbotBox />
              </View>
              <Text style={styles.botText}>
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
                    style={styles.loader}
                  />
                )}
                {chat.question && (
                  <GradientBackground>
                    <Text style={styles.userText}>{chat?.question}</Text>
                  </GradientBackground>
                )}
                {chat.answer && (
                  <View style={styles.answerContainer}>
                    <View style={styles.botIconContainer}>
                      <ChatbotBox />
                    </View>
                    <Text style={styles.botText}>{chat?.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Buttons section */}
        <View style={styles.buttonsSection}>
          <View style={styles.buttonsRow}>
            {!isHolding && (
              <TouchableOpacity>
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
            >
              <View style={styles.circleWrapper}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26262E", // bg-background-dark
    paddingTop: 56,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#30303B", // bg-background-light
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  scrollView: {
    marginBottom: 8,
    marginTop: 8,
  },
  botMessageContainer: {
    marginRight: 94,
    padding: 16,
    backgroundColor: "#26262E", // bg-background-dark
    borderRadius: 10,
    marginTop: 36,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  botIconContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  botText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.16,
    color: "#FBFBFB", // text-text-color
    fontFamily: "Poppins Regular",
    flexWrap: "wrap",
  },
  userText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.16,
    color: "#FBFBFB", // text-text-color
    fontFamily: "Poppins Regular",
  },
  answerContainer: {
    marginRight: 94,
    padding: 16,
    backgroundColor: "#26262E", // bg-background-dark
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  buttonsSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  circleWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  radialCircle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 115,
    backgroundColor: "#4CB8C4",
    shadowColor: "#3CD3AD",
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  loader: {
    width: 60,
    height: 60,
  },
});
