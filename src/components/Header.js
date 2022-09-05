import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Nav from './Nav';


const Header = () => {
    return (
        <View style={styles.navContainer}>
            <Text style={styles.navTitle}>Hockey Duel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        flex: .1,
        flexDirection: 'row',
        backgroundColor: 'black',
        marginTop: 50,
        paddingTop: 30,
        justifyContent: 'center',
    },
    navTitle: {
        fontSize: 35,
        fontFamily: 'Copperplate',
        color: 'white',
        // textAlign: 'left'
    },
    hamburgerMenu: {
        // textAlign: 'right',
        fontSize: 45,
        color: 'white'
    }
});

export default Header;