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
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
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
    backgroundColor: "#b3b2af",
    width: "100%",
    height: "28%",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderTopStartRadius: "20%",
    borderTopEndRadius: "20%",
    borderColor: "grey",
    borderStyle: "solid",
    paddingBottom: 150,
    paddingHorizontal: 20,
    //marginTop: 10,
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
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 10
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
    paddingVertical: 5,
  },
  estucheImg: {
    width: 180,
    height: 180,
  },
  estucheTitle: {
    textAlign: "center",
    fontSize: 25,
  },
  estuchePrice: {
    textAlign: "center",
    fontSize: 20,
  },
});

