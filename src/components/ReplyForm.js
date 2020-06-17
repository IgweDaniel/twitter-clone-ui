import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import { Button, Paragraph } from "./shared";

export default function ReplyForm() {
  const [show, setShow] = useState(false);

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
      <TextInput style={styles.replyInput} placeholder="Tweet your reply" />
      {show && (
        <View style={styles.replyActions}>
          <Button title="Reply" />
        </View>
      )}
    </View>
  );
}

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
