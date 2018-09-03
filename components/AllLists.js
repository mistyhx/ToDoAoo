import React, { Component } from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";

class AllLists extends Component {
  render() {
    const { onLearnDetail, lists } = this.props;
    return (
      <View style={styles.container}>
        <Header headerTitle="All lists" />
        {lists.map(list => (
          <View key={list.id} style={styles.listItems}>
            <TouchableOpacity onPress={() => onLearnDetail(list)}>
              <Text style={styles.listName}>{list.name}</Text>
              <Text style={styles.count}>{list.toDoes.length} items</Text>
              <View style={styles.divider} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },

  listItems: {
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

  listName: {
    fontSize: 20
  },
  count: {
    color: "#a8a8a8",
    fontSize: 14,
    paddingBottom: 20
  },
  divider: {
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 1
  }
});

export default AllLists;
