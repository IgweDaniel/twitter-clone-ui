import "react-native-gesture-handler";
import React from "react";

import { Provider } from "react-redux";
import { useFonts } from "@use-expo/font";
import store from "./src/store/createStore";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Application from "./src";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Med": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <Application />
      </NavigationContainer>
    </Provider>
  );
}
