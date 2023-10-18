import { View, Text } from 'react-native'
import React from 'react'
import TransferItemCard from './TransferItemCard'

export default function TransferDetials() {
  return (
    <View className='mt-4'>
      {Array.from({ length: 10 }, (_, index) => (
              <TransferItemCard key={index} />
            ))}
    </View>
  )
}