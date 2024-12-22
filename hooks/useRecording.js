import { useState, useRef } from "react";
import { Audio } from "expo-av";

const useRecording = () => {
  const [recording, setRecording] = useState(null);
  const recordingRef = useRef(null);
  const recordingOptions = {
    android: {
      extension: ".3gp",
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
      sampleRate: 8000, // Standardni sample rate za 3GP format
      numberOfChannels: 1,
      bitRate: 12200, // Bitrate za govorni kvalitet
    },
    ios: {
      extension: ".3gp",
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
      sampleRate: 8000,
      numberOfChannels: 1,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };
  // const recordingOptions = {
  //   android: {
  //     extension: ".wav",
  //     outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_PCM,
  //     audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_PCM_16BIT,
  //     sampleRate: 44100,
  //     numberOfChannels: 1,
  //     bitRate: 705600,
  //   },
  //   ios: {
  //     extension: ".wav",
  //     audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
  //     sampleRate: 44100,
  //     numberOfChannels: 1,
  //     linearPCMBitDepth: 16,
  //     linearPCMIsBigEndian: false,
  //     linearPCMIsFloat: false,
  //   },
  // };

  // Početak snimanja
  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert("Dozvola za mikrofon nije odobrena.");
        return;
      }

      const recordingInstance = new Audio.Recording();
      await recordingInstance.prepareToRecordAsync(recordingOptions);
      await recordingInstance.startAsync();
      console.log("Snimanje je počelo...");
      setRecording(recordingInstance);
    } catch (error) {
      console.error("Greška pri započinjanju snimanja:", error);
    }
  };

  // Zaustavljanje snimanja
  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();

        console.log("Snimljeni fajl:", uri);
        return uri;
      }
    } catch (error) {
      console.error("Greška pri zaustavljanju snimanja:", error);
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
