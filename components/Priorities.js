import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./Header";

class Priorities extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle="Priorities" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    paddingLeft: 20,
    paddingTop: 60
  }
});

export default Priorities;
