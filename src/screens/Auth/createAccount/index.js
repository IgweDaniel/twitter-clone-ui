import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DetailsForm } from "./DetailsForm";
import { CodeForm } from "./CodeForm";
import { Landing } from "./Landing";
import { AuthHeader } from "../../../components/AuthHeader";

const SignUpStack = createStackNavigator();

export default () => {
  return (
    <SignUpStack.Navigator
      screenOptions={{
        header: ({ previous, navigation }) => {
          return <AuthHeader navigation={navigation} previous={previous} />;
        },
      }}
    >
      <SignUpStack.Screen name="Landing" component={Landing} />
      <SignUpStack.Screen name="DetailsForm" component={DetailsForm} />
      <SignUpStack.Screen name="VerifyCode" component={CodeForm} />
    </SignUpStack.Navigator>
  );
};
