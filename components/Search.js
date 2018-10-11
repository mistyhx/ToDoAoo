import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "./Header";
import { SEARCH_TODO, GET_TODO } from "./query";
import { ApolloConsumer } from "react-apollo";
import ToDoItem from "./ToDoItem";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Search extends Component {
  state = {
    items: [],
    filter: "",
    hasResult: "Do search"
  };

  searchResult = items => {
    if (items.length) {
      this.setState({ items: items, hasResult: "Do search" });
    } else {
      this.setState({ hasResult: "No result" });
    }
  };

  render() {
    const { items, filter } = this.state;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <Header headerTitle="Search" />
          <ApolloConsumer>
            {client => (
              <View>
                <View style={styles.searchInput}>
                  <Feather name="search" size={24} color="#a6a6a6" />
                  <TextInput
                    placeholder="Search by item name"
                    onChangeText={filter => this.setState({ filter })}
                    value={filter}
                    style={{ width: "85%", paddingLeft: 10, fontSize: 20 }}
                    returnKeyType="search"
                    onSubmitEditing={async () => {
                      const { data } = await client.query({
                        query: SEARCH_TODO,
                        variables: { filter: filter }
                      });
                      this.searchResult(data.listToDos.items);
                    }}
                  />
                  {filter != "" ? (
                    <TouchableOpacity
                      onPress={() => this.setState({ filter: "" })}
                    >
                      <MaterialIcons
                        name="cancel"
                        size={24}
                        color="#a6a6a6"
                        style={{
                          alignSelf: "flex-end",
                          justifyContent: "flex-end"
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
                <View style={styles.searchResult}>
                  {this.state.hasResult === "No result" ? (
                    <View>
                      <Text>No result</Text>
                    </View>
                  ) : (
                    <View>
                      {items.map(toDo => (
                        <ToDoItem key={toDo.id} toDo={toDo} />
                      ))}
                    </View>
                  )}
                </View>
              </View>
            )}
          </ApolloConsumer>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    paddingTop: 40
  },

  searchInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 8,
    padding: 10,
    marginTop: 20
  },
  searchResult: {}
});

export default Search;
