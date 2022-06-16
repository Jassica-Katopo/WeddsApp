import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './reducers/store'
//import { createDrawerNavigator } from '@react-navigation/drawer';

function App(){
  return(
    <Provider store={store}>
      <NavigationContainer>
          <Router />
          <FlashMessage position="top" />
        </NavigationContainer>
    </Provider>
  )
}
/*
const App = () => {
    return (
        <NavigationContainer>
          <Router />
          <FlashMessage position="top" />
        </NavigationContainer>
    );
};
*/
export default App;
