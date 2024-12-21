import React, { useState } from "react";
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
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import RadialCircle from "../components/RadialCircle";
import { statusColor } from "../colors";
import useRecording from "../hooks/useRecording";
import { uploadToS3 } from "../helpers/uploadToS3";
import { sendFileNameToBackend } from "../api/process_audio";

export default function App() {
  const [isHolding, setIsHolding] = useState(false);
  const { startRecording, stopRecording } = useRecording();

  // Funkcija za otpremanje audio fajla na S3 bucket
  const handleStopRecordingAndUpload = async () => {
    try {
      setIsHolding(false);

      const uri = await stopRecording();

      if (uri) {
        const fileName = `${Date.now()}.wav`;

        // Otpremanje fajla na S3
        const s3Url = await uploadToS3(uri, fileName);

        // if (s3Url) {
        //   // Ekstrakcija imena fajla iz URL-a
        //   const extractedFileName = s3Url.split("/").pop();

        //   // Slanje POST zahteva backend-u sa imenom fajla
        //   const response = await sendFileNameToBackend(extractedFileName);

        //   console.log("Odgovor sa servera:", response);
        //   alert("Procesiranje završeno:", JSON.stringify(response));
        // }
      }
    } catch (error) {
      console.error("Greška pri obradi:", error);
      alert("Greška pri obradi:", error.message);
    }
  };

  return (
    <>
      <StatusBar backgroundColor={statusColor} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {/* Chat history section */}
        <View style={styles.chatContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.botMessageContainer}>
              <View style={styles.botIconContainer}>
                <ChatbotBox />
              </View>
              <Text style={styles.botText}>
                Zdravo! Ja sam tvoj virtuelni asistent. Postavi mi pitanje.
              </Text>
            </View>

            <GradientBackground>
              <Text style={styles.userText}>
                Koliko mi je ukupno zaduženje za 2024. godinu?
              </Text>
            </GradientBackground>
            <View style={styles.answerContainer}>
              <View style={styles.botIconContainer}>
                <ChatbotBox />
              </View>
              <Text style={styles.botText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                nam ut quaerat laudantium repudiandae commodi, hic, aperiam
                deserunt dolorum quasi similique necessitatibus asperiores ipsa
                minima est incidunt officia in nemo!
              </Text>
            </View>
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
                onPress={() => router.push("/(secondPage)/textToSpeach")}
              >
                <ChatButton />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

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
});
