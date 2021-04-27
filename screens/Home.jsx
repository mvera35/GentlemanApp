import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#282828",
  },
  centerContent: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    padding: 10
  },
  buttonContainer: {
    flex: 2,
  },
  text: {
    color: "#fff",
    fontSize: 45,
  },
  image: { height: "60%", width: "90%", marginTop: "-30%"},
});
export default function Home({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <View style={[style.titleContainer, style.centerContent]}>
        <Text style={style.text}>Bienvenido</Text>
      </View>
      <View style={[style.imageContainer, style.centerContent]}>
        <Image
          source={require("../assets/GentlemanProgrammingLogo.png")}
          style={style.image}
        />
      </View>
      <View style={[style.buttonContainer, style.centerContent]}>
          <Button
            color={"#f977bc"}
            text={"Comunidad"}
            icon={"code-slash-sharp"}
            action={() => {
              history.push("/Community");
            }}
          />
          <Button
            color={"#f977bc"}
            text={"Videos"}
            icon={"videocam"}
            action={() => {
              history.push("/Videos");
            }}
          />
          <Button
            color={"#c3458c"}
            text={"Salir"}
            icon={"caret-back-circle-outline"}
          />
      </View>
    </View>
  );
}
