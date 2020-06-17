import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Paragraph, Heading, Block } from "./shared";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { RenderRetweeted } from "./RenderRetweeted";
import { TweetActions } from "./TweetActions";

export const RenderTweet = ({ status, type, count, viewStatus }) => {
  const navigation = useNavigation();
  if (count == 4) return null;
  return (
    <>
      {status["in_reply_to_status"] && (
        <>
          <RenderTweet
            count={(count += 1)}
            type="reply"
            status={status["in_reply_to_status"]}
          />
        </>
      )}
      <View style={styles.statusCard}>
        <View style={styles.user}>
          <Avatar uri={status.user.avatar} size={45} />
          {type == "reply" && <View style={styles.reply_line}></View>}
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.push("Tweet", { id: status.id })}
          >
            <Heading variant="h5" style={{ textTransform: "capitalize" }}>
              {status.user.username}
            </Heading>
            {status.text && (
              <Paragraph style={styles.tweetText} size={14}>
                {status.text}
              </Paragraph>
            )}
          </TouchableOpacity>
          {status.media &&
            status.media
              .slice(0, 2)
              .map((url, i) => (
                <Image
                  key={i}
                  style={styles.media}
                  height={150}
                  width={"100%"}
                  source={{ uri: url }}
                />
              ))}
          {status["retweet_status"] && (
            <>
              <RenderRetweeted
                count={(count += 1)}
                type="retweet"
                status={status["retweet_status"]}
              />
            </>
          )}
          {type != "retweet" && (
            <Block width="80%" vPad={20}>
              <TweetActions status={status} />
            </Block>
          )}
        </View>
      </View>
    </>
  );
};
RenderTweet.defaultProps = {
  type: "tweet",
};
const styles = StyleSheet.create({
  statusCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    minHeight: 90,
  },
  tweetText: {
    lineHeight: 20,
  },
  reply_line: {
    height: 2,
    backgroundColor: "#AAB8C2",
    width: 2,
    flex: 1,
  },
  media: {
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  user: { width: "10%", alignItems: "center" },
  content: { width: "80%", alignSelf: "center" },
});
