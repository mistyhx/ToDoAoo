import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import { LISTS } from "./query";
import { Text, View, StyleSheet } from "react-native";
import Header from "./Header";

class AllLists extends Component {
  render() {
    return (
      <Query query={LISTS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>loading</Text>;

          return (
            <View style={styles.container}>
              <Header headerTitle="All lists" />
              {data.lists.map(list => (
                <View key={list.id} style={styles.listItems}>
                  <Text style={styles.listName}>{list.name}</Text>
                  <Text style={styles.count}>{list.toDoes.length} lists</Text>
                  <View style={styles.divider} />
                </View>
              ))}
            </View>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },

  listItems: {
    paddingLeft: 20,
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

export default withApollo(AllLists);
