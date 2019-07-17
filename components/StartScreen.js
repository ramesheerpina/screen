import React, {Component} from 'react';
import { Switch, Text, View, TextInput, Image, Button, Alert } from 'react-native';
//import ToggleSwitch from 'toggle-switch-react-native'
photo = './tang4'
import styles from './Styles/StylesStartScreen'






export default class StartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {username: ''}
    //this.handleChangeText = this.handleChangeText.bind(this)
    //this.buttonPressed = this.buttonPressed.bind(this)
  }
  handleChangeText(newText) {
    this.setState({
      username: newText
    })
  }
/*
  buttonPressed () {
    this.props.navigation.navigate('Details')
    console.log(this.handleChangeText)
  }
*/
  render() {
    return (
      <View style={styles.container}>
        <View style = {{flex:0.75, justifyContent: 'center', alignItems: 'center',}}>
          <Text style={styles.welcome}>Tangerine</Text>
        </View>

        <View style = {{flex:1.25}}>
          <Text style = {styles.description}>Username or Client/Card Number</Text>
          <TextInput style = {styles.input}
          defaultValue= {this.state.username}
          onChangeText ={username =>this.setState({username})}/>
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
            onPress = {() => 
              {if (this.state.username === 'ramesh') {
                this.props.navigation.navigate('Details')
              } else {
                Alert.alert(Alert, 'Please Enter a Username')
              }
              }}
            color= 'orange' 
            fontWeight= 'bold' 
            title = 'Log Me In' 
          />
        </View>
      </View>
    );
  }
}

