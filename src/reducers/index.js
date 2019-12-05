import { combineReducers } from 'redux';

const songsReducer = () => {
    //switch(action.type){
       //default:
        return [
            { title: 'Bee Gees - Stayin Alive', duration:'4:01'},
            { title: 'Stevie Wonder - Superstition', duration:'3:01'},
            { title: 'Bill Withers - Lean On Me', duration:'2:01'},
            { title: 'Bill Withers - Aint No Sunshine', duration:'1:01'},
            { title: 'Fleetwood Mac - Go Your Own Way', duration:'8:01'},
            { title: 'Hues Corporation - Rock the Boat', duration:'7:01'}
        ]
    };
    //};
//};

const selectedSongReducer = ( selectedSong=null , action) => {
    switch(action.type) {
        case 'SONG_SELECTED':
            console.log('reducer',action.payload);
            return action.payload;
        default:
            return selectedSong;
    };
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});


