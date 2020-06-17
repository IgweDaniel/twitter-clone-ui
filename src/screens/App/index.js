import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent from "../../components/CustomDrawer";
import Home from "./Home";
import Profile from "./Profile";
import Bookmarks from "./Bookmarks";
import Tweet from "./Tweet";

const AppDrawer = createDrawerNavigator();

const Main = () => {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Profile" component={Profile} />
      <AppDrawer.Screen name="Bookmarks" component={Bookmarks} />
    </AppDrawer.Navigator>
  );
};
const AppStack = createStackNavigator();
export default () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Main">
      <AppStack.Screen name="Main" component={Main} />
      <AppDrawer.Screen name="Tweet" component={Tweet} />
    </AppStack.Navigator>
  );
};
