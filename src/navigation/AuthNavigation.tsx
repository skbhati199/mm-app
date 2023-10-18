import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import MainTabNavigation from "./MainTabNavigation";
import OnboardingPage from "../screens/onboarding/OnboardingPage";
import SplashPage from "../screens/splash/SplashPage";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MainTabNavigation"
    >
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;