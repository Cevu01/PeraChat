import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";

/**
 * Pomoćna funkcija za ponavljanje fetch zahteva u slučaju privremenih grešaka
 */
const fetchWithRetry = async (url, options, retries = 5, delay = 3000) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      } else if (response.status === 503) {
        console.warn(`API nedostupan (${url}), čekam ${delay / 1000}s...`);
        await new Promise((resolve) => setTimeout(resolve, delay)); // Sačekaj pre ponovnog pokušaja
      } else {
        throw new Error(
          `HTTP greška: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      if (attempt === retries - 1) throw error; // Ako je poslednji pokušaj, propagiraj grešku
    }
  }
  throw new Error(`API nije dostupan nakon ${retries} pokušaja: ${url}`);
};

/**
 * Funkcija koja šalje ime fajla backendu i obrađuje audio
 */
export const sendFileNameToBackend = async (fileName, collectionName) => {
  try {
    // Prvi POST zahtev na backend za obradu audio fajla
    const response = await fetchWithRetry(
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

    // Parsiranje JSON odgovora
    const jsonResponse = await response.json();
    const { transcription, answer } = jsonResponse;

    // Drugi POST zahtev ka drugom endpointu
    const secondResponse = await fetchWithRetry(
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
    Alert.alert("Greška", error.message);
    throw error;
  }
};
