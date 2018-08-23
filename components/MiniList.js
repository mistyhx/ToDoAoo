import React, { Component } from "react";
import { Query, withApollo } from "react-apollo";
import { PINNED_LISTS } from "./query";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Loading } from "./Loading";
import ListDetail from "./ListDetail";

class MiniList extends Component {
  onLearnDetail = list => {
    this.props.navigation.navigate("ListDetail", { ...list });
  };

  render() {
    return (
      <Query query={PINNED_LISTS}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <Text>Error</Text>;

          return (
            <View style={styles.container}>
              {data.lists.map(list => (
                <View key={list.id}>
                  <Text style={styles.headerTitle}>{list.name}</Text>
                  <TouchableOpacity onPress={() => this.onLearnDetail(list)}>
                    <View style={styles.card}>
                      <Text style={styles.count}>
                        {list.toDoes.length} items
                      </Text>

                      {list.toDoes.map(toDo => (
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
                  </TouchableOpacity>
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
    flexDirection: "row"
  },
  titleCompleted: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5EA80E",
    opacity: 0.7,
    marginBottom: 2,

    textDecorationLine: "line-through"
  },

  titleNormal: {
    fontSize: 16,
    fontWeight: "500",
    color: "#252525",
    marginBottom: 2
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
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 3 },
    height: 250,
    width: 250,
    padding: 20,
    marginLeft: 20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default withApollo(MiniList);
