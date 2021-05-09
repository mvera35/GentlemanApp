import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export const OverlayDiscord = ({ visible, action }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={action}
      overlayStyle={style.overlay}
      backdropStyle={style.bacdropOverlay}
    >
      <Image
        source={require("../assets/Discord.png")}
        style={{ width: 360, height: 250 }}
      />
    </Overlay>
  );
};

export const OverlayPodcast = ({ visible, action }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={action}
      overlayStyle={style.overlay}
      backdropStyle={style.bacdropOverlay}
    >
      <Image
        source={require("../assets/GentlemanP.png")}
        style={{ width: 350, height: 120 }}
      />
      <Text style={[style.text, { marginTop: "20%", marginBottom: "20%" }]}>
        Este canal especial para programadores y a los que les gusta el mundo de
        la programación web. Vas a encontrar un montón de contenido de utilidad
        para poder aplicar profesionalmente en tu día a día
      </Text>
      <Image
        source={require("../assets/spotify.png")}
        style={{ width: 300, height: 90 }}
      />
    </Overlay>
  );
};

export const OverlayClass = ({ visible, action }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={action}
      overlayStyle={style.overlay}
      backdropStyle={style.bacdropOverlay}
    >
      <Text style={[style.text, { marginBottom: "20%" }]}>
        Clases impartidas en directo por el canal de youtube, donde se presentan
        diversos temas relacionados con la promgración, y diversos tipo de
        eventos como la serie de "Apendiendo a programar desde 0"
      </Text>
      <Image
        source={require("../assets/yotube.png")}
        style={{ width: 150, height: 100 }}
      />
    </Overlay>
  );
};

export const OverlayInterview = ({ visible, action }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={action}
      backdropStyle={style.bacdropOverlay}
      overlayStyle={style.overlay}
    >
      <Text style={[style.text, { marginBottom: "20%" }]}>
        Entrevistas en vivo, desde el canal de youtube, con la serie "Hablando
        sobre ti"
      </Text>
      <Image
        source={require("../assets/yotube.png")}
        style={{ width: 150, height: 100 }}
      />
    </Overlay>
  );
};

const style = StyleSheet.create({
  overlay: {
    elevation: 0,
    shadowOpacity: 0,
    alignItems: "center",
    backgroundColor: "rgba(40,40,40,0.9)",
  },
  bacdropOverlay: { backgroundColor: "rgba(40,40,40,0.9)" },
  text: {
    color: "#fff",
    textAlign: "justify",
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
  },
});
