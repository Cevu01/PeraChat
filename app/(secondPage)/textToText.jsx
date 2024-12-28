import React, { useState, useRef, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
  BackHandler,
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
import { useLocalSearchParams } from "expo-router";
import { ChatContext } from "../../state/ChatContext";

const TextToSpeach = () => {
  const [userInput, setUserInput] = useState("");
  const { chatHistory, setChatHistory } = useContext(ChatContext);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null);
  const router = useRouter();
  const { collectionName } = useLocalSearchParams();
  useEffect(() => {
    const backAction = () => {
      router.push("/firstPage"); // Navigate back to FirstPage
      return true; // Prevent default back behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup the listener
  }, []);

  const handleSendMessage = async () => {
    if (!userInput.trim()) {
      Alert.alert("Greška", "Molimo unesite tekst!"); // Alert za prazan unos
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
    // const collectionName = "Dental"; // Dodajte naziv kolekcije

    try {
      // Slanje poruke na backend
      const data = await processText(userInput, collectionName); // Prosleđivanje oba parametra

      if (!data || !data.answer) {
        Alert.alert(
          "Greška",
          "Nismo dobili odgovor sa servera. Pokušajte ponovo."
        );
        return;
      }

      // Ažuriranje chat istorije sa dobijenim odgovorom
      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[currentQuestionIndex].answer = data.answer;
        return updatedHistory;
      });
    } catch (error) {
      // Alert za grešku tokom procesa
      Alert.alert(
        "Greška",
        error.message || "Nismo uspeli da pošaljemo poruku. Pokušajte ponovo."
      );
    } finally {
      setLoading(false); // Reset loading stanja
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
