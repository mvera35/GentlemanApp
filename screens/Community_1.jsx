import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../share/Header";
import { BackButton } from "../share/Button";
import { Icon } from "react-native-elements";

export default function Screen({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <TextSection />
      <IconList />
      <ButtonSection history={history} />
    </View>
  );
}

const TextSection = () => {
  return (
    <View style={[style.textContainer]}>
      <Text style={[style.text]}>
        En esta comunidad aprenderas sobre diferentes tecnologías relacionadas
        al desarrollo web, esto mediante clases o de los mismos integrantes de
        la comunidad.
      </Text>
      <Text style={[style.text]}>
        Algunas de las tecnologías que encontraras en la comunidad son las
        siguientes:
      </Text>
    </View>
  );
};
const IconList = () => {
  return (
    <View style={[style.tableContainer, style.centerContain]}>
      <View style={style.row}>
        <CustomIcon name="js" color="#f0db4f" size={60} text="Javascript" />
        <CustomIcon name="python" color="#FFD43B" size={60} text="Python" />
        <CustomIcon name="php" color="#8993be" size={60} text="Php" />
      </View>

      <View style={style.row}>
        <CustomIcon name="angular" color="#dd1b16" size={60} text="Angular" />
        <CustomIcon name="vuejs" color="#42b883" size={60} text="Vue" />
        <CustomIcon name="react" color="#61DBFB" size={60} text="React" />
      </View>

      <View style={style.row}>
        <CustomIcon name="css3-alt" color="#2965f1" size={60} text="Css" />
        <CustomIcon name="node" color="#3C873A" size={60} text="Node JS" />
        <CustomIcon name="sass" color="#cc6699" size={60} text="Sass" />
      </View>
    </View>
  );
};

const CustomIcon = ({ name, color, size, text }) => {
  return (
    <View style={style.iconContainer}>
      <Icon
        name={name}
        type="font-awesome-5"
        color={color}
        size={size}
        backgroundColor="#fff"
        borderRadius={10}
      />
      <Text style={style.text}>{text}</Text>
    </View>
  );
};
const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer, style.centerContain]}>
      <BackButton
        text={"Regresar"}
        icon={"caret-back-circle-outline"}
        action={() => {
          history.push("/Community");
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "justify",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#282828",
  },
  textContainer: { flex: 1, padding: 10 },
  tableContainer: { flex: 2 },
  centerContain: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonContainer: { flex: 0.5 },
  row: { flexDirection: "row", flex: 1 },
  iconContainer: { flex: 1, alignItems: "center" },
});
