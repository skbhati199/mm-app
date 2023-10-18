import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Head from '../../components/transfers/Head'
import MoneyCard from '../../components/reports/MoneyCard'
import BarChart from '../../components/reports/BarChart'
import BarChartReport from '../../components/reports/BarChart'

export default function ReportPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-[#F5F5F5] flex flex-col">
          <Head headeName="Reports" isAdd={false} />
          <View className='flex flex-row justify-between items-center'>
            <MoneyCard nameCard='Money In' color='bg-[#F8E192]' amount='+ $3,456.98' />
            <MoneyCard nameCard='Money Out' color='bg-[#B6E0F3]' amount='- $567.25' />
          </View>
          <BarChartReport />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}