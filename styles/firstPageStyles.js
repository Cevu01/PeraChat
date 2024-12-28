import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26262E", // bg-background-dark
    paddingTop: 56,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#30303B", // bg-background-light
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  scrollView: {
    marginBottom: 8,
    marginTop: 8,
  },
  botMessageContainer: {
    marginRight: 94,
    padding: 16,
    backgroundColor: "#26262E", // bg-background-dark
    borderRadius: 10,
    marginTop: 36,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  botIconContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  botText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.16,
    color: "#FBFBFB", // text-text-color
    fontFamily: "Poppins Regular",
    flexWrap: "wrap",
  },
  userText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.16,
    color: "#FBFBFB", // text-text-color
    fontFamily: "Poppins Regular",
  },
  answerContainer: {
    marginRight: 94,
    padding: 16,
    backgroundColor: "#26262E", // bg-background-dark
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  buttonsSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  circleWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  radialCircle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 115,
    backgroundColor: "#4CB8C4",
    shadowColor: "#3CD3AD",
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 10,
  },
  loader: {
    width: 60,
    height: 60,
  },
  stopAudioContainer: {
    position: "absolute",
    bottom: 40,
  },
  stopAudio: {
    color: "#FBFBFB",
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#30303B",
    borderRadius: 8,
    fontFamily: "Poppins Regular",
  },
});

export default styles;
