import React, { useState } from "react";
import { StyleSheet } from "react-native";

import {
  Block,
  Paragraph,
  Heading,
  Button,
  TextInput,
} from "../../../components/shared";

export const DetailsForm = ({ navigation }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (val) => {
    setDetails({ [val.type]: val.text });
  };
  return (
    <Block flex={1}>
      <Block flex={1} hPad={25}>
        <Block vc hc>
          <Heading variant="h1">Create an Account</Heading>
        </Block>
        <Block flex={1} vc>
          <TextInput
            autoFocus
            placeholder="Name"
            onChangeText={(text) => onInputChange({ type: "name", text })}
            value={details["name"]}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) => onInputChange({ type: "email", text })}
            value={details["email"]}
          />

          <Paragraph color="#AAB8C2">
            By signing up. You agree to our terms. we actually don't have any
          </Paragraph>

          <Button
            width="100%"
            height={50}
            bold
            title="Sign up"
            style={styles.button}
            onPress={() =>
              navigation.navigate("VerifyCode", {
                email: details["email"],
              })
            }
          />
        </Block>
      </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
});
