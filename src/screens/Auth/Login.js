import React, { useState } from "react";
import { StyleSheet } from "react-native";

import {
  Paragraph,
  Button,
  TextInput,
  Heading,
  Block,
} from "../../components/shared";

import { connect } from "react-redux";
import { login } from "../../store/actions";
import { PRIMARY_COLOR } from "../../utils/constants";

const LoginIn = ({ navigation, login }) => {
  const [authdetails, setAuthdetails] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (val) => {
    setAuthdetails({ ...authdetails, [val.type]: val.text });
  };
  const handleSubmit = () => {
    if (
      authdetails["email"].trim() != "" &&
      authdetails["password"].trim() != ""
    ) {
      login(authdetails["email"], authdetails["password"]);
    }
  };
  return (
    <Block flex={1}>
      <Block flex={1} hPad={20}>
        <Block>
          <Heading variant="h1">Login in to twitter</Heading>
        </Block>

        <TextInput
          autoFocus
          placeholder="Email or username"
          onChangeText={(text) => onInputChange({ type: "email", text })}
          value={authdetails["email"]}
        />
        <TextInput
          autoFocus
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => onInputChange({ type: "password", text })}
          value={authdetails["password"]}
        />
        <Paragraph color={PRIMARY_COLOR}>Forgot Password?</Paragraph>
      </Block>
      <Block style={styles.footer}>
        <Button title="Login" onPress={() => handleSubmit()} />
      </Block>
    </Block>
  );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LoginIn);

const styles = StyleSheet.create({
  footer: {
    alignItems: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 5,
    height: 70,
    borderTopColor: "#E1E8ED",
    justifyContent: "center",
    borderTopWidth: 1,
  },
});
