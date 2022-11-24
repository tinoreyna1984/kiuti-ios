import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // statusBar
  statusBar: {
    backgroundColor: '#f16c94',
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
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderColor: "grey",
    borderStyle: "solid",
    borderBottomStartRadius: "20%",
    borderBottomEndRadius: "20%",
    shadowRadius: 25,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 10
  },
  logo : {
    width: 98,
    height: 98
  },
  title: {
    color: "#000",
    marginTop: 20,
  },
  // footer
  footer: {
    backgroundColor: "#adb5bd",
    width: "100%",
    height: "28%",
    justifyContent: "center",
    alignContent: "center",
    borderTopStartRadius: "20%",
    borderTopEndRadius: "20%",
    borderColor: "grey",
    borderStyle: "solid",
    paddingTop: 20,
    paddingBottom: 150,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowRadius: 25,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 10
  },
  // body
  body: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  list: {
    width: "100%",
  },
  // estuche
  estuche: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: "20%",
    paddingVertical: 5,
  },
  estucheImg: {
    width: 120,
    height: 120,
  },
  estucheTitle: {
    fontSize: 20,
  },
  estuchePrice: {
    fontSize: 16,
  },
});

