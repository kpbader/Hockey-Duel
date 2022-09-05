import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Nav = () => {
    return (
        <View style={styles.navContainer}>
            <Text style={styles.navTitle}>Hockey Duel</Text>
        <TouchableOpacity>
            <Text style={styles.hamburgerMenu}>☰</Text>
        </TouchableOpacity>
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
        justifyContent: 'space-between',
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

export default Nav;