import { Audio } from "expo-av";

export const playAudio = async (fileUri) => {
  try {
    console.log("Reprodukcija audio fajla sa lokacije:", fileUri);

    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    await sound.playAsync();

    console.log("Audio fajl je počeo sa reprodukcijom");
    return sound; // Vratite instancu ako želite kasnije da pauzirate/zaustavite zvuk
  } catch (error) {
    console.error("Greška pri reprodukciji audio fajla:", error.message);
  }
};
