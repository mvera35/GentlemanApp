import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";
import { Icon, Overlay } from "react-native-elements";

const style = StyleSheet.create({
  container: { flex: 1 },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  table: {
    flex: 0.1,
    alignSelf: "center",
    marginTop: "-40%",
    marginBottom: "20%",
  },
  row: { flexDirection: "row" },
  element: {
    borderWidth: 4,
    height: 140,
    width: 140,
    borderColor: "#c3458c",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Element = ({ color, name, text }) => {
  return (
    <TouchableOpacity style={[style.element, { backgroundColor: color }]}>
      <Icon name={name} type="font-awesome-5" size={50} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default function Community({ history }) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Text style={style.text}>
          Todos son bienvenidos dentro de esta comunidad, dentro de la misma
          encontraras lo siguiente:
        </Text>
        <View style={style.table}>
          <View style={[style.row]}>
            <Element color="#f977bc" name="discord" text="Discord" />
            <Element color="#ffa9ee" name="microphone-alt" text="Podcast" />
          </View>

          <View style={[style.row]}>
            <Element color="#ffa9ee" name="chalkboard-teacher" text="Clases" />
            <Element color="#f977bc" name="user-friends" text="Entrevistas" />
          </View>
        </View>
        <Button
          color={"#c3458c"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/Community");
          }}
        />
      </View>
      <Header history={history} />
    </View>
  );
}
