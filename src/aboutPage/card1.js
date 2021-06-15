import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const Card1 = () => {
  return (
        <View style={styles.width1}>
          <Card containerStyle={styles.shadow}>
            <View style={styles.view}>
              <View style={styles.left}>
                <Text>Cap</Text>
              </View>
              <View style={styles.middle}>
                <Text>--</Text>
              </View>
              <View style={styles.right}>
                <Text>SomeID</Text>
              </View>
            </View>
            <Card.Divider style={{ margin: 30 }} />
            <View style={styles.view}>
              <View style={styles.left}>
                <Text>Name</Text>
              </View>
              <View style={styles.middle}>
                <Text>--</Text>
              </View>
              <View style={styles.right}>
                <Text>SomeID</Text>
              </View>
            </View>
            <Card.Divider style={{ margin: 30 }} />
            <View style={styles.view}>
              <View style={styles.left}>
                <Text>Guardian</Text>
              </View>
              <View style={styles.middle}>
                <Text>--</Text>
              </View>
              <View style={styles.right}>
                <Text>SomeID</Text>
              </View>
            </View>
            <Card.Divider style={{ margin: 30 }} />
          </Card>
          <Card containerStyle={styles.shadow}>
            <View>
              <Text style={{ fontSize: 15, fontFamily: "" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </Card>
        </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    borderColor: "white", // if you need
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
    marginTop: 70,
  },
  width1: {
    width: "100%",
  },
  view: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    padding: 10,
  },
  left: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card1;