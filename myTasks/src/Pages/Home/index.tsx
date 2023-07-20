import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView,Platform, Text, View, TextInput } from 'react-native';
import React from 'react';

export const  Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput style={styles.input}/>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    
      flex: 1,
      backgroundColor: "#121214",
  },
  container: {
    flex: 1,
    backgroundColor: "#121214",
    paddingHorizontal: 20,
    paddingVertical: 50
    
  },
  title:{
    color: "#f1f1f1",
    fontSize:24,
    fontWeight: "bold"  
  },
  input:{
    backgroundColor:"#29292e",
    color: "#f1f1f1",
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 :12,
    marginTop: 30,
    borderRadius: 7
  }
});
