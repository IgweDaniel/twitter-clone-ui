import React from "react";
import { StyleSheet, TouchableOpacity, StatusBar, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Block, Paragraph } from "./shared";
import AppLogo from "../../assets/icons/logo.svg";
import { PRIMARY_COLOR } from "../utils/constants";

const HEADER_HEIGHT = 60;
const ICON_HEIGHT = 25;

export const AuthHeader = ({ previous, navigation }) => (
  <>
    <StatusBar />
    <Block style={{ ...styles.header }}>
      {previous && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.headerAction}
        >
          <Feather name="arrow-left" size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      )}
      <Block flex={1} vc hc>
        <View style={{ marginLeft: previous ? "-15%" : 0 }}>
          <AppLogo
            fill={PRIMARY_COLOR}
            height={ICON_HEIGHT}
            width={ICON_HEIGHT}
          />
        </View>
      </Block>
    </Block>
  </>
);

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
  },

  headerAction: {
    alignItems: "center",
    justifyContent: "center",
    flexBasis: 50,
    width: 50,
  },
});
