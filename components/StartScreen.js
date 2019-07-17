import React, {Component} from 'react';
import {Platform, Switch, Text, View, TextInput, Image, Button, Alert } from 'react-native';
//import ToggleSwitch from 'toggle-switch-react-native'
photo = './tang4'
import styles from './Styles/StylesStartScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class StartScreen extends Component {
constructor(props) {
  super(props)
  this.state = {username: 'Enter Your Username'}
}

  render() {
    return (
      <View style={styles.container}>
        <View style = {{flex:0.75, justifyContent: 'center', alignItems: 'center',}}>
          <Text style={styles.welcome}>Tangerine</Text>
        </View>

        <View style = {{flex:1.25}}>
          <Text style = {styles.description}>Username or Client/Card Number</Text>
          <TextInput style = {styles.input}> {this.state.username}</TextInput>
          <View style = {{marginLeft:20, flex: 0.25, alignItems:'flex-start'}}>
          <Switch
            color = 'grey'
            //size='large'
          />
          </View>
        </View>


        <View style = {styles.accTypeContainer}>
        <Text style = {styles.account} >
          Personal
          </Text>
          <Text style = {styles.account} >
          Business
          </Text>
        </View>

        <View style = {{flex:1.25, justifyContent: 'center', alignItems: 'center'}}>
          <Image style = {{width: 220, height: 65}} source = {require('./tang4.png')}/>
          <Text style = {{color: 'white', marginLeft: 5}}>The official Bank of 2019 NBA Champions and thier fans</Text>
        </View>

        <View style = {{flex:0.5,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  margin: 10}}>

          <Text style = {{color: 'black', fontWeight: 'bold',}}> 
          Forgot your login?
          </Text>
          <Text style = {{color: 'white'}}>
          1800-826-4374
          </Text>
        </View>

        <View style = {{flex:0.75, borderWidth:1,flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', }}>
          <Text style = {{color: 'orange', fontWeight: 'bold', margin: 10}}>Feedback</Text>
          <Button 
            onPress = {() => this.props.navigation.navigate('Details')}
            color= 'orange'
            fontWeight= 'bold' 
            title = 'Log Me In' 
          />
        </View>
      </View>
    );
  }
}

