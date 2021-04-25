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
  title: { marginTop: "10%", color: "#fff", fontSize: 45 },
  logo: { height: "22%", width: "85%", marginTop: "-5%" },
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
        <Text style={style.title}>Comunidad</Text>
        <Image
          source={require("../assets/GentlemanProgrammingLogo.png")}
          style={style.logo}
        />
        <Text style={style.text}>
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
          action={() => {
            history.push("/CommunityS2");
          }}
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
