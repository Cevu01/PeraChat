import { useState, useRef } from "react";
import { Audio } from "expo-av";

const useRecording = () => {
  const [recording, setRecording] = useState(null);
  const recordingRef = useRef(null);

  // Prilagođene opcije za snimanje u WAV formatu
  const recordingOptions = {
    android: {
      extension: ".wav",
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WAVE,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_PCM_16BIT,
      sampleRate: 44100,
      numberOfChannels: 1, // Mono
      bitRate: 705600, // 44100 Hz * 16 bits * 1 channel
    },
    ios: {
      extension: ".wav",
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
      sampleRate: 44100,
      numberOfChannels: 1, // Mono
      bitRate: 705600, // 44100 Hz * 16 bits * 1 channel
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };

  // Početak snimanja
  const startRecording = async () => {
    try {
      if (recordingRef.current) {
        console.log("Već postoji aktivno snimanje!");
        return;
      }

      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert("Mikrofon nije odobren.");
        return;
      }

      const recordingInstance = new Audio.Recording();
      await recordingInstance.prepareToRecordAsync(recordingOptions);
      await recordingInstance.startAsync();
      setRecording(recordingInstance);
      recordingRef.current = recordingInstance;
    } catch (error) {
      alert("Greška pri započinjanju snimanja:", error);
    }
  };

  // Zaustavljanje snimanja
  const stopRecording = async () => {
    try {
      if (recordingRef.current) {
        await recordingRef.current.stopAndUnloadAsync();
        const uri = recordingRef.current.getURI();

        alert(uri);
        setRecording(null);
        recordingRef.current = null; // Resetovanje reference
        return uri; // Vraća URI za dalju upotrebu
      }
    } catch (error) {
      alert("Greška pri zaustavljanju snimanja:", error);
    }
  };

  // Resetovanje stanja
  const resetRecording = () => {
    if (recordingRef.current) {
      recordingRef.current = null;
      setRecording(null);
    }
  };

  return {
    startRecording,
    stopRecording,
    resetRecording,
  };
};

export default useRecording;

// import { useState } from "react";
// import AudioRecord from "react-native-audio-record";

// const useAudioRecord = () => {
//   const [recording, setRecording] = useState(false);
//   const [audioPath, setAudioPath] = useState(null);

//   // Konfiguracija za snimanje
//   const config = {
//     sampleRate: 44100, // Frekvencija uzorkovanja
//     channels: 1, // Mono
//     bitsPerSample: 16, // Dubina uzorka
//     audioSource: 6, // Mikrofonski ulaz
//     wavFile: true, // Snimanje u WAV formatu
//   };

//   // Početak snimanja
//   const startRecording = async () => {
//     try {
//       AudioRecord.init(config); // Inicijalizacija sa konfiguracijom
//       setRecording(true);
//       AudioRecord.start();
//       console.log("Snimanje je započeto.");
//     } catch (error) {
//       console.error("Greška pri pokretanju snimanja:", error);
//     }
//   };

//   // Zaustavljanje snimanja
//   const stopRecording = async () => {
//     try {
//       if (recording) {
//         const audioFile = await AudioRecord.stop();
//         setRecording(false);
//         setAudioPath(audioFile); // Postavi putanju do snimljenog fajla
//         console.log("Snimanje je završeno. Putanja:", audioFile);
//         return audioFile; // Vrati putanju do WAV fajla
//       }
//     } catch (error) {
//       console.error("Greška pri zaustavljanju snimanja:", error);
//     }
//   };

//   return {
//     startRecording,
//     stopRecording,
//     audioPath, // Putanja do snimljenog fajla
//   };
// };

// export default useAudioRecord;
