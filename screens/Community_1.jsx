import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";

export default function Screen({ history }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "8%",
            marginBottom: "-30%"
          }}
        >
          {
            "En esta comunidad aprenderas sobre diferentes tecnologías relacionadas al desarrollo web, esto mediante clases o de los mismos integrantes de la comunidad."
          }
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Algunas de las tecnologías que encontraras en la comunidad son las
          siguientes:
        </Text>
        <View></View>
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
