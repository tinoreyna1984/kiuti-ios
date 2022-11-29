import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCallback } from "react";
import { Linking } from "react-native";

export default function WhatsAppButton({ url }) {
  
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
    else console.log("Error al enviar ", url);
  }, [url]);

  return (
    <FontAwesome.Button
      name="whatsapp"
      backgroundColor="green"
      onPress={handlePress}
    >
      Pídelo por WhatsApp
    </FontAwesome.Button>
  );
}
