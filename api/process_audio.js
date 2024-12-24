import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";

// Postavljanje Buffer-a u globalni kontekst
export const sendFileNameToBackend = async (fileName) => {
  try {
    // Prvi POST zahtev na backend za obradu audio fajla
    const response = await fetch("http://54.188.217.11:8000/process_audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_name: fileName }),
    });

    if (!response.ok) {
      throw new Error(`Greška: ${response.statusText}`);
    }

    // Parsiranje JSON odgovora
    const jsonResponse = await response.json();
    const { transcription, answer } = jsonResponse;

    // Drugi POST zahtev ka drugom endpointu sa transkripcijom i imenom fajla
    const secondResponse = await fetch(
      "http://54.188.217.11:8000/convert_text_to_audio",
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
      throw new Error(
        `Greška kod drugog endpointa: ${secondResponse.statusText}`
      );
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
    console.error("Greška:", error.message);
    throw error;
  }
};
