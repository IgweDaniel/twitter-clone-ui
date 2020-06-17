import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Block,
  Paragraph,
  Heading,
  Button,
  TextInput,
} from "../../../components/shared";

export const CodeForm = ({ route, navigation }) => {
  const { email } = route.params;
  const [code, setCode] = useState("");
  return (
    <Block flex={1}>
      <Block flex={1} hPad={25}>
        <View>
          <Heading variant="h1">We sent you a code</Heading>
          <Paragraph>Enter it below to verify {email}</Paragraph>
        </View>

        <TextInput
          autoFocus
          placeholder="Verification Code"
          onChangeText={(text) => onInputChange(setCode(text))}
          value={code}
        />
        <Paragraph color="#1DA1F2">Didn't recieve Email</Paragraph>
      </Block>
      <Block style={styles.footer}>
        <Button
          title="next"
          width={60}
          onPress={() => navigation.navigate("VerifyCode")}
        />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 5,
    height: 70,
    borderTopColor: "#E1E8ED",
    justifyContent: "center",
    borderTopWidth: 1,
  },
});
