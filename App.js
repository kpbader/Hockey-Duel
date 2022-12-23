import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import Teams from "./src/components/Teams";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { mdiHockeySticks } from '@mdi/js';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ tabBarIcon: () => (
             <MaterialCommunityIcons name="hockey-puck" size="30" />
          ) }} component={Home} />
      <Tab.Screen name="Teams" options={{ tabBarIcon: () => (
             <MaterialCommunityIcons name="hockey-sticks" size="30" />
          ) }} component={Teams} />
      <Tab.Screen name="Settings" options={{ tabBarIcon: () => (
             <MaterialCommunityIcons name="cog" size="30" />
          ) }} component={SettingsScreen} />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <MyTabs />
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Nav />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     fontFamily: 'Copperplate',
//     color: 'black'
//   }
// });
