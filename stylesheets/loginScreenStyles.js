'use strict';

var React = require('react-native');

const styles = React.StyleSheet.create({
  mainBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  imageHeader: {
    width: 200,
    height: 200,
    transform: [
      { translateY: 50 }
    ]
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgb(245,245,245)',
    marginTop: 85,
    paddingLeft: 20
  },
  textInput2: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgb(245,245,245)',
    marginTop: 15,
    paddingLeft: 20
  },
  loginButton: {
    width: 300,
    height: 40,
    backgroundColor: '#69B6F3',
    borderRadius: 5,
    transform: [
      { translateY: 15 }
    ]
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 11
  },
  noAccount: {
    marginTop: 55,
    color: '#ccc',
    fontSize: 16
  }
});

module.exports = styles;
