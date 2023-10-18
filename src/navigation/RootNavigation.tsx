import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthNavigation from "./AuthNavigation";
import { navigationRef } from "../../RootNavigation";

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} >
        <AuthNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;