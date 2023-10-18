import { View, Text } from "react-native";
import React from "react";

export default function TransactionItem() {
  return (
    <View className="flex flex-col  bg-white rounded-xl  shadow-sm mx-4 p-4 mt-2">
      <Text className="text-black text-lg font-bold">
        3452 1235 7894 1678
      </Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-[#858585] text-md font-normal">Tue 12.05.2021</Text>
        <Text className="text-black text-xl font-bold">$29.90</Text>
      </View>
    </View>
  );
}
