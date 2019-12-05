/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";

import ListSongScreen from './src/screens/ListSongScreen';
import DetailSongScreen from './src/screens/DetailSongScreen';
import { Provider } from 'react-redux'; // provider es el werapper de nuestra app, tiene el estado, las acciones(creadores) y los reducers
import { createStore } from 'redux'; // va a crear el store en base a los reducers y pasarlo al provider
import reducers from './src/reducers'; // importamos todos nuestros reducers

const navigator = createStackNavigator({
  ListSong: ListSongScreen,
  Detail: {
    screen: DetailSongScreen,
    navigationOptions: {
      title: 'Details',
    }
  }},  {
  initialRouteName: "ListSong",
});  

 const App = createAppContainer(navigator); 
 
 export default () => {
   return(
     <Provider store={createStore(reducers)}>
      <App/>
     </Provider>

   )
 }


