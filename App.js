/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,  {Component} from 'react'
import {View, Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from './components/StartScreen'
import Accounts from './components/accounts'
import data from './components/data'

/* class App extends React.Component {
  render () {
    return (
      <View>
        <Text>
          HomeScreen
        </Text>
      </View>
    )
  }
}*/

const RootStack = createStackNavigator (
  {
  Home: {
    screen: StartScreen
    },
  Details: {
    screen: Accounts
    }, 
  },
  {
    initialRouteName: 'Home'
  }
)
const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render () {
    return <AppContainer/>
  }
}