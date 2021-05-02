import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../share/Header";
import SearchBar from "../share/SearchBar.jsx";
import { Video } from "expo-av";
import { Button } from "../share/Button";

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

const VideoView = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={[style.videoContainer, style.box]}>
      <Video
        ref={video}
        style={{ width: 320, height: 180 }}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Text style={style.text}>Titulo del Video</Text>
    </View>
  );
};

const Description = () => {
  return (
    <View style={[style.descriptionContainer, style.box]}>
      <Text style={style.text}>Descripción</Text>
      <ScrollView>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
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

export default function Screen({ history }) {
  return (
    <View style={[style.container]}>
      <Header history={history} />
      <Bar history={history} />
      <VideoView />
      <Description />
      <ButtonSection history={history} />
    </View>
  );
}
