import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface MoneyCardProps {
    nameCard: string,
    color:string,
    amount:string,
}

export default function MoneyCard({nameCard,color, amount}: MoneyCardProps) {
  return (
    <View className={`${color} p-4 flex flex-col shadow-sm rounded-sm mx-4 mt-8`}>
      <Text>{nameCard}</Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-xl font-bold text-black">{amount}</Text>
        <Ionicons size={20} name="pulse-sharp" />
      </View>
    </View>
  );
}
