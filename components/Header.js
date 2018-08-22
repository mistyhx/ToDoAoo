import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerTitle}>{this.props.headerTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    paddingLeft: 20
  }
});

export default Header;
