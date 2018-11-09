import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Auth } from "aws-amplify";
import RNRestart from "react-native-restart";

class Settings extends Component {
  signOut = async () => {
    await Auth.signOut();
    RNRestart.Restart();
  };

  render() {
    return (
      <View>
        <Text style={styles.headerTitle}>Settings</Text>
        <Button title="Sign Out" onPress={this.signOut} />
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
