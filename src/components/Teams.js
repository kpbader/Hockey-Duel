import ModalDropdown from 'react-native-modal-dropdown';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Teams = () => {
    const [chosenTeamOne, setChosenTeamOne] = useState('');
    const [chosenTeamTwo, setChosenTeamTwo] = useState('');
    const [teamOneData, setTeamOneData] = useState([]);
    const [teamTwoData, setTeamTwoData] = useState([]);
    let teamIdOne;
    let teamIdTwo;

    useEffect(() => {

        switch (chosenTeamOne) {
            case 'Anaheim Ducks':
                teamIdOne = 24;
                break;
            case 'Arizona Coyotes':
                teamIdOne = 53;
                break;
            case 'Boston Bruins':
                teamIdOne = 6;
                break;
            case 'Buffalo Sabres':
                teamIdOne = 7;
                break;
            case 'Calgary Flames':
                teamIdOne = 20;
                break;
            case 'Carolina Hurricanes':
                teamIdOne = 12;
                break;
            case 'Chicago Blackhawks':
                teamIdOne = 16;
                break;
            case 'Colorado Avalanche':
                teamIdOne = 21;
                break;
            case 'Columbus Blue Jackets':
                teamIdOne = 29;
                break;
            case 'Dallas Stars':
                teamIdOne = 25;
                break;
            case 'Detroit Red Wings':
                teamIdOne = 17;
                break;
            case 'Edmonton Oilers':
                teamIdOne = 22;
                break;
            case 'Florida Panthers':
                teamIdOne = 13;
                break;
            case 'Los Angeles Kings':
                teamIdOne = 26;
                break;
            case 'Minnesota Wild':
                teamIdOne = 30;
                break;
            case 'Montreal Canadiens':
                teamIdOne = 8;
                break;
            case 'Nashville Predators':
                teamIdOne = 18;
                break;
            case 'New Jersey Devils':
                teamIdOne = 1;
                break;
            case 'New York Islanders':
                teamIdOne = 2;
                break;
            case 'New York Rangers':
                teamIdOne = 3;
                break;
            case 'Ottawa Senators':
                teamIdOne = 9;
                break;
            case 'Philadelphia Flyers':
                teamIdOne = 4;
                break;
            case 'Pittsburgh Penguins':
                teamIdOne = 5;
                break;
            case 'San Jose Sharks':
                teamIdOne = 28;
                break;
            case 'Seattle Kraken':
                // teamIdOne = ;
                break;
            case 'St. Louis Blues':
                teamIdOne = 19;
                break;
            case 'Tampa Bay Lightning':
                teamIdOne = 14;
                break;
            case 'Toronto Maple Leafs':
                teamIdOne = 10;
                break;
            case 'Vancouver Canucks':
                teamIdOne = 23;
                break;
            case 'Vegas Golden Knights':
                teamIdOne = 54;
                break;
            case 'Washington Capitals':
                teamIdOne = 15;
                break;
            case 'Winnipeg Jets':
                teamIdOne = 52;
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


    }, [chosenTeamOne]);

    useEffect(() => {


        switch (chosenTeamTwo) {
            case 'Anaheim Ducks':
                teamIdTwo = 24;
                break;
            case 'Arizona Coyotes':
                teamIdTwo = 53;
                break;
            case 'Boston Bruins':
                teamIdTwo = 6;
                break;
            case 'Buffalo Sabres':
                teamIdTwo = 7;
                break;
            case 'Calgary Flames':
                teamIdTwo = 20;
                break;
            case 'Carolina Hurricanes':
                teamIdTwo = 12;
                break;
            case 'Chicago Blackhawks':
                teamIdTwo = 16;
                break;
            case 'Colorado Avalanche':
                teamIdTwo = 21;
                break;
            case 'Columbus Blue Jackets':
                teamIdTwo = 29;
                break;
            case 'Dallas Stars':
                teamIdTwo = 25;
                break;
            case 'Detroit Red Wings':
                teamIdTwo = 17;
                break;
            case 'Edmonton Oilers':
                teamIdTwo = 22;
                break;
            case 'Florida Panthers':
                teamIdTwo = 13;
                break;
            case 'Los Angeles Kings':
                teamIdTwo = 26;
                break;
            case 'Minnesota Wild':
                teamIdTwo = 30;
                break;
            case 'Montreal Canadiens':
                teamIdTwo = 8;
                break;
            case 'Nashville Predators':
                teamIdTwo = 18;
                break;
            case 'New Jersey Devils':
                teamIdTwo = 1;
                break;
            case 'New York Islanders':
                teamIdTwo = 2;
                break;
            case 'New York Rangers':
                teamIdTwo = 3;
                break;
            case 'Ottawa Senators':
                teamIdTwo = 9;
                break;
            case 'Philadelphia Flyers':
                teamIdTwo = 4;
                break;
            case 'Pittsburgh Penguins':
                teamIdTwo = 5;
                break;
            case 'San Jose Sharks':
                teamIdTwo = 28;
                break;
            case 'Seattle Kraken':
                // teamIdTwo = ;
                break;
            case 'St. Louis Blues':
                teamIdTwo = 19;
                break;
            case 'Tampa Bay Lightning':
                teamIdTwo = 14;
                break;
            case 'Toronto Maple Leafs':
                teamIdTwo = 10;
                break;
            case 'Vancouver Canucks':
                teamIdTwo = 23;
                break;
            case 'Vegas Golden Knights':
                teamIdTwo = 54;
                break;
            case 'Washington Capitals':
                teamIdTwo = 15;
                break;
            case 'Winnipeg Jets':
                teamIdTwo = 52;
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

    // console.log(chosenTeamTwo);

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

            <View>
                {teamOneData?.map((team) => (<Text style={styles.h5}>Wins: {team.stat.wins}</Text>))}
                {teamOneData?.map((team) => (<Text style={styles.h5}>Points: {team.stat.pts}</Text>))}
                {teamOneData?.map((team) => (<Text style={styles.h5}>Goals Against Per Game: {team.stat.goalsAgainstPerGame}</Text>))}
            </View>

            <ModalDropdown
                style={{ marginTop: 50 }}
                textStyle={{ fontSize: 25, fontFamily: 'Copperplate', padding: 20 }}
                dropdownStyle={{ width: 300 }}
                dropdownTextStyle={{ fontSize: 20, fontFamily: 'Copperplate' }}
                onSelect={(idx, value) => setChosenTeamTwo(value)}
                defaultValue='choose team two'
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

            <View>
                {teamTwoData?.map((team) => (<Text>Wins: {team.stat.wins}</Text>))}
                {teamTwoData?.map((team) => (<Text>Points: {team.stat.pts}</Text>))}
                {teamTwoData?.map((team) => (<Text>Goals Against Per Game: {team.stat.goalsAgainstPerGame}</Text>))}
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
    },
    h1: {
        fontSize: 27,
        fontFamily: 'Copperplate',
        fontWeight: '400'
      },
      h2: {
        fontSize: 25,
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
        fontSize: 20,
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

export default Teams;