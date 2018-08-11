import React, { Component } from 'react';
import { StyleSheet, Text, Image, ImageBackground,View, TouchableOpacity,TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, AppRegistry, Alert, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.topBackground}>
      <ImageBackground source={require('./assets/gameScreenTop.png')} style={{width: '100%', height: 300, resizeMode: Image.resizeMode.maxWidth, flexDirection: 'row', alignContent: 'center', justifyContent:'center'}}>
        {/* <Text>Inside</Text> */}
          <Image source={require('./assets/gameBtn.png')} style={{padding: 10, paddingRight: 10,paddingTop: 150, flex: 1,resizeMode: Image.resizeMode.contain, width: 125, alignContent: 'space-between', justifyContent: 'flex-start', flexDirection: 'row'}}/>
          <Image source={require('./assets/gameBtn.png')} style={{padding: 10, paddingLeft: 20,paddingTop: 150,flex: 1,resizeMode: Image.resizeMode.contain, width: 125, alignContent: 'space-between', justifyContent: 'flex-end', flexDirection: 'row'}} />
          
      </ImageBackground>
      {/* <Image source={require('./assets/gameScreenTop.png')} /> */}
      </View>
      {/* <Image source={require('./assets/gameBtn.png')} /> */}
      {/* <Image source={require('./assets/game-screen-top.PNG')} />; */}
      {/* <Image source={require('assets/game-screen-top.png')} />; */}
        {/* <View style={styles.gameScoreContainer}> */}
        {/* <TouchableOpacity style={styles.gameScoreContainer} */}
          {/* onPress={() => { */}
            {/* Alert.alert('You tapped the button!'); */}
          {/* }}> */}
          {/* <View style={styles.gameScoreContainer}> */}
        {/* <Image  source={require('./assets/gameBtn.png')} /> */}
        {/* </TouchableOpacity> */}
        {/* </View> */}
        {/* <View style={styles.gameScoreContainer}> */}
        {/* <Image source={require('./assets/holeMask.png')} /> */}
        {/* </TouchableOpacity> */}
        
        {/* <ImageBackground source={require('./assets/gameBtn.png')} style={{width: 150, height: 50, resizeMode: Image.resizeMode.contain}}>
        <Text>Inside</Text>
      </ImageBackground> */}
      {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BF9C',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  topBackground: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  gameScoreContainer: {
    flex: 1,
    backgroundColor: '#C9BF9C',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  gameTimeContainer: {
    flex: 1,
    backgroundColor: '#C9BF9C',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  button: {
    padding: 10, 
    marginBottom: 20
    // shadowColor: '#303838',
    // shadowOffset: {width: 0, height: 5 },
    // shadowRadius: 10,
    // shadowOpacity: 0.35
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
