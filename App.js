import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from "./screens/Home";
import Community from "./screens/Community";
import Community_1 from "./screens/Community_1";
import Community_2 from "./screens/Community_2";
import Video from "./screens/Video";
import VideoList from "./screens/VideoList";
import VideoPlay from "./screens/VideoPlay";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Community" component={Community} />
          <Route path="/CommunityS1" component={Community_1} />
          <Route path="/CommunityS2" component={Community_2} />
          <Route path="/Videos" component={Video} />
          <Route path="/VideoList" component={VideoList} />
          <Route path="/VideoPlay" component={VideoPlay} />
        </Switch>
      </NativeRouter>
    );
  }
}
