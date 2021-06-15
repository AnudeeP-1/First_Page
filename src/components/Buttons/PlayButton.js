import React from "react";
import { Button } from "react-native";

const Play = (props) => {
  if (!props.visible) {
    return <Button title="Play" onPress={props.func}></Button>;
  } else return null;
};

export default Play;
