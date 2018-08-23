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
    padding: 20,
    paddingTop: 60
  }
});

export default Priorities;
