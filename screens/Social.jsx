import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../share/Header";
import Element from "../share/RowElement";
import { BackButton } from "../share/Button";

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

const TextSection = () => {
  return (
    <View style={[style.textContainer]}>
      <Text style={[style.tex]}>
        En esta sección encontrarás las redes sociales relacionadas con la
        comunidad, como enlaces de interés.
      </Text>
    </View>
  );
};

const SocialSection = () => {
  return (
    <View style={[style.socialContainer]}>
      <View style={[style.row]}>
        <Element
          backgroundColor="#f977bc"
          name="discord"
          text="Discord"
          iconBackground="#fff"
          iconColor="#7289da"
          url="https://discord.gg/8Wu7ZzGhgG"
        />
        <Element
          backgroundColor="#ffa9ee"
          name="youtube"
          text="Youtube"
          iconBackground="#fff"
          iconColor="#ff0000"
          url="https://www.youtube.com/channel/UCbx_d228PdYwgB4Jz202SIQ"
        />
      </View>
      <View style={[style.row]}>
        <Element
          backgroundColor="#ffa9ee"
          name="spotify"
          text="Spotify"
          iconBackground="#000"
          iconColor="#1db954"
          url={
            "https://open.spotify.com/show/4AhopzZexw2wOMJyIcBWlx?si=u-6eBPYgRSWM2y5wB2kU1A&nd=1"
          }
        />
        <Element
          backgroundColor="#f977bc"
          name="twitch"
          text="Twitch"
          iconBackground="#fff"
          iconColor="#9147fe"
          url="https://www.twitch.tv/applelan_92"
        />
      </View>
      <View style={[style.row]}>
        <Element
          backgroundColor="#f977bc"
          name="linkedin"
          text="Linkedin"
          iconBackground="#fff"
          iconColor="#0077b5"
          url="https://www.linkedin.com/in/alanbuscaglia/"
        />
        <Element
          backgroundColor="#ffa9ee"
          name="twitter-square"
          text="Twitter"
          iconBackground="#fff"
          iconColor="#08a0e9"
          url="https://twitter.com/alan_buscaglia"
        />
      </View>
      <View style={[style.row]}>
        <Element
          backgroundColor="#ffa9ee"
          name="instagram"
          text="Instagram"
          iconBackground="#fff"
          iconColor="#000"
          url="https://www.instagram.com/alanbuscaglia"
        />
        <Element
          backgroundColor="#f977bc"
          name="medium"
          text="Medium"
          iconBackground="#fff"
          iconColor="#000"
          url="https://gentlemanprogramming.medium.com/"
        />
      </View>
    </View>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer]}>
      <BackButton
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

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#282828" },
  textContainer: { flex: 1, justifyContent: "center" },
  socialContainer: { flex: 4, alignItems: "center", padding: 20 },
  buttonContainer: { flex: 1 },
  tex: { color: "#fff", fontSize: 18, textAlign: "justify", padding: 14 },
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
  box: { borderColor: "#fff", borderWidth: 1 },
});
