import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "../share/Header";
import Element from "../share/RowElement";
import { Button } from "../share/Button";

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#282828" },
  textContainer: { flex: 1, justifyContent: "center" },
  socialContainer: { flex: 3, padding: 15 },
  buttonContainer: { flex: 1 },
  text: { color: "#fff", fontSize: 18, textAlign: "justify", padding: 15 },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  element: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#c3458c",
    justifyContent: "center",
    alignItems: "center",
  },
});

const TextSection = () => {
  return (
    <View style={[style.textContainer]}>
      <Text style={[style.text]}>
        Esta aplicación fue desarrollada para un reto impartido dentro de la
        comunidad de Gentleman Programming, la misma esta desarrollada con react
        native, mediante la plataforma de expo.
      </Text>
    </View>
  );
};

const SocialSection = () => {
  return (
    <View style={[style.socialContainer]}>
      <Text style={style.text}>
        Las redes sociales del autor de la aplicación, como el repositorio de la
        app lo encuentras en los siguientes sitios:
      </Text>
      <View style={[style.row]}>
        <Element
          backgroundColor="#f977bc"
          name="linkedin"
          text="Linkedin"
          iconBackground="#fff"
          iconColor="#0077b5"
          url="https://www.linkedin.com/in/jes%C3%BAs-maximiliano-vera-vicente-48803b1b4/?trk=public-profile-join-page"
        />
        <Element
          backgroundColor="#ffa9ee"
          name="github"
          text="Github"
          iconBackground="#fff"
          iconColor="#211f1f"
          url="https://github.com/mvera35"
        />
      </View>
      <View style={[style.row]}>
        <Element
          backgroundColor="#ffa9ee"
          name="instagram"
          text="Instagram"
          iconBackground="#fff"
          iconColor="#000"
          url="https://www.instagram.com/jugguernaut3494/"
        />
        <Element
          backgroundColor="#f977bc"
          name="twitter-square"
          text="Twitter"
          iconBackground="#fff"
          iconColor="#08a0e9"
          url="https://twitter.com/Juggernaut34941"
        />
      </View>
    </View>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer]}>
      <Button
        color={"#3ec584"}
        text={"Regresar"}
        icon={"caret-back-circle-outline"}
        action={() => {
          history.goBack();
        }}
      />
    </View>
  );
};

export default function Screen({ history }) {
  return (
    <View style={[style.container]}>
      <Header history={history} />
      <TextSection />
      <SocialSection />
      <ButtonSection history={history} />
    </View>
  );
}
