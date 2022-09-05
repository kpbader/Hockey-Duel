import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Home() {
    return (
      <View style={styles.homeContainer}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    homeContainer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
  })

  export default Home;