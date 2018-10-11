import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Query, withApollo } from "react-apollo";

import AllLists from "./AllLists";
import MiniList from "./MiniList";
import { PINNED_LISTS, GET_LISTS } from "./query";
import { Loading } from "./Loading";

class Lists extends Component {
  static navigationOptions = {
    header: null
  };

  onLearnDetail = list => {
    this.props.navigation.navigate("ListDetail", { ...list });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addList}>
          <MaterialIcons name="playlist-add" color="white" size={32} />
        </TouchableOpacity>

        <ScrollView scrollsToTop={true}>
          <Text style={styles.indicator}>Pinned list</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardsSlides}>
              <Query query={PINNED_LISTS} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                  if (loading) return <Loading />;
                  if (error) return <text>error</text>;
                  return (
                    <MiniList
                      lists={data.listLists.items}
                      onLearnDetail={list => this.onLearnDetail(list)}
                    />
                  );
                }}
              </Query>
            </View>
          </ScrollView>
          <View style={styles.cardList} fetchPolicy="cache-and-network">
            <Query query={GET_LISTS}>
              {({ loading, error, data }) => {
                if (loading) return <Loading />;
                if (error) return <text>error</text>;
                return (
                  <AllLists
                    lists={data.listLists.items}
                    onLearnDetail={list => this.onLearnDetail(list)}
                  />
                );
              }}
            </Query>
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
