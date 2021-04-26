import React from "react";
import { Text } from "react-native";
import { Overlay } from "react-native-elements";

export const OverlayDiscord = ({ visible, action }) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={action}>
      <Text>Hello from Discord!</Text>
    </Overlay>
  );
};

export const OverlayPodcast = ({ visible, action }) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={action}>
      <Text>Hello from Podcast!</Text>
    </Overlay>
  );
};

export const OverlayClass= ({ visible, action }) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={action}>
      <Text>Hello from Class!</Text>
    </Overlay>
  );
};

export const OverlayInterview= ({ visible, action }) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={action}>
      <Text>Hello from Interview!</Text>
    </Overlay>
  );
};
