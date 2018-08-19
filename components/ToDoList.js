import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import { LIST_TODOS } from "./query";
import { Text, View, FlatList } from "react-native";

class ToDoList extends Component {
  render() {
    return (
      <Query query={LIST_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>loading</Text>;

          return (
            <View>
              {data.toDoes.map(post => (
                <Text>{post.title}</Text>
              ))}
            </View>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(ToDoList);
