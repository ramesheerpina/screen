import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
  container: {
    flex: 5,
    backgroundColor: 'grey'
  },
  heading : {
    textAlign: 'center',
    fontFamily: 'notoserif',
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#F57C00',
    textAlign: 'center'
  },
  insightsContainer: {
    fontSize: 16,
    paddingLeft: 10, 
    paddingBottom: 10,
    backgroundColor: 'white', 
    fontWeight: 'bold'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'white',
  },
  cheqContainer : {
    flex: 1,
    backgroundColor: '#F57C00',
    textAlign: 'center'
  },
  savContainer : {
    flex: 1,
    backgroundColor: 'white'
  },
  invContainer : {
    //flex: 1,
    backgroundColor: '#F57C00'
  }
})