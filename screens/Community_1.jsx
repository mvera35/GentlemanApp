import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";
import { Icon } from "react-native-elements";

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
});

const CustomIcon = ({ name, color, size, text }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Icon name={name} type="font-awesome-5" color={color} size={size} />
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default function Screen({ history }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <Text
          style={[
            {
              marginBottom: "-30%",
            },
            style.text,
          ]}
        >
          En esta comunidad aprenderas sobre diferentes tecnologías relacionadas
          al desarrollo web, esto mediante clases o de los mismos integrantes de
          la comunidad.
        </Text>
        <Text
          style={[
            {
              marginBottom: "-30%",
            },
            style.text,
          ]}
        >
          Algunas de las tecnologías que encontraras en la comunidad son las
          siguientes:
        </Text>
        <View
          style={{
            flex: 0.1,
            alignSelf: "stretch",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <CustomIcon name="js" color="#f0db4f" size={40} text="Javascript" />
            <CustomIcon name="python" color="#FFD43B" size={40} text="Python" />
            <CustomIcon name="php" color="#8993be" size={40} text="Php" />
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomIcon
              name="angular"
              color="#dd1b16"
              size={40}
              text="Angular"
            />
            <CustomIcon name="vuejs" color="#42b883" size={40} text="Vue" />
            <CustomIcon name="react" color="#61DBFB" size={40} text="React" />
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomIcon name="css3-alt" color="#2965f1" size={40} text="Css" />
            <CustomIcon name="node" color="#3C873A" size={40} text="Node JS" />
            <CustomIcon name="sass" color="#cc6699" size={40} text="Sass" />
          </View>
        </View>

        <Button
          color={"#c3458c"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/Community");
          }}
        />
      </View>
      <Header history={history} />
    </View>
  );
}
