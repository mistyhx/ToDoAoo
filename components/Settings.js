import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Settings extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    paddingLeft: 20,
    paddingTop: 60
  }
});

export default Settings;
