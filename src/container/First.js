import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Number from "../components/Number/Number";
import Visible from "../components/Visible/Visible";
import Play from "../components/Buttons/PlayButton";

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = { increase: 0, visible: false, show: false };
  }

  increaseHandler = () => {
    this.setState({ increase: this.state.increase + 1 });
  };
  decreaseHandler = () => {
    if (this.state.increase > 0) {
      this.setState({ increase: this.state.increase - 1 });
    }
    if (this.state.increase == 1) {
      this.setState({ visible: !this.state.visible });
    }
  };

  Play = (props) => {
    if (props.visible) return <this.Visible />;
  };

  VisibleHandler = () => {
    if (!this.state.visible) {
      return (
        <Button
          title="Play"
          onPress={this.setState({ visible: !this.state.visible })}
        ></Button>
      );
    } else return null;
  };

  playHandler = () => {
    this.setState({ visible: !this.state.visible });
    this.setState({ show: !this.state.state });
  };
  render() {
    return (
      <View style={styles.container}>
        <Number number={this.state.increase} show={this.state.show} />

        <Play func={this.playHandler} visible={this.state.visible} />

        <Visible
          count={this.state.increase}
          visible={this.state.visible}
          inc={this.increaseHandler}
          dec={this.decreaseHandler}
        />
        <StatusBar style="auto" />
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