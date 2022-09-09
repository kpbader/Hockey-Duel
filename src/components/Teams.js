import ModalDropdown from 'react-native-modal-dropdown';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


// Retrieve stats from team
function getStats() {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8143de9d6msh6d1195065a85dbfp18ac06jsn532055b2fc85',
		'X-RapidAPI-Host': 'nhl-stats-and-live-data.p.rapidapi.com'
	}
};

fetch('https://nhl-stats-and-live-data.p.rapidapi.com/teams/28/stats', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

};    

const Teams = () => {
    return (
        <>
        <ModalDropdown 
            style={{ marginTop: 25}}
            textStyle={{fontSize: 25, fontFamily: 'Copperplate', padding: 20}}
            dropdownStyle={{width:300}}
            dropdownTextStyle={{fontSize: 20, fontFamily: 'Copperplate'}}
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
                    
        </ModalDropdown>

        <ModalDropdown 
            style={{ marginTop: 50}}
            textStyle={{fontSize: 25, fontFamily: 'Copperplate', padding: 20}}
            dropdownStyle={{width:300}}
            dropdownTextStyle={{fontSize: 20, fontFamily: 'Copperplate'}}
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
                    
        </ModalDropdown>       

        <TouchableOpacity>
            <Text style={styles.button} onPress={getStats}>Compare</Text>
        </TouchableOpacity>

        <Text></Text>
        </>
        
    )
};

const styles = StyleSheet.create({
  button: {
    fontFamily: 'Copperplate', 
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 50,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 7,
    width: '40%',
  }
})

export default Teams;