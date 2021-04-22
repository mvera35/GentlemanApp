import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const Button = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ffa9ee" : "#f977bc",
          borderColor: "#c3458c",
          borderWidth: 1,
          flexDirection: "row",
        }
      ]}
    >
      <View
        style={ styles.buttonCircle }
      />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const Options = () => {
  return (
    <View style={{ margin: -1 }}>
      <Button title={"Inicio"} />
      <Button title={"Redes Sociales"} />
      <Button title={"Acerca de la Aplicación"} />
    </View>
  );
};

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    return (
      <View>
        <Header
          rightComponent={{
            icon: "menu",
            color: "#000",
            onPress: this.iconAction,
          }}
          backgroundColor={"#ea1789"}
          statusBarProps={{ backgroundColor: "#b2005c" }}
        />
        <View>{this.state.expanded ? <Options /> : null}</View>
      </View>
    );
  }

  iconAction = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 10,
    height: 10,
    backgroundColor: "#c3458c",
    borderRadius: 10,
    marginLeft: "10%",
    marginTop: "2.5%",
  },
  buttonText: { fontSize: 18, paddingLeft: "2%" }
});
