import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo";
import AllLists from "./AllLists";
import MiniList from "./MiniList";

class Lists extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addList}>
          <MaterialIcons name="playlist-add" color="white" size={32} />
        </TouchableOpacity>
        <LinearGradient
          style={styles.bgCircle}
          colors={["#17B7FE", "#96ECFF"]}
        />

        <ScrollView scrollsToTop={true}>
          <Text style={styles.indicator}>Pinned list</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardsSlides}>
              <MiniList />
            </View>
          </ScrollView>
          <View style={styles.cardList}>
            <AllLists />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  bgCircle: {
    position: "absolute",
    width: 550,
    height: 550,
    top: -180,
    right: -30,
    borderRadius: 300,
    zIndex: -1
  },

  cardsSlides: {
    flexDirection: "row",
    paddingBottom: 20
  },

  cardList: {
    marginTop: 10,
    height: 600,
    paddingLeft: 20,
    backgroundColor: "white"
  },

  listHeader: {
    fontSize: 24,
    fontWeight: "700",
    padding: 20
  },

  addList: {
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 20
  },
  indicator: {
    fontSize: 14,
    color: "white",
    paddingLeft: 20,

    paddingBottom: 0
  }
});

export default Lists;
