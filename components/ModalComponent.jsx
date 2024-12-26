import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GradientBackground from "./GradientBackground";

const ModalComponent = ({ visible, onClose, onSelectOption }) => {
  const options = ["Dental", "main-app", "Business", "Law"];
  const [selectedOption, setSelectedOption] = useState("Dental"); // Čuva trenutno selektovanu opciju

  const handleOptionPress = (option) => {
    setSelectedOption(option); // Ažuriramo trenutno selektovanu opciju
    onSelectOption(option); // Prosleđujemo selekciju roditeljskoj komponenti
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Izaberi bazu</Text>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption, // Primeni stil ako je selektovana
              ]}
              onPress={() => handleOptionPress(option)}
            >
              <Text
                style={[
                  styles.modalText,
                  selectedOption === option && styles.selectedText, // Promena stila teksta
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
          <GradientBackground style={styles.closeButton}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </GradientBackground>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(18, 18, 18, 0.783)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    height: "50%",
    padding: 20,
    backgroundColor: "#30303B",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "Poppins Regular",
    color: "#FBFBFB",
  },
  option: {
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#26262E",
    alignItems: "center",
  },
  modalText: {
    fontFamily: "Poppins Regular",
    color: "#FBFBFB",
  },
  selectedOption: {
    borderWidth: 1, // Dodajemo border
    borderColor: "#fbfbfbd1", // Boja bordera
  },
  selectedText: {
    color: "#FBFBFB", // Boja teksta za selektovanu opciju
  },
  closeButton: {
    padding: 10,
    width: "80%",
    borderRadius: 5,
    marginTop: 10,
    marginRight: 94,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins Regular",
  },
});

export default ModalComponent;
