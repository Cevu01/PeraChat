import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

export const downloadAndPlayAudio = async (bucket, key) => {
  if (!bucket || !key) {
    throw new Error("Bucket ili key nisu definisani");
  }

  const s3Url = `https://${bucket}.s3.amazonaws.com/${key}`;
  console.log("Generisan S3 URL:", s3Url);

  const localUri = `${FileSystem.documentDirectory}${key}`;

  try {
    // Preuzimanje fajla
    const { uri } = await FileSystem.downloadAsync(s3Url, localUri);
    if (!uri) {
      throw new Error("Preuzimanje nije uspelo. URI nije dostupan.");
    }
    console.log("Audio fajl je preuzet na:", uri);

    // Provera fajla nakon preuzimanja
    const fileInfo = await FileSystem.getInfoAsync(localUri);
    if (!fileInfo.exists) {
      throw new Error("Fajl nije preuzet. Ne postoji na lokalnom sistemu.");
    }
    if (fileInfo.size === 0) {
      throw new Error("Fajl je preuzet, ali je prazan.");
    }
    console.log(
      `Fajl uspešno preuzet. Veličina fajla: ${fileInfo.size} bajtova`
    );
    const content = await FileSystem.readAsStringAsync(localUri);
    console.log("Sadržaj fajla:", content);

    // Reprodukcija lokalnog fajla
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync({ uri });
      await sound.playAsync();
    } catch (error) {
      console.error("Greška pri reprodukciji audio fajla:", error);
    } finally {
      sound.unloadAsync(); // Oslobodi resurse nakon reprodukcije
    }

    console.log("Reprodukcija završena!");
  } catch (error) {
    console.error(
      "Greška pri preuzimanju ili reprodukciji audio fajla:",
      error
    );
  }
};

// import { Audio } from "expo-av";

// export const playAudioFromS3 = async (bucket, key) => {
//   const s3Url = `https://${bucket}.s3.us-west0-2.amazonaws.com/${key}`;

//   try {
//     console.log("Početak reprodukcije sa URL-a:", s3Url);

//     // Inicijalizuj Audio.Sound za reprodukciju
//     const sound = new Audio.Sound();
//     await sound.loadAsync({ uri: s3Url }); // Direktno učitavanje sa URL-a
//     await sound.playAsync();

//     sound.setOnPlaybackStatusUpdate((status) => {
//       if (status.didJustFinish) {
//         sound.unloadAsync(); // Oslobodi resurse nakon reprodukcije
//         console.log("Reprodukcija završena!");
//       }
//     });

//     console.log("Reprodukcija započeta!");
//   } catch (error) {
//     console.error("Greška pri reprodukciji audio fajla sa URL-a:", error);
//   }
// };
