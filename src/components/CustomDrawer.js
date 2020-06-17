import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { Paragraph, Heading, Avatar } from "./shared";
import { connect } from "react-redux";

import ProfileIcon from "../../assets/icons/profile.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";

export const DrawerContent = ({ user, navigation, ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.customDrawer}>
        <View style={[styles.avatar, styles.section]}>
          <Avatar uri={user.avatar} size={100} />
          <Paragraph bold style={{ marginTop: 10 }}>
            @{user.username}
          </Paragraph>
          <View style={styles.friendShipsInfo}>
            <Paragraph color="#657786">
              {user.followed_count} following
            </Paragraph>
            <Paragraph color="#657786">
              {user.followers_count} followers
            </Paragraph>
          </View>
        </View>

        <View style={styles.section}>
          <DrawerItem
            label="Profile"
            labelStyle={styles.label}
            icon={({ focused, color, size }) => (
              <ProfileIcon height={size} width={size} fill={color} />
            )}
            onPress={() => navigation.navigate("Profile")}
          />
          <DrawerItem
            label="Bookmarks"
            labelStyle={styles.label}
            icon={({ focused, color, size }) => (
              <BookmarkIcon height={size} width={size} fill={color} />
            )}
            onPress={() => navigation.navigate("Bookmarks")}
          />
        </View>
        <View>
          <DrawerItem
            label="Settings and Privacy"
            labelStyle={{ ...styles.label, marginLeft: 0 }}
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  };
};

export default connect(mapStateToProps)(DrawerContent);

const styles = StyleSheet.create({
  section: {
    paddingVertical: 25,
    borderBottomColor: "#AAB8C2",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    paddingHorizontal: 20,
  },
  friendShipsInfo: {
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: 200,
  },
  label: {
    marginLeft: -20,
    fontSize: 16,
  },
});
