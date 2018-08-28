import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import Header from "./Header";
import { WhitespaceLarge, WhitespaceMedium } from "./Whitespace";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Mutation } from "react-apollo";
import { CREATE_ITEM } from "./query";

class CreateNew extends Component {
  state = {
    title: ""
  };
  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Mutation
          mutation={CREATE_ITEM}
          variables={{ title }}
          onCompleted={() => this.props.history.push("/")}
        >
          {createToDo => (
            <Button
              style={{
                position: "absolute",
                right: 20,
                alignItems: "flex-end"
              }}
              title="Done"
              onPress={createToDo}
            />
          )}
        </Mutation>

        <WhitespaceMedium />

        <Header headerTitle="Create new item" />
        <WhitespaceMedium />

        <View style={styles.todoListItem}>
          <View style={styles.notStarted} />
          <TextInput
            style={styles.toDoInput}
            value={title}
            onChangeText={title => this.setState({ title })}
            placeholder=" Add an item (Required)"
            returnKeyType="done"
          />
        </View>
        <WhitespaceMedium />

        <TextInput style={styles.notes} placeholder=" Notes" />
        <WhitespaceLarge />
        <View style={styles.divider} />

        <WhitespaceMedium />
        <TouchableOpacity>
          <View style={styles.listsSelection}>
            <Feather name="list" color="gray" size={24} />
            <Text style={styles.list}>Lists</Text>
            <MaterialIcons name="arrow-drop-down" color="#252525" size={24} />
          </View>
        </TouchableOpacity>
        <WhitespaceMedium />
        <TouchableOpacity>
          <View style={styles.priority}>
            <FontAwesome name="star-o" color="#FF952C" size={24} />
            <Text style={styles.list}>Mark as a priority</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1
  },
  toDoInput: {
    fontSize: 20
  },
  notes: {
    fontSize: 16
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
  todoListItem: {
    flexDirection: "row"
  },
  listsSelection: {
    flexDirection: "row"
  },
  list: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20
  },

  divider: {
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 1
  },
  priority: {
    flexDirection: "row"
  }
});

export default CreateNew;
