import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";

export const Button = ({ color, text, icon, action }) => {
  const styles = StyleSheet.create({
    appButtonContainer: {
      backgroundColor: color,
      borderRadius: 100,
      height: "10%",
      width: "60%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    appButtonText: {
      fontSize: 20,
      color: "#000",
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={action}>
      <Icon
        name={icon}
        type="ionicon"
        size={40}
      />
      <Text style={styles.appButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};
