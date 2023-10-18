import { View, Text, ScrollView } from "react-native";
import React from "react";
import PaymentModeCardIcon, {
  PaymentModeCardIconProps,
} from "./PaymentModeCardIcon";
import { ImageProps } from "react-native-svg";

export default function PaymentMode({ src }: PaymentModeCardIconProps) {
  return (
    <View className="bg-white shadow-sm  ml-2 w-20 h-20 rounded-xl justify-center items-center">
      <PaymentModeCardIcon src={src} />
    </View>
  );
}
