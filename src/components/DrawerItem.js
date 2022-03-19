import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Platform} from 'react-native';
import User from '../store/User';
import CampaignIcon from '../assets/Icons/CampaignIcon';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from 'react-navigation';
import {wh, ww} from '../helpers/responsive';
import {AppColor} from "../pages/styles";
import { HamburgerIcon, RightIcon } from "../assets/Icons";
import { DarkGrey } from "../helpers/colors";

const DrawerItem = ({onPress, categoryName,}) => {
  const theme = useTheme();
  return (
    <RectButton
      onPress={onPress}
      style={{borderRadius: ww(0.02)}}
      theme={theme}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: wh(0.01),
          borderBottomWidth:0.2,
          justifyContent:'space-between'
        }}>
        <Text
          style={{
            color: '#666',
            marginLeft: ww(0.025),
            fontSize: ww(0.038),
          }}>
          {categoryName}
        </Text>
        <View style={styles.iconBackground}>
          <RightIcon color={DarkGrey}/>
        </View>
      </TouchableOpacity>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  iconBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    padding: 15,
  },
});

export default DrawerItem;
