import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 16
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#363F5F"
  },
  amount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    marginBottom: 10
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  category: {
    flexDirection: "row",
    alignItems: "center"
  },
  categoryName: {
    fontFamily: "Poppins_400Regular",
    lineHeight: 24,
    color: "#969CB2",
    marginLeft: 8
  },
  date: {
    fontFamily: "Poppins_400Regular",
    color: "#969CB2"
  }
});