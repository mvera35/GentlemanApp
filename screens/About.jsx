import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Header from "../share/Header";
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

const Element = ({
  backgroundColor,
  name,
  text,
  action,
  iconColor,
  iconBackground,
}) => {
  return (
    <TouchableOpacity
      style={[style.element, { backgroundColor: backgroundColor }]}
      onPress={action}
    >
      <Icon
        name={name}
        type="font-awesome-5"
        size={50}
        backgroundColor={iconBackground}
        color={iconColor}
        borderRadius={5}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
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
        />
        <Element
          backgroundColor="#ffa9ee"
          name="github"
          text="Github"
          iconBackground="#fff"
          iconColor="#211f1f"
        />
      </View>
      <View style={[style.row]}>
        <Element
          backgroundColor="#ffa9ee"
          name="instagram"
          text="Instagram"
          iconBackground="#fff"
          iconColor="#000"
        />
        <Element
          backgroundColor="#f977bc"
          name="twitter-square"
          text="Twitter"
          iconBackground="#fff"
          iconColor="#08a0e9"
        />
      </View>
    </View>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer]}>
      <Button
        color={"#c3458c"}
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
