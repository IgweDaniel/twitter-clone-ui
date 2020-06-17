import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Block, Header, Paragraph } from "../../../components/shared";
import { feed } from "../../../../fakedata";
import PenIcon from "../../../../assets/icons/pen.svg";
import { FeedItem } from "../../../components/FeedItem";

const Feed = ({ navigation }) => {
  return (
    <Block flex={1}>
      <Header isHome route="home" navigation={navigation} />
      <FlatList
        style={styles.timeline}
        data={feed}
        renderItem={({ item }) => <FeedItem status={item} />}
        keyExtractor={(item) => `${item.id}`}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tweetbutton}
        onPress={() => navigation.navigate("Modal")}
      >
        <PenIcon height={25} width={25} fill="#fff" />
      </TouchableOpacity>
    </Block>
  );
};

export default Feed;

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
