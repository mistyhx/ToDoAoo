import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class ListDetail extends Component {
  render() {
    const { name, toDoes, pinned } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        {toDoes.map(toDo => (
          <View key={toDo.id} style={styles.todoListItem}>
            <View style={styles.acitonSituation}>
              <TouchableOpacity>
                <View>
                  {toDo.situation === "Completed" ? (
                    <MaterialCommunityIcons
                      name="check-circle-outline"
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
              <Text
                style={
                  toDo.situation === "Completed"
                    ? styles.titleCompleted
                    : styles.titleNormal
                }
              >
                {toDo.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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
    borderColor: "#bababa",
    borderRadius: 100,
    borderWidth: 1.5
  },

  completed: {
    height: 16,
    width: 16,
    marginRight: 10,
    backgroundColor: "gray",
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
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default ListDetail;
