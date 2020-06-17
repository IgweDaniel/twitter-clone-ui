import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthHeader } from "../../components/AuthHeader";
import LoginScreen from "./Login";
import createAccount from "./createAccount";

const AuthStack = createStackNavigator();
export default () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <AuthStack.Screen name="Register" component={createAccount} />
      <AuthStack.Screen
        options={{
          header: ({ previous, navigation }) => {
            return <AuthHeader navigation={navigation} previous={previous} />;
          },
        }}
        name="Login"
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
};
