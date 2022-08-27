import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container.splashText}>Hockey Duel</Text>
      <StatusBar style="auto" />
      <Button style={styles.button}
        // onPress={onPressLearnMore}
        title="Enter"
        color="#fff"
        height="80%"
        accessibilityLabel="Learn more about this purple button"
      />
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
      marginTop: 50
     }
  
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});
