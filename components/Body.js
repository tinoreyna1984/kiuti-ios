import React, { useEffect } from "react";
import { styles } from "../styles/styles";
import { View, Text, FlatList } from "react-native";
import Estuche from "./Estuche";
import Header from "./Header";
import { dummyData } from "../helpers/dummyData";
import Footer from "./Footer";
import EscogeModelo from "./EscogeModelo";
import { useDispatch, useSelector } from "react-redux";
import { startFilterEstuches } from "../redux/estuchesSlice";

export default function Body({modelos}) {

  if(!modelos?.length) return;
  //console.log(modelos)

  const dispatch = useDispatch();
  const { slug, title, listaEstuches, loading } = useSelector(
    (state) => state.estuches
  );

  useEffect(() => {
    dispatch(startFilterEstuches({ slug, title }));
  }, [slug]);

  console.log(listaEstuches)

  return (
    <View style={styles.body}>
      <Header />
      <EscogeModelo modelos={modelos} />
      <FlatList
        style={styles.list}
        data={ listaEstuches }
        renderItem={({ item }) => <Estuche estuche={item} />}
        scrollEnabled={true}
      />
      <Footer />
    </View>
  );
}
