
import React, {Component} from 'react'
import { ActivityIndicator, View, FlatList } from 'react-native'

export default class data extends Component {
  constructor (props) {
    super(props)
    this.state= {isloading: true}
  }
  componentDidMount () {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response)=>response.json())
    .then((responseJson) => {
      this.setState({
        isloading: false,
        dataSource: responseJson.movies
      }, function() {

      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    if(this.state.isloading) {
      return(
        <View style = {{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
        data = {this.state.dataSource}
        renderItem = {({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
        keyExtractor = {({id}, index) => id}
        />
        
      </View>
    )
  }
}