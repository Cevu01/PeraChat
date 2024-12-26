import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";

export const sendFileNameToBackend = async (fileName, collectionName) => {
  try {
    // Prvi POST zahtev na backend za obradu audio fajla
    const response = await fetch(
      "https://x4661ug1wj.execute-api.us-west-2.amazonaws.com/process_audio",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_name: fileName,
          collection_name: collectionName,
        }),
      }
    );

    if (!response.ok) {
      const errorMessage = `Greška kod /process_audio: ${response.statusText}`;
      Alert.alert("Greška", errorMessage); // Alert za grešku
      throw new Error(errorMessage);
    }

    // Parsiranje JSON odgovora
    const jsonResponse = await response.json();
    const { transcription, answer } = jsonResponse;

    // Drugi POST zahtev ka drugom endpointu
    const secondResponse = await fetch(
      "https://x4661ug1wj.execute-api.us-west-2.amazonaws.com/convert_text_to_audio",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: answer || "Prazan odgovor",
          file_name: fileName,
        }),
      }
    );

    if (!secondResponse.ok) {
      const errorMessage = `Greška kod /convert_text_to_audio: ${secondResponse.statusText}`;
      Alert.alert("Greška", errorMessage); // Alert za grešku
      throw new Error(errorMessage);
    }

    // Dohvatanje binarnih podataka iz drugog endpointa
    const arrayBuffer = await secondResponse.arrayBuffer();

    // Konvertovanje binarnih podataka u Base64
    const base64Audio = Buffer.from(arrayBuffer).toString("base64");

    // Generisanje putanje za audio fajl
    const audioFileUri = `${FileSystem.documentDirectory}${fileName}_answer.mp3`;

    // Sačuvaj audio fajl na uređaju
    await FileSystem.writeAsStringAsync(audioFileUri, base64Audio, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Povratak podataka
    return {
      transcription,
      answer,
      audioFileUri,
    };
  } catch (error) {
    // Alert za hvatanje grešaka tokom procesa
    throw error;
  }
};
