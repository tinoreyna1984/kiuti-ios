import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Body from "./components/Body";
import { styles } from "./styles/styles";
import { getInitialData } from "./api/get-initial-data";

export default function Main() {

  const { data, error } = getInitialData();

  //console.log(error?.message)

  if(data?.length === 0) return;

  //console.log(data)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Body modelos={data} />
    </View>
  );
}
