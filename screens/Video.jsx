import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";
import { SearchBar } from "react-native-elements";

const style = StyleSheet.create({
  container: { flex: 1, alignItems: "center", alignSelf: "stretch"},
  title: { marginTop: "10%", color: "#fff", fontSize: 45, flex: 0.1 },
  logo: { height: "22%", width: "85%", marginTop: "-5%", flex: 0.3 },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    flex: 0.1
  },
});

export default function Community({ history }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={style.container}>
        <Text style={style.title}>Videos</Text>
        <Image
          source={require("../assets/GentlemanProgrammingLogo.png")}
          style={style.logo}
        />
        <SearchBar
          placeholder="Buscar..."
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={{flex: 1}}
        />
        <Button
          color={"#c3458c"}
          text={"Regresar"}
          icon={"caret-back-circle-outline"}
          action={() => {
            history.push("/");
          }}
        />
      <Header history={history} />
    </View>
  );
}
