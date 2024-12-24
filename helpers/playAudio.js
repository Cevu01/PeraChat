import { Audio } from "expo-av";

export const playAudio = async (fileUri) => {
  try {
    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    await sound.playAsync();

    return sound; // Vratite instancu ako želite kasnije da pauzirate/zaustavite zvuk
  } catch (error) {
    alert("Greška pri reprodukciji audio fajla:", error.message);
  }
};
