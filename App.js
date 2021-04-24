import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from "./screens/Home";
import Community from "./screens/Community";
import Community_1 from "./screens/Community_1";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1, backgroundColor: "#282828" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Community" component={Community} />
            <Route path="/CommunityS1" component={Community_1} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}
