import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TransferAvator = ({ firstName, lastName, gradientColors }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
      >
        <View style={styles.avatar}>
          <Text style={styles.initials}>
            {firstName[0]}
            {lastName[0]}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  gradient: {
    flex: 1,
    borderRadius: 50,
  },
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: 'white',
    fontSize: 16,
  },
});

export default TransferAvator;
