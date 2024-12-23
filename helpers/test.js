import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

export const testAudioPlayback = async (url) => {
  const fileName = url.split("/").pop(); // Ekstrahuje ime fajla iz URL-a
  const localUri = `${FileSystem.documentDirectory}${fileName}`;

  try {
    console.log("Početak preuzimanja fajla:", url);

    // Preuzmi fajl lokalno
    const { uri } = await FileSystem.downloadAsync(url, localUri);
    console.log("Audio fajl je preuzet na:", uri);

    // Inicijalizuj Audio.Sound za reprodukciju
    const sound = new Audio.Sound();
    await sound.loadAsync({ uri });
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync(); // Oslobodi resurse nakon reprodukcije
        console.log("Reprodukcija završena!");
      }
    });
  } catch (error) {
    console.error(
      "Greška pri preuzimanju ili reprodukciji audio fajla:",
      error
    );
  }
};
