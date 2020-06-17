import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Avatar, Paragraph, Heading, Block } from "./shared";
import { useNavigation } from "@react-navigation/native";

export const RenderRetweeted = ({ status }) => {
  const navigation = useNavigation();
  return (
    <Block style={styles.status}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.push("Tweet", { id: status.id })}
      >
        <Block hPad={10}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Avatar uri={status.user.avatar} size={25} />
            </View>
            <Heading
              variant="h5"
              style={{ textTransform: "capitalize", margin: 5 }}
            >
              {status.user.username}
            </Heading>
          </View>
          {status.text && <Paragraph>{status.text}</Paragraph>}
        </Block>
        {status.media &&
          status.media.map((url, i) => (
            <Block style={{ flexDirection: "row" }}>
              <Image
                key={i}
                style={{ minHeight: 150, flex: 1 }}
                height={150}
                source={{
                  uri: url,
                }}
              />
            </Block>
          ))}
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  status: {
    borderColor: "#E1E8ED",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 20,
    width: "100%",
  },
  header: {
    flexDirection: "row",
  },
  avatar: {
    justifyContent: "center",
  },

  content: {
    backgroundColor: "red",
    width: "100%",
    paddingHorizontal: 10,
  },
  media: {
    marginTop: 10,
    borderRadius: 0,
    marginTop: 10,
  },
});
