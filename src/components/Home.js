import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

function Home() {
  return (
    <ScrollView style={styles.homeContainer}>
      <Text style={styles.h1}>Welcome to Hockey Duel</Text>
      <Text style={styles.h2}>The app that quickly provides users with quick team and player statistics comparison</Text>
      <Text style={styles.h3}>How It Works</Text>
      <Text style={styles.p}>This app fetches data from the NHL Stats and Live Data API via RapidAPI. Simply select the appropriate tab from the options below, and then chose your teams or players to compare.</Text>
      <Text style={styles.h3}>What Stats Are Provided</Text>
      <Text style={styles.h4}>Teams:</Text>
      <FlatList
        data={[
          { key: 'Win/Draw/Loss Record' },
          { key: 'Goals' },
          { key: 'Goals Per Game' },
          { key: 'Save Percentage' },
          { key: 'Penalties In Minutes' }
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.bullets}>{`\u2022 ${item.key}`}</Text>
            </View>
          );
        }}
      />
      <Text style={{
        fontSize: 22,
        fontFamily: 'Copperplate',
        marginTop: 30,
        fontWeight: '400'
      }}>Players:</Text>
      <FlatList
        data={[
          { key: 'Goals' },
          { key: 'Assists' },
          { key: 'Save Percentage (Goaltenders)' },
          { key: 'Wins (Goaltenders' },
          { key: 'Plus/Minus' }
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.bullets}>{`\u2022 ${item.key}`}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    margin: 20
  },
  h1: {
    fontSize: 27,
    fontFamily: 'Copperplate',
    fontWeight: '400'
  },
  h2: {
    fontSize: 24,
    fontFamily: 'Copperplate',
    marginTop: 20,
    fontWeight: '300'
  },
  h3: {
    fontSize: 24,
    fontFamily: 'Copperplate',
    marginTop: 40,
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  h4: {
    fontSize: 22,
    fontFamily: 'Copperplate',
    marginTop: 10,
    fontWeight: '400'
  },
  p: {
    fontSize: 22,
    fontFamily: 'Copperplate',
    marginTop: 10,
    fontWeight: '300'
  },
  bullets: {
    fontSize: 20,
    fontFamily: 'Copperplate',
    marginTop: 10,
    fontWeight: '300'
  }
})

export default Home;