
import React, { Component } from "react";
import First from "./src/container/First";
import Notification from "./src/keep/notification";
import Logo from "./src/aboutPage/logo";
import Card1 from "./src/aboutPage/card1";
import { View, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Card1 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
