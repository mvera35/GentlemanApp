import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../share/Header";
import SearchBar from "../share/SearchBar.jsx";
import { Button } from "../share/Button";
import YoutubePlayer from "react-native-youtube-iframe";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  barContainer: { flex: 0.6, zIndex: 1 },
  videoContainer: { flex: 2, alignItems: "center", justifyContent: "center" },
  descriptionContainer: { flex: 1.5, padding: 10 },
  buttonContainer: { flex: 0.8 },
  text: { color: "#fff", fontSize: 18 },
});

const Bar = ({ history }) => {
  return (
    <View style={[style.barContainer, style.box]}>
      <SearchBar history={history} />
    </View>
  );
};

const VideoView = ({ state }) => {
  console.log(state.id);
  return (
    <View style={[style.videoContainer, style.box]}>
      {state.kind == "youtube#video" ? (
        <YoutubePlayer height={180} width={320} videoId={state.id.videoId} />
      ) : (
        <YoutubePlayer height={180} width={320} playList={state.id.playlistId} />
      )}
      <Text style={style.text}>{state.title}</Text>
    </View>
  );
};

const Description = ({ state }) => {
  return (
    <View style={[style.descriptionContainer, style.box]}>
      <Text style={style.text}>Descripción</Text>
      <ScrollView>
        <Text style={style.text}>{state.description} </Text>
      </ScrollView>
    </View>
  );
};

const ButtonSection = ({ history }) => {
  return (
    <View style={[style.buttonContainer, style.box]}>
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

export default function Screen(props) {
  return (
    <View style={[style.container]}>
      <Header history={props.history} />
      <Bar history={props.history} />
      <VideoView state={props.location.state} />
      <Description state={props.location.state} />
      <ButtonSection history={props.history} />
    </View>
  );
}
