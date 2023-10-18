import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <RootNavigation />
  );
}
