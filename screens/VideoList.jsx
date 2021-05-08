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
import { FAB, Icon } from "react-native-elements";
import { searchVideo } from "../share/Youtube";

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
  scrollView: { flex: 1, marginTop: 20  },
  imageContainer: { marginBottom: 50, alignItems: "center" },
  text: {
    color: "#fff",
    fontSize: 19,
    textAlign: "center",
  },
});

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

  render() {
    const img = this.state.images;
    return (
      <ScrollView style={style.scrollView}>
        {img.map((object, index) => {
          return (
            <View key={index} style={style.imageContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.history.push({
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
              <View style={{ alignItems: "center" }}>
                <Text style={[style.text, { fontWeight: "bold" }]}>
                  {object.title}
                </Text>
                <Text style={[style.text]}>Fecha: {object.date} </Text>
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
      color="#3ec584"
      placement="left"
      buttonStyle={style.buttonStyle}
      icon={
        <View style={style.iconView}>
          <Icon name="arrow-undo-sharp" type="ionicon" size={50} color="#fff"/>
        </View>
      }
      onPress={() => {
        history.push("/Videos");
      }}
    />
  );
};

export default function VideoList(props) {
  return (
    <View style={[style.container]}>
      <Header history={props.history} />
      <ListVideo history={props.history} search={props.location.state.search} />
      <BackButton history={props.history} />
    </View>
  );
}
