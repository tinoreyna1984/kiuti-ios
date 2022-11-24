import React from "react";
import { styles } from "../styles/styles";
import { View, Text, FlatList } from "react-native";
import Estuche from "./Estuche";
import Header from "./Header";
import { dummyData } from "../helpers/dummyData";
import Footer from "./Footer";

export default function Body() {
  return (
    <View style={styles.body}>
      <Header />
      <FlatList
        style={styles.list}
        data={ dummyData }
        renderItem={({ item }) => <Estuche estuche={item} />}
        scrollEnabled={true}
      />
      <Footer />
    </View>
  );
}
