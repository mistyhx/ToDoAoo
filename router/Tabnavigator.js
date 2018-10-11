import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import CreateNew from "../components/CreateNew";
import Priorities from "../components/Priorities";
import Settings from "../components/Settings";
import Search from "../components/Search";

import { View } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import Feather from "react-native-vector-icons/Feather";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ListStack } from "./StackNavigator";

const Tabnavigator = createBottomTabNavigator(
  {
    Lists: {
      screen: ListStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="list" color={tintColor} size={24} />
        )
      })
    },
    Priorities: {
      screen: Priorities,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="star" color={tintColor} size={24} />
        )
      })
    },

    New: {
      screen: CreateNew,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#29BDFF",
              borderRadius: 100,
              width: 75,
              height: 75
            }}
          >
            <MaterialCommunityIcons name="feather" color="white" size={45} />
          </View>
        )
      })
    },

    Settings: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="settings" color={tintColor} size={24} />
        )
      })
    },
    Search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="search" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#29BDFF",
      inactiveTintColor: "#b6b6b6",
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export default Tabnavigator;
