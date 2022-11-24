import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { View, Text, Image } from "react-native";

export default function Header() {
  const [loaded] = useFonts({
    AlexBrush: require("../assets/AlexBrush-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../assets/kiuti-logo.jpg")} />
      <Text style={styles.title}>
        <Text
          style={{ fontFamily: "AlexBrush", fontSize: 40, fontWeight: "bold" }}
        >
          Kiuti Cases
        </Text>
      </Text>
    </View>
  );
}
