import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { RenderTweet } from "./RenderTweet";
import { connect } from "react-redux";
import { axios } from "../utils/axios";
// import { replies } from "../../fakedata";

function Replies({ statusId, token }) {
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getReplies() {
    try {
      const res = await axios.get(`/statuses/${statusId}/replies`, {
        headers: {
          "x-access-token": token,
        },
      });
      setReplies(res.data.data.replies);
      // setReplies(res.data.data.status);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReplies();
  }, []);
  const COUNT = 1;
  return (
    <FlatList
      style={styles.timeline}
      data={replies}
      renderItem={({ item }) => (
        <View style={styles.status}>
          <RenderTweet count={COUNT} originalId={statusId} status={item} />
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(Replies);
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
