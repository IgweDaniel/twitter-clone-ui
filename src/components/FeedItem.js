import React from "react";
import { StyleSheet, View } from "react-native";
import { RenderTweet } from "./RenderTweet";

export const FeedItem = ({ status }) => {
  const COUNT = 1;
  return (
    <View style={styles.status}>
      <RenderTweet count={COUNT} status={status} />
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
