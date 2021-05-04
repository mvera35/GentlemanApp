import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";
import { Icon } from "react-native-elements";

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "justify",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#282828",
  },
  textContainer: { flex: 0.5, padding: 10 },
  tableContainer: { flex: 2 },
  centerContain: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonContainer: { flex: 0.5 },
});

const CustomIcon = ({ name, color, size, text }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
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

const Table = () => {
  return (
    <View style={[style.tableContainer, style.centerContain]}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <CustomIcon name="js" color="#f0db4f" size={60} text="Javascript" />
        <CustomIcon name="python" color="#FFD43B" size={60} text="Python" />
        <CustomIcon name="php" color="#8993be" size={60} text="Php" />
      </View>

      <View style={{ flexDirection: "row", flex: 1 }}>
        <CustomIcon name="angular" color="#dd1b16" size={60} text="Angular" />
        <CustomIcon name="vuejs" color="#42b883" size={60} text="Vue" />
        <CustomIcon name="react" color="#61DBFB" size={60} text="React" />
      </View>

      <View style={{ flexDirection: "row", flex: 1 }}>
        <CustomIcon name="css3-alt" color="#2965f1" size={60} text="Css" />
        <CustomIcon name="node" color="#3C873A" size={60} text="Node JS" />
        <CustomIcon name="sass" color="#cc6699" size={60} text="Sass" />
      </View>
    </View>
  );
};

export default function Screen({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <View style={[style.textContainer]}>
        <Text style={[style.text]}>
          En esta comunidad aprenderas sobre diferentes tecnologías relacionadas
          al desarrollo web, esto mediante clases o de los mismos integrantes de
          la comunidad.
        </Text>
      </View>
      <View style={[style.textContainer]}>
        <Text style={[style.text]}>
          Algunas de las tecnologías que encontraras en la comunidad son las
          siguientes:
        </Text>
      </View>

      <Table />
      <View style={[style.buttonContainer, style.centerContain]}>
        <Button
          color={"#c3458c"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/Community");
          }}
        />
      </View>
    </View>
  );
}
