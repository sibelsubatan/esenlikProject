import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class MyTextInput extends Component {
    state = {
        text: ''
    };

    render() {
    return (
      <View>
          <TextInput
              {...this.props}
              placeholderTextColor="#ddd"
              style={styles.input}
              value={this.props.text}
              onChangeText={text => this.setState({text})}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        height: 42,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#A9A5A5',
        color: '#999',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
    }
});
