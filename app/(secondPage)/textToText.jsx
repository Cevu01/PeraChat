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
import secondPageStyles from "../../styles/secondPageStyles";
import { processText } from "../../api/process_text";

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
      const data = await processText(userInput);

      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[currentQuestionIndex].answer = data.answer;
        return updatedHistory;
      });
    } catch (error) {
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

      <SafeAreaView style={secondPageStyles.container}>
        <TouchableOpacity
          style={secondPageStyles.backButtonContainer}
          onPress={() => router.push("/firstPage")}
        >
          <BackButton />
        </TouchableOpacity>
        <View style={secondPageStyles.chatContainer}>
          <ScrollView style={secondPageStyles.scrollView} ref={scrollViewRef}>
            <View style={secondPageStyles.botMessageContainer}>
              <View style={secondPageStyles.botIconContainer}>
                <ChatbotBox />
              </View>
              <Text style={secondPageStyles.botText}>
                Zdravo! Ja sam tvoj virtuelni asistent. Postavi mi pitanje.
              </Text>
            </View>

            {chatHistory.map((chat, index) => (
              <View key={index}>
                <GradientBackground>
                  <Text style={secondPageStyles.userText}>{chat.question}</Text>
                </GradientBackground>
                {!chat.answer && loading && (
                  <LottieView
                    source={require("../../assets/loader.json")}
                    autoPlay
                    loop
                    style={secondPageStyles.loader}
                  />
                )}
                {chat.answer && (
                  <View style={secondPageStyles.answerContainer}>
                    <View style={secondPageStyles.botIconContainer}>
                      <ChatbotBox />
                    </View>
                    <Text style={secondPageStyles.botText}>{chat.answer}</Text>
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

export default TextToSpeach;
