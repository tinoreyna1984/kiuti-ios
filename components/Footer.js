import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

export default function Footer() {
  return (
    <View style={styles.footer}>
        <View>
            <Text style={{textAlign: "center"}}>Envíos gratuitos a todo Ecuador (excepto Galápagos).</Text>
        </View>
        <View>
            <Text style={{textAlign: "center"}}>Fono: 0939481770 (WhatsApp).</Text>
        </View>
        <View>
            <Text style={{textAlign: "center"}}>Síguenos en Instagram: kiuti.cases</Text>
        </View>
    </View>
  )
}