import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

export default function EscogeModelo({modelos}) {
  
  if(!modelos?.length) return;

  //console.log(modelos)
  //modelos.map(({slug, title}) => console.log({slug, title}))

  return (
    <View style={styles.escogeModelo}>
      <TouchableOpacity style={styles.selector}>
        <Text style={{textAlign: 'center'}}>¿Cuál es tu modelo de iPhone?</Text>
      </TouchableOpacity>
    </View>
  )
}