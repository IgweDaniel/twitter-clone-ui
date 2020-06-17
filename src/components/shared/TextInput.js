import React, { useState } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

export const TextInput = ({ style, ...props }) => {
  const [isfocused, setIsfocused] = useState(false);

  return (
    <NativeTextInput
      {...props}
      style={[
        styles.customTextInput,
        {
          borderBottomColor: isfocused ? "#1DA1F2" : "#E1E8ED",
          ...style,
        },
      ]}
      onFocus={() => setIsfocused(true)}
      onBlur={() => setIsfocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  customTextInput: {
    height: 50,
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 2,
    width: "100%",
  },
});
