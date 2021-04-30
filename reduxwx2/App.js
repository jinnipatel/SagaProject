/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import {createStore ,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './src/reducers';
import CreateSagaMiddleware from 'redux-saga'
import rootsaga from './src/saga/rootsaga'
import UserData from './src/Screen/UserData';
import CounterContainer from './src/Screen/CounterContainer';

const sagaMiddleware = CreateSagaMiddleware();

const store = createStore(allReducers,applyMiddleware(sagaMiddleware))
class App extends Component {
  render() {
    return (

      <Provider store={store}>
          <View style={styles.container}> 
           {/* <UserData/> */}
           <CounterContainer/>
          </View>
      </Provider>
     
   );
  }
};
sagaMiddleware.run(rootsaga)

const styles = StyleSheet.create({
 container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 }
});

export default App;
