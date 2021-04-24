import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";

export default function Home({ history }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ marginTop: "10%", color: "#fff", fontSize: 45 }}>
          {"Bienvenido"}
        </Text>
        <Image
          source={require("../assets/GentlemanProgrammingLogo.png")}
          style={{ height: "22%", width: "85%", marginTop: "-10%" }}
        />
        <Button
          color={"#f977bc"}
          text={"Comunidad"}
          icon={"code-slash-sharp"}
          action={() => {
            history.push("/Community");
          }}
        />
        <Button color={"#f977bc"} text={"Videos"} icon={"videocam"} />
        <Button
          color={"#c3458c"}
          text={"Salir"}
          icon={"caret-back-circle-outline"}
        />
      </View>

      <Header history={history}/>
    </View>
  );
}
