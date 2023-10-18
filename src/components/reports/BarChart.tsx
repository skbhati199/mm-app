import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [0, 10, 200, 300, 400, 500, 600, ],
    },
  ],
};

const chartConfig = {
    
  color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default is 1
  barPercentage: 0.5, // Adjust the width of the bars
  useShadowColorFromDataset: false, // Set to true to use shadow color from dataset
  decimalPlaces: 0, // Display integers only
  propsForLabels: {
    fontSize: 10,
  },
  propsForDots: {
    r: "3",
  },
  yAxisLabel: "€", // Add this line to specify the Y-axis label
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};

const BarChartReport = () => {
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={350}
        height={300}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    backgroundColor: '#ffffff',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BarChartReport;
