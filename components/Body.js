import React, { useEffect } from "react";
import { styles } from "../styles/styles";
import { View, Text, FlatList } from "react-native";
import Estuche from "./Estuche";
import Header from "./Header";
import Footer from "./Footer";
import EscogeModelo from "./EscogeModelo";
import { useDispatch, useSelector } from "react-redux";
import { startFilterEstuches } from "../redux/estuchesSlice";
import BodyHeader from "./BodyHeader";
import EstuchesCounter from "./EstuchesCounter";
import EstucheNotFound from "./EstucheNotFound";
import Loading from "./Loading";
import { dummyData } from "../helpers/dummyData"; // temporal, para probar

export default function Body({ modelos }) {
  //if (!modelos?.length) return;

  const dispatch = useDispatch();
  const { slug, title, listaEstuches, loading } = useSelector(
    (state) => state.estuches
  );

  useEffect(() => {
    dispatch(startFilterEstuches({ slug, title }));
  }, [slug]);

  return (
    <View style={styles.body}>
      <Header />
      <BodyHeader />
      <EscogeModelo modelos={modelos} />
      <EstuchesCounter
        title={title}
        listaEstuches={listaEstuches}
        loading={loading}
      />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.list}
          data={listaEstuches}
          renderItem={({ item }) => <Estuche estuche={item} />}
          scrollEnabled={true}
          ListEmptyComponent={<EstucheNotFound title={title} />}
        />
      )}
      <Footer />
    </View>
  );
}
