import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Picker
} from "react-native";
import Header from "./Header";
import { WhitespaceLarge, WhitespaceMedium } from "./Whitespace";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Mutation } from "react-apollo";
import { CREATE_TODO, GET_TODO } from "./query";

class CreateNew extends Component {
  state = {
    title: "",
    description: null,
    prioritized: false,
    listId: "",
    status: "pending"
  };

  onSubmit = createToDo => {
    const { title, description, prioritized, listId, status } = this.state;
    this.setState({
      title: "",
      description: null,
      prioritized: false,
      listId: "",
      status: ""
    });

    if (title && description) {
      createToDo({
        variables: { title, description, prioritized, listId, status }
      });
    } else if (title) {
      createToDo({
        variables: { title, prioritized, listId, status }
      });
    }
  };
  render() {
    const { title, description, prioritized, listId, status } = this.state;
    return (
      <View style={styles.container}>
        <WhitespaceMedium />

        <Header headerTitle="Create new item" />
        <WhitespaceMedium />
        <Mutation
          mutation={CREATE_TODO}
          fetchPolicy="cache-and-network"
          optimisticResponse={{
            createToDo: {
              __typename: "ToDo",
              title,
              description,
              prioritized,
              listId,
              status
            }
          }}
        >
          {createToDo => (
            <React.Fragment>
              <View style={styles.todoListItem}>
                <View style={styles.notStarted} />
                <TextInput
                  style={styles.toDoInput}
                  onChangeText={title => this.setState({ title })}
                  value={title}
                  placeholder=" Add an item (Required)"
                  returnKeyType="done"
                />
              </View>
              <WhitespaceMedium />

              <TextInput
                style={styles.notes}
                placeholder=" Notes"
                onChangeText={description => this.setState({ description })}
                value={description}
              />
              <WhitespaceLarge />
              <View style={styles.divider} />

              <WhitespaceMedium />

              <View style={styles.listsSelection}>
                <Text>{listId}</Text>
                <Picker
                  selectedValue={listId}
                  onValueChange={itemValue =>
                    this.setState({ listId: itemValue })
                  }
                >
                  <Picker.Item
                    label="Example 1"
                    value="018645ff-8ef8-41fd-9c53-451e08ad9f5a"
                  />
                  <Picker.Item
                    label="Example 2"
                    value="64b04973-0199-4f29-8ecb-92131fd387f8"
                  />
                  <Picker.Item
                    label="Example 3"
                    value="6c75ba54-74ed-4013-8bc8-31c1342f4c8a"
                  />
                </Picker>
              </View>

              <WhitespaceMedium />
              <TouchableOpacity
                onPress={() => this.setState({ prioritized: !prioritized })}
              >
                <View style={styles.priority}>
                  <FontAwesome
                    name={prioritized ? "star" : "star-o"}
                    color="#FF952C"
                    size={32}
                  />
                  <Text style={styles.list}>Mark as a priority</Text>
                </View>
              </TouchableOpacity>
              <Button
                style={{
                  position: "absolute",
                  right: 20,
                  alignItems: "flex-end"
                }}
                title="Done"
                onPress={() => this.onSubmit(createToDo)}
              />
            </React.Fragment>
          )}
        </Mutation>
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
  listsSelection: {},
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
