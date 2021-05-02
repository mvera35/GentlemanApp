import React, { useState, Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SearchBar } from "react-native-elements";

const style = StyleSheet.create({
  barContainer: { flex: 0.2, padding: 5 },
  inputStyle: { backgroundColor: "#f977bc", borderRadius: 100, color: "#000" },
  inputContainerStyle: {
    backgroundColor: "#f977bc",
    borderRadius: 100,
  },
  containerStyle: { borderRadius: 100, backgroundColor: "#c3458c" },
  leftIconContainerStyle: {
    width: "14%",
    marginLeft: "0%",
  },
});

const SearchBarProps = {
  placeholder: "Buscar...",
  placeholderTextColor: "#000",
  inputStyle: style.inputStyle,
  inputContainerStyle: style.inputContainerStyle,
  containerStyle: style.containerStyle,
  leftIconContainerStyle: style.leftIconContainerStyle,
  searchIcon: { size: 30, color: "#000" },
  clearIcon: null,
};

export default class CustomSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={[style.barContainer]}>
        <SearchBar
          {...SearchBarProps}
          onChangeText={this.updateSearch}
          value={search}
          onSubmitEditing={() => {
            this.props.history.push({
              pathname: "/VideoList",
              state: { search: this.state.search },
            });
          }}
        />
      </View>
    );
  }
}
