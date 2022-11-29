import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { startFilterEstuches } from "../redux/estuchesSlice";

export default function EscogeModelo({ modelos }) {
  //if (!modelos?.length) return;

  //modelos.map(({slug, title}) => console.log({slug, title}))

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handlePress = ({ slug, title }) => {
    dispatch(startFilterEstuches({ slug, title }));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.escogeModelo}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ textAlign: "center" }}>
          ¿Cuál es tu modelo de iPhone?
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalView}>
          {modelos?.length ? (
            <FlatList
              style={styles.modalContent}
              data={modelos}
              renderItem={({ item: { slug, title } }) => (
                <Button
                  title={title}
                  onPress={() => handlePress({ slug, title })}
                />
              )}
              scrollEnabled={true}
            />
          ) : (
            <Text>Por el momento no tenemos estuches</Text>
          )}
          <Button
            onPress={() => setModalVisible(!modalVisible)}
            title="Cerrar"
            color="#fc0303"
          />
        </View>
      </Modal>
    </View>
  );
}
