import React from "react";
import { View, Stylesheet, StyleSheet } from "react-native";

export const WhitespaceSmall = () => {
  return <View style={styles.small} />;
};

export const WhitespaceLarge = () => {
  return <View style={styles.large} />;
};

export const WhitespaceMedium = () => {
  return <View style={styles.medium} />;
};

const styles = StyleSheet.create({
  small: {
    padding: 10
  },
  medium: {
    padding: 15
  },
  large: {
    padding: 30
  }
});
