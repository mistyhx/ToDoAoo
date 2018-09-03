import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import { LIST_TODOS } from "./query";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";

class ToDoList extends Component {
  render() {
    return (
      <Query query={LIST_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>loading</Text>;

          return (
            <View style={styles.container}>
              {data.toDoes.map(toDo => (
                <View key={toDo.id} style={styles.todoList}>
                  <View style={styles.todoListItem}>
                    <View style={styles.acitonSituation}>
                      <TouchableOpacity>
                        <View>
                          {toDo.situation === "In progress" ? (
                            <View style={styles.inProgress} />
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
    flex: 1,
    paddingTop: 60
  },
  todoList: {
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#252525"
  },
  description: {
    color: "#9d9d9d",
    fontSize: 14,
    marginTop: 8
  },
  todoListItem: {
    padding: 16,
    flexDirection: "row"
  },
  notStarted: {
    height: 24,
    width: 24,
    marginRight: 10,
    borderStyle: "solid",
    borderColor: "#9d9d9d",
    borderRadius: 100,
    borderWidth: 1.5
  },

  inProgress: {
    height: 24,
    width: 24,
    marginRight: 10,
    backgroundColor: "green",
    borderStyle: "solid",
    borderColor: "green",
    borderRadius: 100,
    borderWidth: 1.5
  },
  acitonSituation: {
    flex: 1
  },
  toDo: {
    flex: 5
  }
});

export default withApollo(ToDoList);
