import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image source={require("./images/GitHub-Mark.png")} style={styles.Logo} />
  );
};

const styles = StyleSheet.create({
  Logo: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "red",
  },
});

export default Logo;
