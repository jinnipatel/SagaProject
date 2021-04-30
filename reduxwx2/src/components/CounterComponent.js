// import React, { Component } from 'react'
// import { StyleSheet, View,Text, TouchableOpacity } from 'react-native'
// import {connect} from 'react-redux'

// class CounterApp extends Component {

//     render() {
//         return (
//        <View style={styles.container}>
//            <View style={styles.rowcontainer}>
//                <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
//                    <Text>Increase</Text>
//                </TouchableOpacity>
//                <Text>{this.props.counter}</Text>
//                <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
//                    <Text>Decrease</Text>
//                </TouchableOpacity>
//            </View>
//        </View>
//         )
//     }
// }

// function mapStateToProps(state){
//     return{
//         counter:state.counter
//     }
// }

// function mapDispatchToProps(dispatch){
//     return{
//         increaseCounter :() => dispatch({type:'INCREASE_COUNTER'}),
//         decreaseCounter :() => dispatch({type:'DECREASE_COUNTER'})
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     rowcontainer:{
//         flexDirection:'row',
//         justifyContent:'space-around',
//         width:200
//     }

// })

// export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)

import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

class CounterComponent extends Component {
     
  render() {
      let {counter} = this.props.counter
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            margin: 20,
            fontWeight: 'bold',
            color: 'forestgreen',
            fontSize: 20,
          }}>
          Redux Saga
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            // onPress={()=>this.props. increaseCounter()}
            onPress={()=>this.props.increaseCounter()}
            style={{
              backgroundColor: 'forestgreen',
              width: 100,
              padding: 20,
              borderRadius: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Increase
            </Text>
          </TouchableOpacity>
          <Text>counter:{counter}</Text>
          <TouchableOpacity
            // onPress={() =>this.props.decrementCounter()}
            onPress={()=>this.props.decrementCounter()}
            style={{
              backgroundColor: 'forestgreen',
              width: 100,
              padding: 20,
              borderRadius: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Decrease
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CounterComponent;
