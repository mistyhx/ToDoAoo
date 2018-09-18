import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "./ListDetail";

class ToDoItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View key={toDo.id} style={styles.todoListItem}>
          <View style={styles.acitonSituation}>
            <TouchableOpacity>
              <View>
                {toDo.status === "done" ? (
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
                toDo.status === "done"
                  ? styles.titleCompleted
                  : styles.titleNormal
              }
            >
              {toDo.title}
            </Text>
            <Text style={styles.description}>{toDo.description}</Text>
          </View>
          <View style={styles.priority}>
            <TouchableOpacity>
              <FontAwesome
                name={(toDo.prioritized = true ? "star" : "star-o")}
                color="#FF952C"
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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

export default ToDoItem;
