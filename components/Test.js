import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Query, withApollo } from "react-apollo";
import { GET_LISTS } from "./query";
import { Loading } from "./Loading";

class Test extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerTitle}>Test</Text>
        <Query query={GET_LISTS}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <text>error</text>;

            const ItemsToRender = data.listLists.items;
            return (
              <View>
                {ItemsToRender.map(item => (
                  <View>
                    <Text>{item.name}</Text>
                    <Text>
                      {item.toDoes.map(toDo => (
                        <Text>{toDo.title}</Text>
                      ))}
                    </Text>
                  </View>
                ))}
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: "700"
  }
});

export default Test;
