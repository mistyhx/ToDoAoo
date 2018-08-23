import React from "react";
import { View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <EvilIcons size={24} color="#29BDFF" />
    </View>
  );
};
