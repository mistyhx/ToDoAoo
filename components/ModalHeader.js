import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

class ModalHeader extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ModalHeader;
