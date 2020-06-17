import React from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Block } from "./Block";
import { Avatar } from "./Avatar";
import { Heading } from "./Typography";
import { connect } from "react-redux";
import { merge } from "../../utils/helpers";

const HeaderComponent = ({
  route,
  user,
  title,
  isHome,
  absolute,
  navigation,
}) => {
  const headerStyle = absolute
    ? merge(styles.header, styles.floatingHeader)
    : merge(styles.header, styles.staticHeader);

  return (
    <>
      <StatusBar />
      <Block style={headerStyle}>
        {isHome ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerAction}
          >
            <Avatar uri={user.avatar} size={40} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={[
              styles.headerActionButton,
              {
                backgroundColor: absolute
                  ? "rgba(29, 161, 242,0.6)"
                  : "transparent",
              },
            ]}
          >
            <Feather
              name="arrow-left"
              size={24}
              color={absolute ? "#FFF" : "#1DA1F2"}
            />
          </TouchableOpacity>
        )}
        <Block>
          {title ? (
            <Heading style={styles.titleText} variant="h4">
              {title}
            </Heading>
          ) : (
            <Heading style={styles.titleText} variant="h4">
              {route}
            </Heading>
          )}
        </Block>
      </Block>
    </>
  );
};

HeaderComponent.defaultProps = {
  float: false,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export const Header = connect(mapStateToProps)(HeaderComponent);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    height: 60,
    paddingHorizontal: 5,
  },
  staticHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E8ED",
    backgroundColor: "#fff",
  },
  floatingHeader: {
    backgroundColor: "transparent",
    position: "absolute",
    flexDirection: "row",
    top: 0,
    width: "100%",
    zIndex: 10,
    borderColor: "transparent",
    borderWidth: 0,
  },
  headerActionButton: {
    alignItems: "center",
    justifyContent: "center",
    flexBasis: 45,
    width: 45,
    height: 45,
    borderRadius: 45,
    marginHorizontal: 5,
  },
  titleText: {
    textTransform: "capitalize",
    marginHorizontal: 5,
  },
});
