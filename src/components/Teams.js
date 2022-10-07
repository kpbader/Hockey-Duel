import ModalDropdown from 'react-native-modal-dropdown';
import React, { useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';




const Teams = () => {
    const [chosenTeamOne, setChosenTeamOne] = useState('');
    const [chosenTeamTwo, setChosenTeamTwo] = useState('');
    const [teamOneData, setTeamOneData] = useState([]);
    const [teamTwoData, setTeamTwoData] = useState([]);
    let teamIdOne;
    let teamIdTwo;

    useEffect(() => {

        switch (chosenTeamOne ) {
            case 'Anaheim Ducks':
                teamIdOne = 18;
                break;
            case 'Arizona Coyotes':
                teamIdOne = 53;
                break;
            case 'Boston Bruins':
                // teamIdOne = ;
                break;
            case 'Buffalo Sabres':
                // teamIdOne = ;
                break;
            case 'Calgary Flames':
                // teamIdOne = ;
                break;
            case 'Carolina Hurricanes':
                // teamIdOne = ;
                break;
            case 'Chicago Blackhawks':
                // teamIdOne = ;
                break;
            case 'Colorado Avalanche':
                // teamIdOne = ;
                break;
            case 'Columbus Blue Jackets':
                // teamIdOne = ;
                break;
            case 'Dallas Stars':
                // teamIdOne = ;
                break;
            case 'Detroit Red Wings':
                // teamIdOne = ;
                break;
            case 'Edmonton Oilers':
                // teamIdOne = ;
                break;
            case 'Florida Panthers':
                // teamIdOne = ;
                break;
            case 'Los Angeles Kings':
                // teamIdOne = ;
                break;
            case 'Minnesota Wild':
                // teamIdOne = ;
                break;
            case 'Montreal Canadiens':
                // teamIdOne = ;
                break;
            case 'Nashville Predators':
                // teamIdOne = ;
                break;
            case 'New Jersey Devils':
                // teamIdOne = ;
                break;
            case 'New York Islanders':
                // teamIdOne = ;
                break;
            case 'New York Rangers':
                // teamIdOne = ;
                break;
            case 'Ottawa Senators':
                // teamIdOne = ;
                break;
            case 'Philadelphia Flyers':
                // teamIdOne = ;
                break;
            case 'Pittsburgh Penguins':
                // teamIdOne = ;
                break;
            case 'San Jose Sharks':
                teamIdOne = 28;
                break;
            case 'Seattle Kraken':
                // teamIdOne = ;
                break;
            case 'St. Louis Blues':
                // teamIdOne = ;
                break;
            case 'Tampa Bay Lightning':
                // teamIdOne = ;
                break;
            case 'Toronto Maple Leafs':
                // teamIdOne = ;
                break;
            case 'Vancouver Canucks':
                // teamIdOne = ;
                break;
            case 'Vegas Golden Knights':
                // teamIdOne = ;
                break;
            case 'Washington Capitals':
                // teamIdOne = ;
                break;
            case 'Winnipeg Jets':
                // teamIdOne = ;
                break;
        }

       
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a8143de9d6msh6d1195065a85dbfp18ac06jsn532055b2fc85',
                'X-RapidAPI-Host': 'nhl-stats-and-live-data.p.rapidapi.com'
            }
        };

        fetch(`https://nhl-stats-and-live-data.p.rapidapi.com/teams/${teamIdOne}/stats`, options)
            .then(response => response.json())
            .then(response => setTeamOneData(response.stats[0].splits))
            .catch(err => console.error(err));


    }, [chosenTeamOne])

    useEffect(() => {
        

        switch (chosenTeamTwo ) {
            case 'Anaheim Ducks':
                teamIdTwo = 18;
                break;
            case 'Arizona Coyotes':
                teamIdTwo = 53;
                break;
            case 'Boston Bruins':
                // teamIdTwo = ;
                break;
            case 'Buffalo Sabres':
                // teamIdTwo = ;
                break;
            case 'Calgary Flames':
                // teamIdTwo = ;
                break;
            case 'Carolina Hurricanes':
                // teamIdTwo = ;
                break;
            case 'Chicago Blackhawks':
                // teamIdTwo = ;
                break;
            case 'Colorado Avalanche':
                // teamIdTwo = ;
                break;
            case 'Columbus Blue Jackets':
                // teamIdTwo = ;
                break;
            case 'Dallas Stars':
                // teamIdTwo = ;
                break;
            case 'Detroit Red Wings':
                // teamIdTwo = ;
                break;
            case 'Edmonton Oilers':
                // teamIdTwo = ;
                break;
            case 'Florida Panthers':
                // teamIdTwo = ;
                break;
            case 'Los Angeles Kings':
                // teamIdTwo = ;
                break;
            case 'Minnesota Wild':
                // teamIdTwo = ;
                break;
            case 'Montreal Canadiens':
                // teamIdTwo = ;
                break;
            case 'Nashville Predators':
                // teamIdTwo = ;
                break;
            case 'New Jersey Devils':
                // teamIdTwo = ;
                break;
            case 'New York Islanders':
                // teamIdTwo = ;
                break;
            case 'New York Rangers':
                // teamIdTwo = ;
                break;
            case 'Ottawa Senators':
                // teamIdTwo = ;
                break;
            case 'Philadelphia Flyers':
                // teamIdTwo = ;
                break;
            case 'Pittsburgh Penguins':
                // teamIdTwo = ;
                break;
            case 'San Jose Sharks':
                teamIdTwo = 28;
                break;
            case 'Seattle Kraken':
                // teamIdTwo = ;
                break;
            case 'St. Louis Blues':
                // teamIdTwo = ;
                break;
            case 'Tampa Bay Lightning':
                // teamIdTwo = ;
                break;
            case 'Toronto Maple Leafs':
                // teamIdTwo = ;
                break;
            case 'Vancouver Canucks':
                // teamIdTwo = ;
                break;
            case 'Vegas Golden Knights':
                // teamIdTwo = ;
                break;
            case 'Washington Capitals':
                // teamIdTwo = ;
                break;
            case 'Winnipeg Jets':
                // teamIdTwo = ;
                break;
        }

            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a8143de9d6msh6d1195065a85dbfp18ac06jsn532055b2fc85',
                'X-RapidAPI-Host': 'nhl-stats-and-live-data.p.rapidapi.com'
            }
        };

        fetch(`https://nhl-stats-and-live-data.p.rapidapi.com/teams/${teamIdTwo}/stats`, options)
            .then(response => response.json())
            .then(response => setTeamTwoData(response.stats[0].splits))
            .catch(err => console.error(err));


    }, [chosenTeamTwo])

   
    return (
        <>
            <ModalDropdown
                style={{ marginTop: 25 }}
                textStyle={{ fontSize: 25, fontFamily: 'Copperplate', padding: 20 }}
                dropdownStyle={{ width: 300 }}
                dropdownTextStyle={{ fontSize: 20, fontFamily: 'Copperplate' }}
                onSelect={(idx, value) => setChosenTeamOne(value)}
                defaultValue='choose team one'
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
                style={{ marginTop: 50 }}
                textStyle={{ fontSize: 25, fontFamily: 'Copperplate', padding: 20 }}
                dropdownStyle={{ width: 300 }}
                dropdownTextStyle={{ fontSize: 20, fontFamily: 'Copperplate' }}
                onSelect={(idx, value) => setChosenTeamTwo(value)}
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

            {/* <TouchableOpacity>
            <Text style={styles.button} onPress={getStats}>Compare</Text>
        </TouchableOpacity> */}
    <View>
{teamOneData?.map((team)=> (<Text>{team.stat.faceOffWinPercentage}</Text>))}
    </View>
    <View>
{teamTwoData?.map((team)=> (<Text>{team.stat.faceOffWinPercentage}</Text>))}
    </View>
            
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