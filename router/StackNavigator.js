import React from "react";
import { createStackNavigator } from "react-navigation";
import Lists from "../components/Lists";
import ListDetail from "../components/ListDetail";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export const ListStack = createStackNavigator({
  Lists: {
    screen: Lists
  },

  ListDetail: {
    screen: ListDetail,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="md-arrow-back"
            color="black"
            size={32}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="pin"
              color="black"
              size={32}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons
              name="more-vert"
              color="black"
              size={32}
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      )
    })
  }
});
