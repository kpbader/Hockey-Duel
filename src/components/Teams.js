import ModalDropdown from 'react-native-modal-dropdown';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Teams = () => {
    return (
        <>
        <ModalDropdown 
            style={{ marginTop: 25}}
            dropdownStyle={{width:300}}
            dropdownTextStyle={{fontSize: 25, fontFamily: 'Copperplate'}}
            options={[
                'Anaheim Ducks',
                'Arizona Coyotes',
                'Boston Bruins',
                'Buffalo Sabres',
                'Calgary Flames',
                'Carolina Hurricanes',
                'Chicago Blackhawks',
                'Colorado Avalanche',
                'Columbus Blue Jackets',
                'Dallas Stars',
                'Detroit Red Wings',
                'Edmonton Oilers',
                'Florida Panthers',
                'Los Angeles Kings',
                'Minnesota Wild',
                'Montreal Canadiens',
                'Nashville Predators',
                'New Jersey Devils',
                'New York Islanders',
                'New York Rangers',
                'Ottawa Senators',
                'Philadelphia Flyers',
                'Pittsburgh Penguins',
                'San Jose Sharks',
                'Seattle Kraken',
                'St. Louis Blues',
                'Tampa Bay Lightning',
                'Toronto Maple Leafs',
                'Vancouver Canucks',
                'Vegas Golden Knights',
                'Washington Capitals',
                'Winnipeg Jets'
                ]}>
                    <Text style={{ fontSize: 30, fontFamily: 'Copperplate' }}>Select first team</Text>
        </ModalDropdown>

        <ModalDropdown 
            style={{ marginTop: 50}}
            dropdownStyle={{width:300}}
            dropdownTextStyle={{fontSize: 25, fontFamily: 'Copperplate'}}
            options={[
                'Anaheim Ducks',
                'Arizona Coyotes',
                'Boston Bruins',
                'Buffalo Sabres',
                'Calgary Flames',
                'Carolina Hurricanes',
                'Chicago Blackhawks',
                'Colorado Avalanche',
                'Columbus Blue Jackets',
                'Dallas Stars',
                'Detroit Red Wings',
                'Edmonton Oilers',
                'Florida Panthers',
                'Los Angeles Kings',
                'Minnesota Wild',
                'Montreal Canadiens',
                'Nashville Predators',
                'New Jersey Devils',
                'New York Islanders',
                'New York Rangers',
                'Ottawa Senators',
                'Philadelphia Flyers',
                'Pittsburgh Penguins',
                'San Jose Sharks',
                'Seattle Kraken',
                'St. Louis Blues',
                'Tampa Bay Lightning',
                'Toronto Maple Leafs',
                'Vancouver Canucks',
                'Vegas Golden Knights',
                'Washington Capitals',
                'Winnipeg Jets'
                ]}>
                    <Text style={{ fontSize: 30, fontFamily: 'Copperplate' }}>Select second team</Text>
        </ModalDropdown>       
        </>
        
    )
};

// const styles = StyleSheet.create({
  
// })

export default Teams;