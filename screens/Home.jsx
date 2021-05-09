import React from "react";
import { StyleSheet, View, Text, Image, BackHandler } from "react-native";
import Header from "../share/Header";
import {  BackButton, OptionButton } from "../share/Button";


export default function Home({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <TitleSection />
      <ImageSection />
      <ButtonSection history={history} />
    </View>
  );
}

const TitleSection = () => {
  return (
    <View style={[style.titleContainer, style.centerContent]}>
      <Text style={style.text}>Bienvenido</Text>
    </View>
  );
};

const ImageSection = () => {
  return (
    <View style={[style.imageContainer, style.centerContent]}>
      <Image
        source={require("../assets/GentlemanProgrammingLogo.png")}
        style={style.image}
      />
    </View>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer, style.centerContent]}>
      <OptionButton
        text={"Comunidad"}
        icon={"code-slash-sharp"}
        action={() => {
          history.push("/Community");
        }}
      />
      <OptionButton
        text={"Videos"}
        icon={"videocam"}
        action={() => {
          history.push("/Videos");
        }}
      />
      <BackButton
        text={"Salir"}
        icon={"caret-back-circle-outline"}
        action={() => {
          BackHandler.exitApp();
        }}
      />
    </View>
  );
};

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
    padding: 10,
  },
  buttonContainer: {
    flex: 2,
  },
  text: {
    color: "#fff",
    fontSize: 45,
  },
  image: { height: "60%", width: "90%", marginTop: "-30%" },
});

