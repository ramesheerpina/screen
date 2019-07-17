import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#F57C00'
  },
  welcome: {
    fontSize: 30,
    fontFamily: 'arial',
    color: 'white',
    fontWeight: 'bold',
  },
  accTypeContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',

  },
  account : { 
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    marginTop: 30,   
    marginRight: 15
  },
  description : {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    //position: 'absolute', //Here is the trick
    //top: 100 //Here is the trick
  },
  input : {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    margin: 15,
    marginTop: 10,
    borderColor: 'black',
    borderRadius: 10,
    paddingLeft: 5,
    //position: 'absolute', //Here is the trick
    //top: 140 //Here is the trick
  }
    
  //},
  /*instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
