import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Head from "../../components/transfers/Head";
import { Ionicons } from "@expo/vector-icons";
import PaymentMode from "../../components/transfers/PaymentMode";
import TransferDetials from "../../components/transfers/TransferDetials";

export default function TransferPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-[#F5F5F5] flex flex-col">
          <Head headeName="Transfer" isAdd={true} />
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex flex-row gap-2 mt-4 mx-4">
              <PaymentMode src={require("./../../../assets/img/paypal.png")} />
              <PaymentMode src={require("./../../../assets/img/stripe.png")} />
              <PaymentMode src={require("./../../../assets/img/k.png")} />
              <PaymentMode src={require("./../../../assets/img/n26.png")} />
            </View>
          </ScrollView>
          <TransferDetials />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
