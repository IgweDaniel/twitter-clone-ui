import React from "react";
import { StyleSheet, Text } from "react-native";

export const Heading = ({ children, style, color, variant }) => {
  return (
    <Text
      style={[
        styles.heading,
        { color, fontSize: styles[variant].fontSize, ...style },
      ]}
    >
      {children}
    </Text>
  );
};

Heading.defaultProps = {
  color: "#000",
  size: 16,
};

export const Paragraph = ({ style, children, color, size }) => (
  <Text style={[styles.paragraph, { color, fontSize: size, ...style }]}>
    {children}
  </Text>
);

Paragraph.defaultProps = {
  color: "#000",
  size: 15,
};

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: "Roboto",
  },
  heading: {
    fontFamily: "Roboto-Med",
  },
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 25,
  },

  h3: {
    fontSize: 23,
  },
  h4: { fontSize: 19.5 },
  h5: {
    fontSize: 15,
  },
});
