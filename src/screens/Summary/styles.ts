import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F2F5",
    flex: 1,
    position: "relative"
  },
  header: {
    backgroundColor: "#5636D3",
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#fff",
    margin: 18
  },
  body: {
    margin: 25
  },
  monthView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  month: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
  },
  list: {
    marginVertical: 25
  },
  transaction: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  transactionName: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15
  },
  transactionPrice: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15
  }
});