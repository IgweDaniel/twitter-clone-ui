import React from "react";
import { StyleSheet, View } from "react-native";

export const Block = ({
  children,
  flex,
  width,
  style,
  pad,
  hPad,
  vPad,
  vc,
  hc,
}) => {
  return (
    <>
      <View
        style={[
          styles.block,
          {
            flex,
            alignItems: hc ? "center" : "flex-start",
            justifyContent: vc ? "center" : "flex-start",
            width: !width ? "100%" : width,
            padding: pad,
            paddingHorizontal: hPad,
            paddingVertical: vPad,
            ...style,
          },
        ]}
      >
        {children}
      </View>
    </>
  );
};

Block.defaultProps = {
  flex: 0,
  pad: 0,
  hPad: 0,
  vPad: 0,
};
const styles = StyleSheet.create({
  block: { backgroundColor: "#fff" },
});
