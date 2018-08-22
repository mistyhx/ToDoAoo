import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import { LIST_TODOS } from "./query";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

class MiniList extends Component {
  render() {
    return (
      <Query query={LIST_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>loading</Text>;

          return (
            <View style={styles.container}>
              <Text style={styles.count}>{data.toDoes.length} items</Text>
              {data.toDoes.map(toDo => (
                <View key={toDo.id} style={styles.todoList}>
                  <View style={styles.todoListItem}>
                    <View style={styles.acitonSituation}>
                      <TouchableOpacity>
                        <View>
                          {toDo.situation === "In progress" ? (
                            <MaterialIcons
                              name="check-circle"
                              color="#5EA80E"
                              size={18}
                            />
                          ) : (
                            <View style={styles.notStarted} />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.toDo}>
                      <Text style={styles.title}>{toDo.title}</Text>
                      <Text style={styles.description}>{toDo.description}</Text>
                    </View>
                  </View>
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
    flex: 1
  },
  todoList: {},
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#252525"
  },
  description: {
    color: "#9d9d9d",
    fontSize: 13,
    marginTop: 2
  },
  todoListItem: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5
  },
  notStarted: {
    height: 16,
    width: 16,
    marginRight: 10,
    borderStyle: "solid",
    borderColor: "#dfdfdf",
    borderRadius: 100,
    borderWidth: 1.5
  },

  inProgress: {
    height: 16,
    width: 16,
    marginRight: 10,
    backgroundColor: "green",
    borderStyle: "solid",
    borderColor: "green",
    borderRadius: 100,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center"
  },
  acitonSituation: {
    flex: 1
  },
  toDo: {
    flex: 5
  },
  count: {
    color: "#a8a8a8",
    fontSize: 14,
    marginBottom: 10
  }
});

export default withApollo(MiniList);
