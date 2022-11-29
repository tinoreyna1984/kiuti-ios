import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // statusBar
  statusBar: {
    backgroundColor: "#f16c94",
  },
  // container
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  // header
  header: {
    backgroundColor: "#f16c94",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
    borderBottomStartRadius: "20%",
    borderBottomEndRadius: "20%",
    shadowRadius: 25,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 10,
  },
  logo: {
    width: 98,
    height: 98,
  },
  title: {
    color: "#000",
    marginTop: 20,
  },
  // footer
  footer: {
    backgroundColor: "#b3b2af",
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderTopStartRadius: "20%",
    borderTopEndRadius: "20%",
    borderColor: "grey",
    borderStyle: "solid",
    paddingBottom: 250,
    paddingHorizontal: 20,
    //marginTop: 10,
    shadowRadius: 25,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 10,
  },
  // body
  body: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  bodyHeader: {
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  list: {
    width: "100%",
    paddingHorizontal: 10,
  },
  escogeModelo: {
    width: "100%",
    marginTop: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  selector: {
    backgroundColor: "#b3b2af",
    borderRadius: "15%",
    width: "60%",
    padding: 10,
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 10,
  },
  // estuche
  estuche: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: "20%",
    paddingVertical: 10,
  },
  estucheImg: {
    width: 180,
    height: 180,
  },
  estucheTitle: {
    textAlign: "center",
    fontSize: 18,
  },
  estuchePrice: {
    textAlign: "center",
    fontSize: 15,
  },
  estucheNotFound : {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingTop: 20,
    paddingBottom: 300,
  },
  // modal
  modalView: {
    marginTop: 150,
    marginStart: 50,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    width: "75%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
  },
  // loading
  loading : {
    margin: "10%",
    //height: "100%",
  },
});
