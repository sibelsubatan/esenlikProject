import React, { Component } from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';

export default class MyStatusBar extends Component {
    render() {
        const {backgroundColor}=this.props;
        return (
            <View style={[styles.statusBar, { backgroundColor }]}>
                <StatusBar translucent backgroundColor={backgroundColor} {...this.props} >

                </StatusBar>
            </View>
        );
    }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,

    },
});
