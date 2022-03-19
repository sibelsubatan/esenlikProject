import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class MyButton extends Component {
  openHome = (navigation, userName, passWord) => {
    //navigation.navigate('Home');
    console.log('wöansbdöfwemv');
    alert(userName + '---' + passWord);
  };
  render() {
    const {text, borderRadius, marginTop, navigation, onPresss} = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, {borderRadius, marginTop}]}
        onPress={onPresss}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    color: '#f1f1f1',
    backgroundColor: '#D4AF37',
  },
  text: {
    fontSize: 18,
    lineHeight: 23,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
