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
import ToDoList from "./ToDoList";
import MiniList from "./MiniList";

class Lists extends Component {
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
              <View style={styles.cardSlide}>
                <Text style={styles.headerTitle}>Lists</Text>
                <View style={styles.card}>
                  <MiniList />
                </View>
              </View>
              <View style={styles.cardSlide}>
                <Text style={styles.headerTitle}>Work</Text>
                <View style={styles.card}>
                  <Text style={styles.count}>6 items</Text>
                  <Text>To do items</Text>
                </View>
              </View>
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

  cardSlide: {},

  cardList: {
    marginTop: 10,
    height: 600,
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
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 3 },
    height: 250,
    width: 250,
    padding: 20,
    marginLeft: 20
  }
});

export default Lists;
