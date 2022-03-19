import React, { Component } from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from "react-native-elements";

export default class MyBackButton extends Component {
  render() {
    return (



            <Icon

                name='chevron-circle-left'
                type='font-awesome-5'
                color='#E3BA6A'
                size={30}


            />


    );
  }
}

const styles = StyleSheet.create({
    headerBackButton:{

    },
    backButton: {



    },
});
