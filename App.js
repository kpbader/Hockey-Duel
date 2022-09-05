import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from "./src/components/Nav";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Copperplate',
    color: 'black'
  }
});
