import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";

const style = StyleSheet.create({
  container: { flex: 1 },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default function Community({ history }) {
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Text style={style.text}>
          Todos son bienvenidos dentro de esta comunidad, dentro de la misma
          encontraras lo siguiente:
        </Text>
        <View></View>
        <Button
          color={"#c3458c"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/");
          }}
        />
      </View>
      <Header history={history} />
    </View>
  );
}
