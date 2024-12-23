import { Audio } from "expo-av";

export const playAudioFromUrl = async (url) => {
  try {
    console.log("Početak reprodukcije direktno sa URL-a:", url);

    // Inicijalizuj Audio.Sound za reprodukciju
    const sound = new Audio.Sound();
    await sound.loadAsync({ uri: url }); // Direktno učitavanje sa URL-a
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync(); // Oslobodi resurse nakon reprodukcije
        console.log("Reprodukcija završena!");
      }
    });

    console.log("Reprodukcija započeta!");
  } catch (error) {
    console.error(
      "Greška pri reprodukciji audio fajla direktno sa URL-a:",
      error
    );
  }
};
