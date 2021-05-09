import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    return (
      <View style={{ position: "relative" }}>
        <Header
          rightComponent={{
            icon: "menu",
            color: "#000",
            onPress: this.iconAction,
          }}
          backgroundColor={"#ea1789"}
          statusBarProps={{ backgroundColor: "#b2005c" }}
        />

        <View>
          {this.state.expanded ? (
            <Options history={this.props.history} />
          ) : null}
        </View>
      </View>
    );
  }

  iconAction = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

const Button = ({ title, action }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ffa9ee" : "#f977bc",
          borderColor: "#c3458c",
          borderWidth: 2,
          flexDirection: "row",
          margin: -1,
        },
      ]}
      onPress={action}
    >
      <View style={styles.buttonCircle} />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const Options = ({ history }) => {
  return (
    <View style={{ position: "absolute", zIndex: 2, width: "100%" }}>
      <Button
        title={"Inicio"}
        action={() => {
          history.push("/");
        }}
      />
      <Button
        title={"Redes Sociales"}
        action={() => {
          history.push("/Social");
        }}
      />
      <Button
        title={"Acerca de la Aplicación"}
        action={() => {
          history.push("/About");
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  buttonCircle: {
    width: 10,
    height: 10,
    backgroundColor: "#c3458c",
    borderRadius: 10,
    marginLeft: "10%",
    marginTop: "2.5%",
  },
  buttonText: { color: "#fff", fontSize: 18, paddingLeft: "2%", fontWeight: "bold" },
});
