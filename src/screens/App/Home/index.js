import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Messages from "./Messages";
import Feed from "./Feed";
import Notifications from "./Notifications";
import Search from "./Search";

import HomeIcon from "../../../../assets/icons/home.svg";
import MessageIcon from "../../../../assets/icons/message.svg";
import BellIcon from "../../../../assets/icons/bell.svg";
import SearchIcon from "../../../../assets/icons/search.svg";

import HomeOutlineIcon from "../../../../assets/icons/home-outline.svg";
import MessageOutlineIcon from "../../../../assets/icons/message-outline.svg";
import BellOutlineIcon from "../../../../assets/icons/bell-outline.svg";
import SearchOutlineIcon from "../../../../assets/icons/search-outline.svg";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Feed") {
          return focused ? (
            <HomeIcon fill={color} height={size} width={size} />
          ) : (
            <HomeOutlineIcon fill={"#657786"} height={size} width={size} />
          );
        } else if (route.name === "Search") {
          return focused ? (
            <SearchIcon fill={color} height={size} width={size} />
          ) : (
            <SearchOutlineIcon fill={"#657786"} height={size} width={size} />
          );
        } else if (route.name === "Notifications") {
          return focused ? (
            <BellIcon fill={color} height={size} width={size} />
          ) : (
            <BellOutlineIcon fill={"#657786"} height={size} width={size} />
          );
        } else if (route.name === "Messages") {
          return focused ? (
            <MessageIcon fill={color} height={size} width={size} />
          ) : (
            <MessageOutlineIcon fill={"#657786"} height={size} width={size} />
          );
        }
      },
    })}
    tabBarOptions={{
      tabStyle: { elevation: 0 },
      style: { elevation: 0, backgroundColor: "#FFF" },
      showLabel: false,
      activeTintColor: "#1DA1F2",
      inactiveTintColor: "#657786",
    }}
  >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Messages" component={Messages} />
  </Tab.Navigator>
);
