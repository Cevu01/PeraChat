import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26262E", // bg-background-dark
    paddingTop: 56,
  },
  backButtonContainer: {
    position: "absolute",
    top: 75,
    left: 6,
    zIndex: 10,
  },
  chatContainer: {
    flex: 1,
    paddingTop: 80,
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
    marginBottom: 24,
    backgroundColor: "#26262E", // bg-background-dark
    borderRadius: 10,
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
  loader: {
    width: 60,
    height: 60,
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
});

export default styles;
