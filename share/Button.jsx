import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";

export const Button = ({ color, text, icon, action }) => {
  const styles = StyleSheet.create({
    centerContent: {
      flex: 1,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    appButtonContainer: {
      backgroundColor: color,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      width: "55%",
      height: 60,
    },
    appButtonText: {
      fontSize: 20,
      color: "#000",
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.centerContent}>
      <TouchableOpacity style={styles.appButtonContainer} onPress={action}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name={icon} type="ionicon" size={40} />
          <Text style={styles.appButtonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
