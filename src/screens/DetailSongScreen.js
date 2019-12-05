import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const DetailSongScreen = ({ selectedSong }) => {
    
    return selectedSong ? (
            <View>
                <Text style={styles.text}>Name: { selectedSong.title }</Text>
                <Text style={styles.text}>Duration: { selectedSong.duration }</Text>

            </View> ) : ( <Text style={styles.error}>Came back and select a Song to watch details!</Text> );
   
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 19,
        fontWeight: 'bold'
    },
    error: {
        marginLeft: 15,
        marginTop: 30,
        fontSize: 20,
        color: 'brown',
        fontWeight: 'bold',
        textAlign: 'center'

        
    }
});

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(DetailSongScreen);