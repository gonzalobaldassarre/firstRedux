import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'; 

const SongCard = ({ onSubmit, id, selectedSong }) => {
    console.log(selectedSong)

    if(!selectedSong){
        return (
            <TouchableOpacity onPress= { onSubmit } >
                <View style={styles.container}>
                    <Text style={styles.text}>Song: {id} </Text>
                </View>
            </TouchableOpacity>   
        );
    };

    console.log(id, selectedSong.title);

    return selectedSong.title == id ? (
            <TouchableOpacity onPress= { onSubmit } >
                <View style={styles.container2}>
                    <Text style={styles.text}>Song: {id} </Text>
                </View>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress= { onSubmit } >
                <View style={styles.container}>
                    <Text style={styles.text}>Song: {id} </Text>
                </View>
            </TouchableOpacity>    
        );
};

    


SongCard.navigationOptions = {
    header: {
        title: "Details",
    },
}

 const styles = StyleSheet.create({
    container: {
        marginTop:15, 
        backgroundColor:'grey', 
        borderRadius:15, 
        borderColor:'black', 
        borderWidth:1, 
        padding: 10, 
        marginHorizontal: 5
    },
    container2: {
        marginTop:15, 
        backgroundColor:'green', 
        borderRadius:15, 
        borderColor:'black', 
        borderWidth:1, 
        padding: 10, 
        marginHorizontal: 5
    },
    text: {
        alignSelf:'center', 
        fontSize: 15
    },
 });

 const mapStateToProps = (state) => {
    return state;
}

 export default connect(mapStateToProps)(SongCard);

