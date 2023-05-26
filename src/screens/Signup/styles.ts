import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F2F5",
    flex: 1,
    position: "relative"
  },
  name: {
    fontFamily: "Poppins_400Regular",
    color: "#969CB2",
    backgroundColor: "#fff",
    height: 50,
    marginTop: 25,
    marginHorizontal: 25,
    marginBottom: 12,
    padding: 14,
    borderRadius: 5
  },
  price: {
    fontFamily: "Poppins_400Regular",
    color: "#969CB2",
    backgroundColor: "#fff",
    height: 50,
    marginHorizontal: 25,
    padding: 14,
    borderRadius: 5
  },
  movementations: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 20
  },
  income: {
    flexDirection: "row",
    borderColor: "#969CB2",
    borderWidth: 1,
    padding: 14,
    flex: 1,
    justifyContent: "center",
    borderRadius: 3,
    marginRight: 5
  },
  outcome: {
    flexDirection: "row",
    borderColor: "#969CB2",
    borderWidth: 1,
    padding: 14,
    flex: 1,
    justifyContent: "center",
    borderRadius: 3,
    marginLeft: 5
  },
  movementationText: {
    fontFamily: "Poppins_400Regular",
    color: "#363F5F",
    marginLeft: 14
  },
  category: {
    fontFamily: "Poppins_400Regular",
    color: "#969CB2",
    backgroundColor: "#fff",
    height: 50,
    marginHorizontal: 25,
    padding: 14,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    backgroundColor: "#FF872C",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 3,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    position: "absolute",
    bottom: 25,
    width: "88%"
  },
  buttonText: {
    fontFamily: "Poppins_500Medium",
    color: "#fff"
  }
});