import React, { Component } from "react";
import { Animated, Easing } from "react-native";

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  const scaleX = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [{ scaleY }, { scaleX }]
  };
};

export const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene;
      const params = route.params || {}; // <- That's new
      const transition = params.transition || "default"; // <- That's new
      return {
        default: CollapseExpand(index, position)
      }[transition];
    }
  };
};
