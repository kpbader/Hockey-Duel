import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Home() {
    return (
      <View style={styles.homeContainer}>
        <Text>Welcome to Hockey Duel!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    homeContainer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        margin: 20
    }
  })

  export default Home;