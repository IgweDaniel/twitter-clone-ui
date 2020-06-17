import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { RenderTweet } from "./RenderTweet";
import { replies } from "../../fakedata";

export default function Replies({ tweetId }) {
  const COUNT = 1;
  return (
    <FlatList
      style={styles.timeline}
      data={replies}
      renderItem={({ item }) => (
        <View style={styles.status}>
          <RenderTweet count={COUNT} status={item} />
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  timeline: {
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 400,
    paddingBottom: 60,
  },
  status: {
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: 1,
    paddingVertical: 10,
    // backgroundColor: "red",
  },
});
