import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const Button = ({ color, text }) => {
  const styles = StyleSheet.create({
    appButtonContainer: {
      backgroundColor: color,
      borderRadius: 100,
      height: "25%",
      width: "65%",
      top: "100%",
      left: "20%"
    },
    appButtonText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      alignSelf: "center",
      paddingTop: "5%",
    },
  });

  return (
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{text}</Text>
      </TouchableOpacity>
  );
};
