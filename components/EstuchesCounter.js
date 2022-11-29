import { View, Text } from "react-native";
import React from "react";

export default function EstuchesCounter({ title, listaEstuches, loading }) {
  if (!listaEstuches?.length) return;
  return (
    <View style={{ paddingVertical: 10 }}>
      {!loading && (listaEstuches?.length || 0) && (
        <Text style={{ fontSize: 18 }}>
          Hay {listaEstuches?.length || 0}{" "}
          {listaEstuches?.length > 1 ? "estuches" : "estuche"} para {title}
        </Text>
      )}
    </View>
  );
}
