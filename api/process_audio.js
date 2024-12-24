import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";

export const sendFileNameToBackend = async (fileName) => {
  try {
    console.log("Slanje POST zahteva sa file_name:", fileName);

    const response = await fetch("http://54.188.217.11:8000/process_audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_name: fileName }), // Slanje imena fajla
    });

    if (!response.ok) {
      throw new Error(`Greška: ${response.statusText}`);
    }

    // Preuzimanje binarnih podataka kao arrayBuffer
    const arrayBuffer = await response.arrayBuffer();

    // Konvertovanje binarnih podataka u Base64
    const base64Data = Buffer.from(arrayBuffer).toString("base64");

    // Sačuvajte audio fajl koristeći FileSystem
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    await FileSystem.writeAsStringAsync(fileUri, base64Data, {
      encoding: FileSystem.EncodingType.Base64,
    });

    console.log("Audio fajl preuzet i sačuvan na uređaj:", fileUri);
    return fileUri; // Putanja do fajla na uređaju
  } catch (error) {
    console.error("Greška pri slanju zahteva:", error.message);
    throw error; // Proslijedite grešku pozivaocu funkcije
  }
};
