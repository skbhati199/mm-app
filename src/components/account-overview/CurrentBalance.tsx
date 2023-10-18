import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function CurrentBalance() {
  return (
    <View className="flex flex-col  bg-white rounded-xl  shadow-sm mx-4 mt-4">
      <View className="p-3">
        <Text className="text-lg">Current Balance</Text>
        <Text className="text-2xl font-extrabold mt-2">$12567.89</Text>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#2F44FC", "#F830B4"]}
        className="h-24 p-4 rounded-b-xl"
      >
        <Text className="text-white text-xl font-semibold">3452 1235 7894 1678</Text>
        <Text className="text-white text-lg font-semibold">05/2025</Text>
      </LinearGradient>
      
    </View>
  );
}
