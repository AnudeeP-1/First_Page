import React from "react";
import {Text} from "react-native";

const Number = (props) => {
  const n = props.number;
  if (props.show) {
    var a = [];
    var count = 1;
    for (var i = 0; i < n; i++) {
      a[i] = <Text>{count++}</Text>;
    }
    return a;
  } else return null;

  // return [...Array(n)].map(() => <Text>{this.state.increase}</Text>);
};

export default Number;