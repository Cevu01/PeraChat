import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";

// Postavljanje Buffer-a u globalni kontekst
export const sendFileNameToBackend = async (fileName) => {
  console.log("Započeta obrada za fajl:", fileName); // Log početka funkcije

  try {
    // Prvi POST zahtev na backend za obradu audio fajla
    console.log("Slanje POST zahteva na /process_audio sa fajlom:", fileName);
    const response = await fetch("http://54.188.217.11:8000/process_audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_name: fileName }),
    });

    console.log("Status odgovora prvog zahteva:", response.status); // Log statusa
    if (!response.ok) {
      console.error("Greška kod /process_audio:", response.statusText);
      throw new Error(`Greška: ${response.statusText}`);
    }

    // Parsiranje JSON odgovora
    const jsonResponse = await response.json();
    console.log("Odgovor sa /process_audio:", jsonResponse); // Log odgovora
    const { transcription, answer } = jsonResponse;

    // Drugi POST zahtev ka drugom endpointu
    console.log(
      "Slanje POST zahteva na /convert_text_to_audio sa odgovorom i fajlom:",
      { text: answer || "Prazan odgovor", file_name: fileName }
    );
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

    console.log("Status odgovora drugog zahteva:", secondResponse.status); // Log statusa
    if (!secondResponse.ok) {
      console.error(
        "Greška kod /convert_text_to_audio:",
        secondResponse.statusText
      );
      throw new Error(
        `Greška kod drugog endpointa: ${secondResponse.statusText}`
      );
    }

    // Dohvatanje binarnih podataka iz drugog endpointa
    console.log("Preuzimanje binarnih podataka sa /convert_text_to_audio...");
    const arrayBuffer = await secondResponse.arrayBuffer();

    // Konvertovanje binarnih podataka u Base64
    console.log("Konvertovanje binarnih podataka u Base64...");
    const base64Audio = Buffer.from(arrayBuffer).toString("base64");

    // Generisanje putanje za audio fajl
    const audioFileUri = `${FileSystem.documentDirectory}${fileName}_answer.mp3`;
    console.log("Generisana putanja za audio fajl:", audioFileUri);

    // Sačuvaj audio fajl na uređaju
    console.log("Čuvanje audio fajla na uređaju...");
    await FileSystem.writeAsStringAsync(audioFileUri, base64Audio, {
      encoding: FileSystem.EncodingType.Base64,
    });
    console.log("Audio fajl uspešno sačuvan:", audioFileUri);

    // Povratak podataka
    return {
      transcription,
      answer,
      audioFileUri,
    };
  } catch (error) {
    console.error("Greška tokom obrade:", error.message); // Log greške
    throw error;
  }
};
