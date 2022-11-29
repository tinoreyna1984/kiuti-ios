import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../styles/styles";

export default function EstucheNotFound({ title }) {
  return (
    <View style={styles.estucheNotFound}>
      <Image
        source={require("../assets/sad-face.png")}
        style={{ height: 300, width: 300 }}
      />
      <View style={{paddingBottom: 100}}>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Lo sentimos</Text>
        <Text style={{ fontSize: 20, textAlign: "center" }}>No tenemos estuches para {title}</Text>
      </View>
    </View>
  );
}
