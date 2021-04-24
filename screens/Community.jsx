import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";

export default function Community({ history }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ marginTop: "10%", color: "#fff", fontSize: 45 }}>
          {"Comunidad"}
        </Text>
        <Image
          source={require("../assets/GentlemanProgrammingLogo.png")}
          style={{ height: "22%", width: "85%", marginTop: "-5%" }}
        />
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {"Bienvenido a Gentleman Programming !!!\n\n"}
          {
            "La comunidad donde compartimos información gratuita y nos formamos los unos a los otros.\n\n"
          }
          {
            "Primero lo primero... No tengas miedo de preguntar y sé la esponja de conocimiento que tienes que ser !!!!"
          }
        </Text>
        <Button
          color={"#f977bc"}
          text={"Conocimiento"}
          icon={"terminal-outline"}
          action={() => {
            history.push("/CommunityS1");
          }}
        />
        <Button
          color={"#f977bc"}
          text={"Información"}
          icon={"reader-outline"}
        />
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
