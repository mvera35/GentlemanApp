import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "../share/Header";
import { BackButton } from "../share/Button";
import { Icon } from "react-native-elements";
import {
  OverlayDiscord,
  OverlayClass,
  OverlayPodcast,
  OverlayInterview,
} from "../share/Overlays.jsx";

export default function Community({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <TextSection />
      <TableSection />
      <ButtonSection history={history} />
    </View>
  );
}
const TextSection = () => {
  return (
    <View style={[style.textContainer, style.centerContain]}>
      <Text style={[style.text, { padding: 15 }]}>
        Todos son bienvenidos dentro de esta comunidad, dentro de la misma
        encontraras lo siguiente:
      </Text>
    </View>
  );
};

const TableSection = () => {
  const [visibleDiscord, setVisibleDiscord] = useState(false);
  const [visiblePodcast, setVisiblePodcast] = useState(false);
  const [visibleClass, setVisibleClass] = useState(false);
  const [visibleInterview, setVisibleInterview] = useState(false);

  const toggleOverlayDiscord = () => {
    setVisibleDiscord(!visibleDiscord);
  };
  const toggleOverlayPodcast = () => {
    setVisiblePodcast(!visiblePodcast);
  };
  const toggleOverlayClass = () => {
    setVisibleClass(!visibleClass);
  };
  const toggleOverlayInterview = () => {
    setVisibleInterview(!visibleInterview);
  };

  return (
    <View style={[style.tableContainer, style.centerContain]}>
      <View style={[style.row]}>
        <Element
          color="#f977bc"
          name="discord"
          text="Discord"
          action={toggleOverlayDiscord}
          iconColor="#7289da"
        />
        <Element
          color="#ffa9ee"
          name="microphone-alt"
          text="Podcast"
          action={toggleOverlayPodcast}
          iconColor="#373e4a"
        />
      </View>

      <View style={[style.row]}>
        <Element
          color="#ffa9ee"
          name="chalkboard-teacher"
          text="Clases"
          action={toggleOverlayClass}
          iconColor="#3ec584"
        />
        <Element
          color="#f977bc"
          name="user-friends"
          text="Entrevistas"
          action={toggleOverlayInterview}
          iconColor="#dca85c"
        />
      </View>
      <OverlayDiscord visible={visibleDiscord} action={toggleOverlayDiscord} />
      <OverlayInterview
        visible={visibleInterview}
        action={toggleOverlayInterview}
      />
      <OverlayClass visible={visibleClass} action={toggleOverlayClass} />
      <OverlayPodcast visible={visiblePodcast} action={toggleOverlayPodcast} />
    </View>
  );
};

const Element = ({ color, name, text, action, iconColor }) => {
  return (
    <TouchableOpacity
      style={[style.element, { backgroundColor: color }]}
      onPress={action}
    >
      <Icon
        name={name}
        type="font-awesome-5"
        size={50}
        color={iconColor}
        backgroundColor={"#fff"}
        borderRadius={10}
      />
      <Text style={[style.text, { fontWeight: "bold" }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer]}>
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
  container: { flex: 1, backgroundColor: "#282828" },
  centerContain: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlign: "justify",
    fontSize: 18,
  },
  table: {
    flex: 0.1,
    alignSelf: "center",
    marginTop: "-40%",
    marginBottom: "20%",
  },
  row: { flexDirection: "row" },
  element: {
    borderWidth: 4,
    height: 160,
    width: 160,
    borderColor: "#c3458c",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: { flex: 0.5 },
  tableContainer: { flex: 2 },
  buttonContainer: { flex: 0.5 },
});
