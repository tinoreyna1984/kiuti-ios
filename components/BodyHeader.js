import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

export default function BodyHeader() {
  return (
    <View style={styles.bodyHeader}>
      <Text>Aquí encontrarás los estuches más kiut para tu iPhone. 🥰</Text>
      <Text>Elige tu modelo de iPhone y podrás ver todos los estuches que están disponibles. 🤗</Text>
    </View>
  )
}