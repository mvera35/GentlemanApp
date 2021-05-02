import React, { Component } from "react";
import { Image } from "react-native";

export default class CustomImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Image source={this.props.uri}/>;
  }
}
