import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";
import SearchBar from "../share/SearchBar.jsx";

const style = StyleSheet.create({
  container: { flex: 1, alignItems: "stretch", backgroundColor: "#282828" },
  titleContainer: { flex: 0.3, justifyContent: "center" },
  title: {
    marginTop: "10%",
    color: "#fff",
    fontSize: 45,
    alignSelf: "center",
  },
  imageContainer: {
    flex: 1.5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: "75%",
  },
  textContainer: { flex: 1 },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  videoContainer: { flex: 1 },
  buttonContainer: { flex: 0.3 },
  barContainer: { flex: 0.3,zIndex: 1  },
});
export default function Community({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <View style={[style.titleContainer, style.centerContain]}>
        <Text style={[style.title]}>Videos</Text>
      </View>
      <View style={[style.barContainer]}>
        <SearchBar history={history} />
      </View>
      <View style={[style.videoContainer]}>
        <Text style={[style.text]}>Último Video</Text>
        <Image
          style={{ width: 320, height: 180, alignSelf: "center" }}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
        <Text style={[style.text]}>Nombre del video</Text>
      </View>
      <View style={[style.buttonContainer]}>
        <Button
          color={"#c3458c"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/");
          }}
        />
      </View>
    </View>
  );
}
