import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container.splashText}>Hockey Duel</Text>
      <StatusBar style="auto" />
      <View>
        <TouchableOpacity
          style={styles.button}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    splashText: {
      fontFamily: "Copperplate",
      fontSize: 35,
      color: 'white',
      padding: 20,
      marginTop: 20
    }

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginTop: 50,
    backgroundColor: 'white',
    color: 'white',
  },
});
