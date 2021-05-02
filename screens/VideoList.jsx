import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../share/Header";
import SearchBar from "../share/SearchBar.jsx";
import { FAB, Icon } from "react-native-elements";

const style = StyleSheet.create({
  container: { flex: 1, alignItems: "stretch", backgroundColor: "#282828" },
  buttonStyle: {
    borderRadius: 100,
  },
  iconView: {
    height: "220%",
    width: "220%",
    justifyContent: "center",
    borderRadius: 100,
  },
  scrollView: { flex: 1, marginHorizontal: 20 },
  imageContainer: { flexDirection: "row", marginBottom: 10 },
  text: {
    color: "#fff",
    fontSize: 19,
  },
  barContainer: { flex: 0.2, zIndex: 1 },
});

class ListVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.makeCall();
  }

  makeCall() {
    for (let i = 0; i < 10; i++) {
      this.state.images.push({
        uri: "https://reactnative.dev/img/tiny_logo.png",
        video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      });
    }
  }

  goToVideo(props, uri, width, height) {
    props.history.push({
      pathname: "/VideoPlay",
      state: { uri, width, height },
    });
  }

  render() {
    const img = this.state.images;
    return (
      <ScrollView style={style.scrollView}>
        {img.map((object, index) => {
          return (
            <View key={index} style={style.imageContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.history.push({ pathname: "/VideoPlay" });
                }}
              >
                <Image
                  style={{ width: 120, height: 90, alignSelf: "flex-start" }}
                  source={{ uri: object.uri }}
                />
              </TouchableOpacity>
              <View>
                <Text style={[style.text, { fontWeight: "bold" }]}>
                  Titulo del Video
                </Text>
                <Text style={[style.text]}>Vistas: </Text>
                <Text style={[style.text]}>Me gusta: </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const BackButton = ({ history }) => {
  return (
    <FAB
      color="#c3458c"
      placement="left"
      buttonStyle={style.buttonStyle}
      icon={
        <View style={style.iconView}>
          <Icon name="arrow-undo-sharp" type="ionicon" size={50} />
        </View>
      }
      onPress={() => {
        history.push("/Videos");
      }}
    />
  );
};

const Bar = ({ history }) => {
  return (
    <View style={[style.barContainer]}>
      <SearchBar history={history} />
    </View>
  );
};

export default function VideoList(props) {
  //console.log(props.location.state);
  return (
    <View style={[style.container]}>
      <Header history={props.history} />
      <Bar history={props.history} />
      <ListVideo history={props.history} />
      <BackButton history={props.history} />
    </View>
  );
}
