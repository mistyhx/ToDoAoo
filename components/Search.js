import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Header from "./Header";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Search extends Component {
  state = {
    items: [],
    text: ""
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <Header headerTitle="Search" />
          <View style={styles.searchInput}>
            <Feather name="search" size={24} color="#a6a6a6" />
            <TextInput
              placeholder="Search by item name"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              style={{ width: "85%", paddingLeft: 10, fontSize: 20 }}
              returnKeyType="search"
            />
            {this.state.text != "" ? (
              <TouchableOpacity onPress={() => this.setState({ text: "" })}>
                <MaterialIcons
                  name="cancel"
                  size={24}
                  color="#a6a6a6"
                  style={{ alignSelf: "flex-end", justifyContent: "flex-end" }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.searchResult} />
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
