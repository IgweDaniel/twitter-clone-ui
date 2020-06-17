import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Block, Header, Paragraph } from "../../../components/shared";
import { feed } from "../../../../fakedata";
import PenIcon from "../../../../assets/icons/pen.svg";
import { FeedItem } from "../../../components/FeedItem";
import { connect } from "react-redux";
import { axios } from "../../../utils/axios";

const Feed = ({ navigation, route, token }) => {
  const [feedData, setFeedData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  async function fetchTweets() {
    setRefreshing(true);
    try {
      const res = await axios.get("statuses/home_timeline", {
        headers: {
          "x-access-token": token,
        },
      });
      setFeedData(res.data.data.tweets);
      setRefreshing(false);
      console.log("==========", res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <Block flex={1}>
      <Header isHome route="home" navigation={navigation} />
      <FlatList
        onRefresh={() => fetchTweets()}
        refreshing={refreshing}
        style={styles.timeline}
        data={feedData}
        renderItem={({ item }) => <FeedItem status={item} />}
        keyExtractor={(item) => `${item.id}`}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tweetbutton}
        onPress={() => navigation.navigate("TweetForm")}
      >
        <PenIcon height={25} width={25} fill="#fff" />
      </TouchableOpacity>
    </Block>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(Feed);

const styles = StyleSheet.create({
  timeline: {
    backgroundColor: "#fff",
    width: "100%",
  },
  tweetbutton: {
    position: "absolute",
    bottom: 20,
    right: 10,
    zIndex: 5,
    backgroundColor: "#1DA1F2",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
