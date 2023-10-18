import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import ImageBg from "../../components/account-overview/bg/ImageBg";
import UserCardDetails from "../../components/account-overview/user/UserCardDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentBalance from "../../components/account-overview/CurrentBalance";
import SubHead from "../../components/SubHead";
import TransactionItem from "../../components/transactions/TransactionItem";

export default function AccountOverViewPage() {
  return (
    <SafeAreaView>
      <View className="relative">
        <View className="flex-1">
          <ImageBg />
        </View>
        <ScrollView>
          <View className="flex-1 pb-2">
            <View className="h-200 w-200">
              <UserCardDetails />
            </View>
            <CurrentBalance />
            <SubHead />
            {Array.from({ length: 10 }, (_, index) => (
              <TransactionItem key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
