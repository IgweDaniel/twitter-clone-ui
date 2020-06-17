import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Heading, Paragraph, Button } from "./shared";
import { connect } from "react-redux";
import { axios } from "../utils/axios";

function RenderUser({ user, token }) {
  async function follow() {
    const res = await axios.post(
      "/user/friendships/create",
      { id: user.id },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log(res.data);
  }

  return (
    <View style={styles.user}>
      <View style={styles.avatar}>
        <Avatar uri={user.avatar} size={45} />
      </View>
      <View style={styles.userInfo}>
        <Heading variant="h5">{user.username}</Heading>
        {user.bio && <Paragraph>{user.bio}</Paragraph>}
      </View>
      <View style={styles.userActiom}>
        <Button title="follow" onPress={() => follow()} />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(RenderUser);

const styles = StyleSheet.create({
  user: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: 1,
  },
  avatar: {
    width: "16%",
  },
  userInfo: {
    flex: 1,
  },
  userActiom: {
    width: "20%",
    alignSelf: "center",
  },
});
