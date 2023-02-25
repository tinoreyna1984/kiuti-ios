import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Body from "./components/Body";
import { styles } from "./styles/styles";
import { getDummyData } from "./api/get-dummy-data";

export default function Main() {

  const {modelosArray : data} =  getDummyData()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Body modelos={data} />
    </View>
  );
}
