import { View, Text } from 'react-native'
import React from 'react'
import TransferAvator from './TransferAvator'

export default function TransferItemCard() {
  return (
    <View className="flex flex-row  bg-white rounded-xl  shadow-sm mx-4 p-4 mt-2">
      <TransferAvator firstName={'Sonu'} lastName={'Kumar'}  gradientColors={['#FBC2EB', '#A6C1EE']}/>
      <View className="flex flex-col justify-between items-start ml-2">
        <Text className="text-black text-lg font-bold">Evelyn Smith </Text>
        <Text className="text-[#858585] text-xs font-normal">AW BANK UNI 234-46589-000</Text>
      </View>
    </View>
  )
}