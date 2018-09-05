import React, { Component } from "react";
import Header from "./Header";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import { Query } from "react-apollo";
import { PRIORITIES, PRIORITIZE_TODO } from "./query";
import { withApollo } from "react-apollo";

import { Loading } from "./Loading";
import { WhitespaceMedium } from "./Whitespace";

class Priorities extends Component {
  // In thois Priorities view, user should be able to unstar the item and it would be removed from the priority list.
  // In the other ListDetail view user should also be able to toggle the star to add or remove it from the Priorities view.
  updateToDo = item => {
    this.props.client
      .mutate({
        variables: {
          id: item.id,
          prioritized: false
        },
        mutation: PRIORITIZE_TODO,
        update: (dataProxy, { data: { updateToDo } }) => {
          const query = PRIORITIES;
          const data = dataProxy.readQuery({ query });
          let { items } = data.listToDos;
          items = items.map(n => (n.id === updateToDo.id ? updateToDo : n));
          data.listToDos.items = items;
          dataProxy.writeQuery({ query, data });
        },
        optimisticResponse: {
          updateToDo: {
            ...item,
            optimistic: true,
            version: 2,
            __typename: "ToDo"
          }
        }
      })
      .catch(e => console.log("Update ToDo ", e));
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle="Priorities" />
        <ScrollView>
          <WhitespaceMedium />
          <Query query={PRIORITIES} fetchPolicy="cache-and-network">
            {({ loading, error, data }) => {
              if (loading) return <Loading />;
              if (error) return <text>error</text>;

              const ItemsToRender = data.listToDos.items;
              return (
                <View>
                  {ItemsToRender.map(item => (
                    <View key={item.id} style={styles.todoListItem}>
                      <View style={styles.acitonSituation}>
                        <TouchableOpacity>
                          <View>
                            {item.status === "done" ? (
                              <View style={styles.completed}>
                                <MaterialCommunityIcons
                                  name="check"
                                  color="#5EA80E"
                                  size={16}
                                  iconStyle={{
                                    position: "absolute",
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}
                                />
                              </View>
                            ) : (
                              <View style={styles.notStarted} />
                            )}
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.toDo}>
                        <Text
                          style={
                            item.status === "done"
                              ? styles.titleCompleted
                              : styles.titleNormal
                          }
                        >
                          {item.title}
                        </Text>
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                      </View>
                      <View style={styles.priority}>
                        <TouchableOpacity onPress={this.updateToDo(item)}>
                          <FontAwesome
                            name={(item.prioritized = true ? "star" : "star-o")}
                            color="#FF952C"
                            size={24}
                          />
                        </TouchableOpacity>
                        )} )}
                      </View>
                    </View>
                  ))}
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60
  },

  todoListItem: {
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 12
  },
  actionSituation: {
    width: 24
  },

  toDo: {
    width: "80%",
    paddingLeft: 16
  },
  priority: {
    alignItems: "flex-end"
  },
  notStarted: {
    height: 24,
    width: 24,
    borderStyle: "solid",
    borderColor: "#bababa",
    borderRadius: 100,
    borderWidth: 1.5
  },

  completed: {
    height: 24,
    width: 24,
    borderStyle: "solid",
    borderColor: "#5EA80E",
    borderRadius: 100,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center"
  },

  titleCompleted: {
    fontSize: 20,
    fontWeight: "400",
    color: "#5EA80E",
    opacity: 0.7,
    marginBottom: 2,

    textDecorationLine: "line-through"
  },

  titleNormal: {
    fontSize: 20,
    fontWeight: "400",
    color: "#252525",
    marginBottom: 2
  },

  description: {
    fontSize: 16,
    color: "#6e6e6e",
    marginBottom: 2
  },

  count: {
    color: "#a8a8a8",
    fontSize: 14,
    marginTop: 5
  },
  toDoInput: {
    fontSize: 20,
    paddingLeft: 16
  }
});

export default withApollo(Priorities);
