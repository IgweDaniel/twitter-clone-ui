import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { axios } from "../utils/axios";
import { connect } from "react-redux";
import RenderUser from "./RenderUser";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function UsersList({ users }) {
  return (
    <FlatList
      style={styles.usersList}
      data={users}
      renderItem={({ item }) => (
        <View style={styles.status}>
          <RenderUser user={item} />
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  usersList: {
    width: "100%",
  },
});
