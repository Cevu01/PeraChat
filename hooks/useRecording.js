import { useState } from "react";
import { Audio } from "expo-av";

const useRecording = () => {
  const [recording, setRecording] = useState(null);

  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert("Dozvola za mikrofon nije odobrena.");
        return;
      }

      const recordingInstance = new Audio.Recording();
      await recordingInstance.prepareToRecordAsync();
      await recordingInstance.startAsync();
      setRecording(recordingInstance);
    } catch (error) {
      console.error("Greška pri započinjanju snimanja:", error);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) {
        console.warn("Snimanje nije aktivno.");
        return null;
      }

      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log("Snimljeni fajl:", uri);
      return uri;
    } catch (error) {
      console.error("Greška pri zaustavljanju snimanja:", error);
    }
  };

  return {
    startRecording,
    stopRecording,
  };
};

export default useRecording;
