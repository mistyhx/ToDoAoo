import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import Header from "./Header";
import { WhitespaceMedium } from "./Whitespace";

class ListDetail extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: "white", borderBottomWidth: 0 }
  };

  state = {
    toDo: ""
  };

  render() {
    const { name, toDoes, pinned } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header headerTitle={name} />
          <Text style={styles.count}>{toDoes.length} items</Text>
          <WhitespaceMedium />
          {toDoes.map(toDo => (
            <View key={toDo.id} style={styles.todoListItem}>
              <View style={styles.acitonSituation}>
                <TouchableOpacity>
                  <View>
                    {toDo.situation === "Completed" ? (
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
                    toDo.situation === "Completed"
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
                    name={toDo.prioritized ? "star" : "star-o"}
                    color="#FF952C"
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <View style={styles.todoListItem}>
            <View style={styles.notStarted} />
            <TextInput
              style={styles.toDoInput}
              value={this.state.toDo}
              placeholder=" Add new item"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
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

export default ListDetail;
