import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GradientBackground from "./GradientBackground";

const ModalComponent = ({ visible, onClose, children }) => {
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
          <Text style={styles.modalText}>Dental 🏥</Text>
          <Text style={styles.modalText}>Ratni veterani 🔫</Text>
          <Text style={styles.modalText}>Sport ⚽</Text>
          <Text style={styles.modalText}>Advokat 👨‍🎓</Text>
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
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "Poppins Regular",
  },
  modalText: {
    width: "80%",
    backgroundColor: "#e7e7e7",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    fontFamily: "Poppins Regular",
  },
  closeButton: {
    padding: 10,
    width: "80%",
    borderRadius: 5,
    fontFamily: "Poppins Regular",
    marginRight: 94,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins Regular",
  },
});

export default ModalComponent;
