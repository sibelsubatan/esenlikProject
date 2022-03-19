import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {HamburgerIcon} from '../assets/Icons';
import {ww} from '../helpers/responsive';
import {MainOrange} from "../helpers/colors";

const HamburgerHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <HamburgerIcon color="#fff" />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View />
    </View>
  );
};

export default HamburgerHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainOrange,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:"center"
  },
  iconContainer: {
   // position:"absolute",
    width: ww(0.15),
    height: ww(0.15),
    alignItems: 'flex-start',
    justifyContent: 'center',
    left: ww(0.055),
  },
  title: {
    width: ww(0.8),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
    height: ww(0.15),
  },
  titleText: {
    color: '#fff',
    fontSize: ww(0.04),
  },
});
