import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";

const style = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#282828" },
  centerContent: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: { flex: 1 },
  title: { color: "#fff", fontSize: 45 },
  logoContainer: { flex: 1 },
  logo: { height: "100%", width: "70%", marginBottom: "15%" },
  textContainer: { flex: 1, padding: 10 },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    padding: 10,
  },
  buttonContainer: { flex: 2, marginTop: "5%" },
});

export default function Community({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <View style={[style.titleContainer, style.centerContent]}>
        <Text style={style.title}>Comunidad</Text>
      </View>
      <View style={[style.titleContainer, style.centerContent]}>
        <Image
          source={require("../assets/GentlemanProgrammingLogo.png")}
          style={style.logo}
        />
      </View>
      <View style={[style.textContainer, style.centerContent]}>
        <Text style={style.text}>
          Bienvenido a Gentleman Programming !!!{"\n"}
          La comunidad donde compartimos información gratuita y nos formamos los
          unos a los otros.
        </Text>
      </View>
      <View style={[style.buttonContainer, style.centerContent]}>
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
          color={"#3ec584"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/");
          }}
        />
      </View>
    </View>
  );
}
