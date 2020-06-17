import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

// import { Block, Text, Button } from "../../../components/shared";
import { Block, Heading, Paragraph, Button } from "../../../components/shared";

export const Landing = ({ navigation }) => {
  return (
    <Block flex={1}>
      <Block flex={1} vc hc hPad={35}>
        <Heading variant="h1">
          See what's happening in the world right now.
        </Heading>
        <Button
          width="100%"
          bold
          height={50}
          style={{ marginVertical: 20 }}
          title="Create account"
          onPress={() => navigation.navigate("DetailsForm")}
        />
      </Block>
      <Block style={{ height: 70 }} hPad={35}>
        <Block style={{ width: "100%", flexDirection: "row" }}>
          <Paragraph size={15} color="#AAB8C2">
            Have an account already?{" "}
          </Paragraph>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Paragraph size={15} color="#1DA1F2">
              login in
            </Paragraph>
          </TouchableOpacity>
        </Block>
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
