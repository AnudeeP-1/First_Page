import React from "react";
import IncreaseButton from "../Buttons/IncreaseButton";
import DecreseButton from "../Buttons/DecreaseButton";

const Visible = (props) => {
  var a = [];
  if (props.visible) {
    a[0] = <IncreaseButton title="Increase" func={props.inc} />;
    if (props.count > 0) {
      a[1] = <DecreseButton title="Decrease" func={props.dec}/>;
    }
  }
  return a;
};

export default Visible;
