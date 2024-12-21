import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
  StyleSheet,
} from "react-native";
import GradientBackground from "../../components/GradientBackground";
import ChatbotBox from "../../components/ChatbotBox";
import BackButton from "../../components/BackButton";
import { useRouter } from "expo-router";
import MessageInput from "../../components/MessageInput";
import LottieView from "lottie-react-native";
import { statusColor } from "../../colors";

const TextToSpeach = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null);
  const router = useRouter();

  const handleSendMessage = async () => {
    if (!userInput.trim()) {
      Alert.alert("Greška", "Molimo unesite tekst!");
      return;
    }
    setUserInput("");
    setLoading(true);
    Keyboard.dismiss();

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { question: userInput, answer: null },
    ]);

    const currentQuestionIndex = chatHistory.length;

    try {
      const res = await fetch("http://54.188.217.11:8000/process_text", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: userInput }),
      });

      if (!res.ok) {
        console.log(res.status);
      }

      const data = await res.json();

      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[currentQuestionIndex].answer = data.answer;
        return updatedHistory;
      });
    } catch (error) {
      console.error("Greška pri slanju poruke:", error);
      Alert.alert("Greška", "Nismo uspeli da pošaljemo poruku.");
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
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => router.push("/")}
        >
          <BackButton />
        </TouchableOpacity>
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
                <GradientBackground>
                  <Text style={styles.userText}>{chat.question}</Text>
                </GradientBackground>
                {!chat.answer && loading && (
                  <LottieView
                    source={require("../../assets/loader.json")}
                    autoPlay
                    loop
                    style={styles.loader}
                  />
                )}
                {chat.answer && (
                  <View style={styles.answerContainer}>
                    <View style={styles.botIconContainer}>
                      <ChatbotBox />
                    </View>
                    <Text style={styles.botText}>{chat.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
        <View>
          <MessageInput
            value={userInput}
            onChangeText={setUserInput}
            onSend={handleSendMessage}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26262E", // bg-background-dark
    paddingTop: 56,
  },
  backButtonContainer: {
    position: "absolute",
    top: 75,
    left: 6,
    zIndex: 10,
  },
  chatContainer: {
    flex: 1,
    paddingTop: 80,
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
    marginBottom: 24,
    backgroundColor: "#26262E", // bg-background-dark
    borderRadius: 10,
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
  loader: {
    width: 60,
    height: 60,
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
});

export default TextToSpeach;
