import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon, FAB } from "react-native-elements";

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
      color: "#fff",
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
          <Icon name={icon} type="ionicon" size={40} color="#fff" />
          <Text style={styles.appButtonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const OptionButton = ({ text, icon, action }) => {
  return <Button color={"#f977bc"} text={text} icon={icon} action={action} />;
};

const color = "#a9adb4";

export const BackButton = ({ text, icon, action }) => {
  return <Button color={color} text={text} icon={icon} action={action} />;
};

export const FloatButton = ({ action, style }) => {
  return (
    <FAB
      color={color}
      placement="left"
      buttonStyle={style.buttonStyle}
      icon={
        <View style={style.iconView}>
          <Icon name="arrow-undo-sharp" type="ionicon" size={50} color="#fff" />
        </View>
      }
      onPress={action}
    />
  );
};
