import { View, Text, Image, ImageProps } from "react-native";
import React from "react";

export interface PaymentModeCardIconProps {
  src: ImageProps;
  className?: string;
}

export default function PaymentModeCardIcon({
  src,
  className,
}: PaymentModeCardIconProps) {
  return (
    <Image source={src} width={100} height={100} className={className} />
  );
}
