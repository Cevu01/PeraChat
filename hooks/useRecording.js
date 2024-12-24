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
      alert("Greška pri započinjanju snimanja:", error);
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
      return uri;
    } catch (error) {
      alert("Greška pri zaustavljanju snimanja:", error);
    }
  };

  return {
    startRecording,
    stopRecording,
  };
};

export default useRecording;
