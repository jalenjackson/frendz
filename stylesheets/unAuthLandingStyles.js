'use strict';

var React = require('react-native');

const styles = React.StyleSheet.create({
  mainBackground: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  wrapper: {
    height: '90%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
  },
  slide1HeaderText: {
    color: 'black',
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
  },
  slide1SubText: {
    color: 'black',
    marginTop: 10,
    fontSize: 17,
    fontWeight: '100'
  },
  slide1Image: {
    width: '100%',
    height: 250,
    marginTop: 41
  },  
  signUpButton: {
    width: 170,
    height: 40,
    backgroundColor: '#479A5F',
    borderRadius: 5,
    transform: [
      { translateY: 10 }
    ]
  },
  signUpButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 11
  },
  signInText: {
    fontWeight: 'bold',
    fontSize: 15,
    transform: [
      { translateY: 35 }
    ]
  },
  signInTextButton: {
    fontWeight: 'bold'
  }
})

module.exports = styles;