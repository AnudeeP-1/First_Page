import React from "react";
import { Button } from "react-native";

const DecreaseButton = (props) => {
  return <Button title={props.title} onPress={props.func}></Button>;
};

export default DecreaseButton;
