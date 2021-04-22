import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./share/Header";
import { Button } from "./share/Button";

export default function App() {
  return (
    <View>
      <Header />
        <Button color={"#f977bc"} text={"Uwu"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
