import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Block, Paragraph } from "./shared";
import CommentIcon from "../../assets/icons/comment.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import Retweet from "../../assets/icons/retweet.svg";
import AddBookMark from "../../assets/icons/addbookmark.svg";
import HeartFull from "../../assets/icons/heart-full.svg";

const ActionButton = ({ style, icon: Icon, value, ...props }) => (
  <TouchableOpacity style={[styles.actionButton, style]} {...props}>
    <Icon />
    {value != 0 && (
      <Paragraph style={{ marginHorizontal: 5 }} size={12} color="#aab8c2">
        {value}
      </Paragraph>
    )}
  </TouchableOpacity>
);
const ICON_SIZE = 19;
const FILL = "#AAB8C2";

export const TweetActions = ({ status }) => {
  function favorite() {}

  function comment() {}
  function bookmark() {}

  function retweet() {}
  return (
    <Block style={styles.tweetActions}>
      <ActionButton
        icon={() => (
          <CommentIcon fill={FILL} height={ICON_SIZE} width={ICON_SIZE} />
        )}
        value={status["reply_count"]}
      />
      <ActionButton
        icon={() =>
          status.is_liked ? (
            <HeartFull fill={"#e0245e"} height={ICON_SIZE} width={ICON_SIZE} />
          ) : (
            <HeartIcon fill={FILL} height={ICON_SIZE} width={ICON_SIZE} />
          )
        }
        value={status["like_count"]}
      />
      <ActionButton
        icon={() => (
          <Retweet fill={FILL} height={ICON_SIZE} width={ICON_SIZE} />
        )}
        value={status["reply_count"]}
      />

      <AddBookMark fill={FILL} height={ICON_SIZE} width={ICON_SIZE} />
    </Block>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: "row",
  },
  tweetActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
