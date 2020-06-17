import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Heading, Paragraph } from "./Typography";

const OUTLINE_COLOR = "#657786";
const BUTTON_COLOR = "#1DA1F2";

export const Button = ({
  title,
  width,
  height,
  bold,
  outline,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[
        style,
        styles.button,
        {
          width,
          height,
          borderWidth: outline ? 1 : 0,
          backgroundColor: outline ? "transparent" : BUTTON_COLOR,
        },
      ]}
    >
      {bold ? (
        <Heading variant="h3" color={outline ? OUTLINE_COLOR : "#fff"}>
          {title}
        </Heading>
      ) : (
        <Paragraph color={outline ? OUTLINE_COLOR : "#fff"}>{title}</Paragraph>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  width: 70,
  height: 38,
  bold: false,
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: OUTLINE_COLOR,
  },
});
