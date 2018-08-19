import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import { LIST_RECEIPES } from "./query";
import { Text, View, FlatList } from "react-native";

class ToDoList extends Component {
  render() {
    return (
      <Query query={LIST_RECEIPES}>
        {({ loading, data }) => {
          if (loading) return <Text>loading</Text>;

          const itemsToRender = data.listRecipes.items;
          return (
            <View>
              <FlatList
                data={itemsToRender}
                renderItem={({ item, index }) => (
                  <Text key={index}>{item.name}</Text>
                )}
              />
            </View>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(ToDoList);
