import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { BackButton, OptionButton } from "../share/Button";

export default function Community({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <TitleSection />
      <ImageSection />
      <TextSection />
      <ButtonSection history={history} />
    </View>
  );
}

const TitleSection = () => {
  return (
    <View style={[style.titleContainer, style.centerContent]}>
      <Text style={style.title}>Comunidad</Text>
    </View>
  );
};

const ImageSection = () => {
  return (
    <View style={[style.titleContainer, style.centerContent]}>
      <Image
        source={require("../assets/GentlemanProgrammingLogo.png")}
        style={style.logo}
      />
    </View>
  );
};

const TextSection = () => {
  return (
    <View style={[style.textContainer, style.centerContent]}>
      <Text style={style.text}>
        Bienvenido a Gentleman Programming !!!{"\n"}
        La comunidad donde compartimos información gratuita y nos formamos los
        unos a los otros.
      </Text>
    </View>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer, style.centerContent]}>
      <OptionButton
        text={"Conocimiento"}
        icon={"terminal-outline"}
        action={() => {
          history.push("/CommunityS1");
        }}
      />
      <OptionButton
        text={"Información"}
        icon={"reader-outline"}
        action={() => {
          history.push("/CommunityS2");
        }}
      />
      <BackButton
        text={"Regresar"}
        icon={"caret-back-circle-outline"}
        action={() => {
          history.push("/");
        }}
      />
    </View>
  );
};

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

