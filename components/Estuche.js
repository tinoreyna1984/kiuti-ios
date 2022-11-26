import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../styles/styles";

export default function Estuche({ estuche }) {
  // cambiar source a source={{uri: estuche.imageUrl}}
  return (
    <View style={styles.estuche}>
      <Image
        style={styles.estucheImg}
        source={{uri: estuche.metadata.image.url}}
      />
      <View>
        <Text style={styles.estucheTitle}>{estuche.title}</Text>
        <Text style={styles.estuchePrice}>{estuche.metadata.precio}</Text>
      </View>
    </View>
  );
}
