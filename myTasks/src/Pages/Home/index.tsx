import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const  Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    justifyContent:"center",
    alignItems: "center"
  },
  title:{
    color: "#f1f1f1"
  }
});
