import React from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-elements";
import * as Linking from "expo-linking";

const style = StyleSheet.create({
  tex: { color: "#fff", fontSize: 18, textAlign: "justify", fontWeight: "bold"},
  element: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#c3458c",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Element = ({
  backgroundColor,
  name,
  text,
  iconColor,
  iconBackground,
  url,
}) => {
  return (
    <TouchableOpacity
      style={[style.element, { backgroundColor: backgroundColor }]}
      onPress={() => {
        Alert.alert(
          "Espera!!!",
          `¿Seguro que te quieres redirigir a ${text}?`,
          [
            {
              text: "Si",
              onPress: () => {
                Linking.openURL(url);
              },
            },
            { text: "No", onPress: () => null, style: "cancel" },
          ]
        );
      }}
    >
      <Icon
        name={name}
        type="font-awesome-5"
        size={50}
        backgroundColor={iconBackground}
        color={iconColor}
        borderRadius={5}
      />
      <Text style={style.tex}>{text}</Text>
    </TouchableOpacity>
  );
};
