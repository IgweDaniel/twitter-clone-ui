import React from "react";
import { StyleSheet, Image } from "react-native";

export const Avatar = ({ uri, size }) => {
  return (
    <Image
      style={styles.avatar}
      height={size}
      width={size}
      source={{ uri: uri }}
    />
  );
};

Avatar.defaultProps = {
  size: 100,
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    resizeMode: "cover",
  },
});
