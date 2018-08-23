import React from "react";
import { createStackNavigator } from "react-navigation";
import Lists from "../components/Lists";
import ListDetail from "../components/ListDetail";
import MiniList from "../components/MiniList";

export const ListStack = createStackNavigator({
  Lists: {
    screen: Lists
  },

  ListDetail: {
    screen: ListDetail
  }
});
