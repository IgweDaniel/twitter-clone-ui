import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import { Button, Paragraph } from "./shared";
import { connect } from "react-redux";
import { axios } from "../utils/axios";

function ReplyForm({ statusId, token }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  async function replyTweet() {
    if (text == "") return;
    const res = await axios.post(
      "/statuses/reply",
      { id: statusId, text },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    setText("");
    Keyboard.dismiss();
    console.log(res.data);
  }

  const _keyboardDidShow = () => {
    setShow(true);
  };

  const _keyboardDidHide = () => {
    setShow(false);
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  return (
    <View style={styles.replyForm}>
      {show && <Paragraph>Replying to @user</Paragraph>}
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.replyInput}
        placeholder="Tweet your reply"
      />
      {show && (
        <View style={styles.replyActions}>
          <Button title="Reply" onPress={() => replyTweet()} />
        </View>
      )}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(ReplyForm);
const styles = StyleSheet.create({
  replyForm: {
    borderTopColor: "#ccc",
    borderTopWidth: StyleSheet.hairlineWidth,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  replyInput: {
    height: 50,
    fontSize: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,

    width: "100%",
  },
  replyActions: {
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
