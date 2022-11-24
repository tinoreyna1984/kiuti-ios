import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Body from "./components/Body";
import { styles } from "./styles/styles";

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Body />
    </View>
  );
}
