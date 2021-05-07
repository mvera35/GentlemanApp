import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../share/Header";
import { Button } from "../share/Button";
import SearchBar from "../share/SearchBar.jsx";
import { getLastVideo } from "../share/Youtube";

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
  barContainer: { flex: 0.3, zIndex: 1 },
});

const BarSection = ({ history }) => {
  return (
    <View style={[style.barContainer]}>
      <SearchBar history={history} />
    </View>
  );
};

const Title = () => {
  return (
    <View style={[style.titleContainer, style.centerContain]}>
      <Text style={[style.title]}>Videos</Text>
    </View>
  );
};

class LasVideoImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      title: "",
      url: "https://reactnative.dev/img/tiny_logo.png",
    };
  }

  async componentDidMount() {
    let item = await getLastVideo();
    let image = item.snippet.thumbnails.medium;
    this.setState({
      width: image.width,
      height: image.height,
      title: item.snippet.title,
      url: image.url,
    });
    this.forceUpdate();
  }

  render() {
    return (
      <View style={[style.videoContainer]}>
        <Text style={[style.text]}>Último Video</Text>
        <TouchableOpacity>
          <Image
            style={{
              width: this.state.width,
              height: this.state.height,
              alignSelf: "center",
              borderWidth: 2,
              borderColor: "#fff",
            }}
            source={{
              uri: this.state.url,
            }}
          />
        </TouchableOpacity>
        <Text style={[style.text]}>{this.state.title}</Text>
      </View>
    );
  }
}

const BackButton = ({ history }) => {
  return (
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
  );
};
// agregar el LasVideoImage antes del botón de back
export default function Community({ history }) {
  return (
    <View style={style.container}>
      <Header history={history} />
      <Title />
      <BarSection history={history} />
      <BackButton history={history} />
    </View>
  );
}
