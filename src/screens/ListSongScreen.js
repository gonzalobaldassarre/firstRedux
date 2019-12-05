import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SongCard from '../components/SongCard';
import  { selectASong as sg } from '../actions';
import { connect } from 'react-redux';

const ListSongScreen = ({ navigation, sg, songs, selectedSong }) => {

    return(
        <View>
            <Text style={styles.title}>LIST SONGS SCREEN</Text>
            <FlatList
                data={songs}
                keyExtractor= { song => song.duration }
                renderItem= { ({ item }) => { return <SongCard id={ item.title } onSubmit={ () => sg(item) }/>}}
            />
            <TouchableOpacity onPress= {  () => navigation.navigate("Detail")  } >
                <View style={styles.container}>
                    <Text style={styles.text}>Go to details </Text>
                </View>
             </TouchableOpacity>
                     
            
        </View>
    )
}

ListSongScreen.navigationOptions = {
    header: null,
}


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color:'white',
        backgroundColor: 'black',
        textAlign: 'center',
        paddingVertical: 5
    },
    container: {
        marginTop:20, 
        backgroundColor:'brown', 
        borderRadius:15, 
        borderColor:'black', 
        borderWidth:1, 
        padding: 10, 
        marginHorizontal: 5
    },
    text: {
        alignSelf:'center', 
        fontWeight: 'bold',
        fontSize: 16
    },
});

const mapStateToProps = (state) => {
    console.log('state',state);
    return state;
}
// lo agrega a props -> podria pasar props y hacer props.songs, props.selectSong etc, pero me traigo lo q quiero y fue

export default connect(mapStateToProps, { sg })(ListSongScreen);