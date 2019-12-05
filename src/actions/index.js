// importando ./actions -> sin especificar index, busca autmaticamente index y loc arga 
export const selectASong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song,
    };
};

