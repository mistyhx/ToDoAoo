import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class ListDetail extends Component {
  render() {
    const { name } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>Llalalal</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default ListDetail;
