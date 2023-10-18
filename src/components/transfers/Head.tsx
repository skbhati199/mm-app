import { View, Text } from "react-native";
import React from "react";
import AvatarIcon from "../account-overview/user/AvatorIcon";
import { Ionicons } from "@expo/vector-icons";

export default function Head({headeName, isAdd = false}: {headeName:string, isAdd?: boolean                         }) {
  return (
    <View className="flex flex-row justify-between items-center mx-4 mt-2">
      <AvatarIcon className="w-10 h-10" />
      <Text className="text-xl font-bold">{headeName}</Text>
      {isAdd ? <Ionicons name="add"  size={30}/> : <View className="w-10 h-10"></View>}
    </View>
  );
}
