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
import { searchVideo } from "../share/Youtube";
import {FloatButton} from "../share/Button";

export default function VideoList(props) {
  return (
    <View style={[style.container]}>
      <Header history={props.history} />
      <ListVideo history={props.history} search={props.location.state.search} />
      <ButtonSection history={props.history} />
    </View>
  );
}

class ListVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  async componentDidMount() {
    const videos = await searchVideo(this.props.search);
    videos.forEach((video) => {
      if (video.id.kind != "youtube#channel") {
        this.state.images.push({
          image: video.snippet.thumbnails.medium,
          title: video.snippet.title,
          date: video.snippet.publishedAt,
          description: video.snippet.description,
          id: video.id,
          kind: video.id.kind,
        });
      }
    });
    this.forceUpdate();
  }

  VideoImage({ object, history }) {
    return (
      <TouchableOpacity
        onPress={() => {
          history.push({
            pathname: "/VideoPlay",
            state: {
              title: object.title,
              description: object.description,
              id: object.id,
              kind: object.kind,
            },
          });
        }}
      >
        <Image
          style={{
            width: object.image.width,
            height: object.image.height,
            alignSelf: "flex-start",
            borderColor: "#fff",
            borderWidth: 2,
          }}
          source={{ uri: object.image.url }}
        />
      </TouchableOpacity>
    );
  }

  VideoText({ object }) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={[style.text, { fontWeight: "bold" }]}>{object.title}</Text>
        <Text style={[style.text]}>Fecha: {object.date} </Text>
      </View>
    );
  }

  render() {
    const img = this.state.images;
    return (
      <ScrollView style={style.scrollView}>
        {img.map((object, index) => {
          return (
            <View key={index} style={style.imageContainer}>
              <this.VideoImage object={object} history={this.props.history} />
              <this.VideoText object={object} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const ButtonSection = ({ history }) => {
  return (
    <FloatButton
      style={style}
      action={() => {
        history.push("/Videos");
      }}
    />
  );
};

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
  scrollView: { flex: 1, marginTop: 20 },
  imageContainer: { marginBottom: 50, alignItems: "center" },
  text: {
    color: "#fff",
    fontSize: 19,
    textAlign: "center",
  },
});
