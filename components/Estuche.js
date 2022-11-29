import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import WhatsAppButton from "./WhatsAppButton";
import { useSelector } from "react-redux";

export default function Estuche({ estuche }) {
  const { title: modelo } = useSelector((state) => state.estuches);

  const whatsApp = "https://api.whatsapp.com/send?phone=593939481770";
  const textbase = "text=Me gustaría adquirir el";
  const url = `${whatsApp}&${textbase} ${estuche.title} para ${modelo}, por favor.`;

  return (
    <View style={styles.estuche}>
      <Image
        style={styles.estucheImg}
        source={{ uri: estuche.metadata.image.url }}
      />
      <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
        <Text style={styles.estucheTitle}>{estuche.title}</Text>
        <Text style={styles.estuchePrice}>{estuche.metadata.precio}</Text>
      </View>
      <WhatsAppButton url={url} />
    </View>
  );
}
