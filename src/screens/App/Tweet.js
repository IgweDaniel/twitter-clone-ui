import React, { useRef, useState, useEffect } from "react";
import {
  Header,
  Block,
  Heading,
  Paragraph,
  Avatar,
} from "../../components/shared";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { RenderRetweeted } from "../../components/RenderRetweeted";
import { feed } from "../../../fakedata";
import { RenderTweet } from "../../components/RenderTweet";
import ReplyForm from "../../components/ReplyForm";
import Replies from "../../components/Replies";
import { axios } from "../../utils/axios";
import { connect } from "react-redux";
const RenderReplied = ({ status, viewStatus }) => {
  return (
    <View style={{ minHeight: 100, marginVertical: 10 }}>
      {status["in_reply_to_status"] && (
        <>
          <RenderTweet
            status={status["in_reply_to_status"]}
            viewStatus={viewStatus}
            type="reply"
          />
        </>
      )}
    </View>
  );
};

const MetaItem = ({ value, label }) => (
  <Block flex={0} style={styles.span}>
    <Heading variant="h5">{value}</Heading>
    <Heading variant="h5" color="#657786" style={{ marginHorizontal: 2 }}>
      {label}
    </Heading>
  </Block>
);

const Tweet = ({ route, navigation, token }) => {
  const _scrollView = useRef(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = route.params;
  // const status = feed.find((item) => item.id == id);
  async function getTweet() {
    try {
      const res = await axios.get(`/statuses/${id}`, {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(res.data.data);
      setStatus(res.data.data.status);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    getTweet();
  }, []);
  const _onLayout = ({
    nativeEvent: {
      layout: { y },
    },
  }) => {
    const pos = y - 10;
    // _scrollView.current.scrollTo({ y: pos, animation: false });
    _scrollView.current.scrollToOffset({
      animation: false,
      offset: pos,
    });
  };
  function viewStatus(id) {
    navigation.push("Tweet", { id });
  }
  return (
    <>
      <Header navigation={navigation} title="Tweet" isHome={false} />
      <Block flex={1} style={styles.status}>
        {loading ? (
          <Block flex={1} vc hc>
            <ActivityIndicator size={50} color="#1DA1F2" />
          </Block>
        ) : (
          <>
            {status && (
              <>
                <FlatList
                  style={styles.tweetContainer}
                  ref={_scrollView}
                  ListHeaderComponent={() => (
                    <>
                      {status["in_reply_to_status"] && (
                        <RenderReplied
                          viewStatus={viewStatus}
                          status={status}
                        />
                      )}

                      <View onLayout={_onLayout} style={styles.tweet}>
                        <View style={styles.header}>
                          <Block vc hc style={styles.avatar}>
                            {status["in_reply_to_status"] && (
                              <View style={styles.line}></View>
                            )}
                            <Avatar uri={status.user.avatar} size={45} />
                          </Block>
                          <Block vc style={styles.userInfo}>
                            <Heading variant="h4">
                              {status.user.username}
                            </Heading>
                          </Block>
                        </View>

                        <Block style={styles.content}>
                          {status.text && (
                            <Block style={styles.contentText}>
                              <Paragraph size={20}>{status.text}</Paragraph>
                            </Block>
                          )}
                          {status.media &&
                            status.media.map((url, i) => (
                              <Image
                                key={i}
                                style={styles.media}
                                height={250}
                                width={"100%"}
                                source={{ uri: url }}
                              />
                            ))}
                          {status["retweet_status"] && (
                            <>
                              <RenderRetweeted
                                status={status["retweet_status"]}
                              />
                            </>
                          )}
                        </Block>

                        <Block vc style={styles.meta}>
                          <MetaItem
                            value={status["reply_count"]}
                            label="Retweet"
                          />
                          <MetaItem
                            value={status["like_count"]}
                            label="Likes"
                          />
                        </Block>
                      </View>
                      <View style={styles.replies}></View>
                    </>
                  )}
                  ListFooterComponent={(status) => {
                    console.log(id);

                    return <Replies statusId={id} />;
                  }}
                />
                <ReplyForm statusId={status.id} />
              </>
            )}
          </>
        )}
      </Block>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(Tweet);

const styles = StyleSheet.create({
  tweet: { marginVertical: 10 },
  tweetContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  userInfo: { width: "80%" },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
  },
  media: {
    borderRadius: 10,
    marginTop: 5,
  },
  contentText: {
    marginBottom: 10,
    width: "100%",
  },
  content: {
    marginVertical: 10,
    width: "100%",
  },
  meta: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E1E8ED",
    flexDirection: "row",
    // marginVertical: 20,
    height: 60,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  span: {
    paddingVertical: 10,
    paddingRight: 5,
    borderColor: "#E1E8ED",
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "auto",
  },
  line: {
    height: 2,
    backgroundColor: "#AAB8C2",
    width: 2,
    flex: 1,
    marginTop: -20,
  },
});
