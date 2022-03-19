import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CompanyIcon, FavoriteIcon, HomeIcon, ProfileIcon, SearchIcon } from "../assets/Icons";
import { wh, ww } from "../helpers";
import { White, AppColor2, orange, DarkGrey } from "../helpers/colors";
import { Icon } from "react-native-elements";


const BottomTabNavigation = ({
                               onPressHome,
                               onPressSearch,
                               onPressBasket,
                               onPressCampaigns,
                               onPressAccount,
                               screen,
                             }) => {
  return (
    <View style={styles.screen}>
      <View
        style={styles.homeScreenView}>

        <TouchableOpacity style={styles.homeScreen} onPress={onPressHome}>
          <HomeIcon size={ww(.06)} color={screen === "Home" ? White : White} />
          <Text style={{ ...styles.text, color: screen === "Home" ? White : White }}>Anasayfa</Text>
        </TouchableOpacity>
      </View>
      <View
        style={styles.homeScreenView}>

        <TouchableOpacity style={styles.homeScreen} onPress={onPressSearch}>
          <SearchIcon size={ww(.06)} color={screen === "search" ? White : White} />
          <Text style={{ ...styles.text, color: screen === "search" ? White : White }}>Arama</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.homeScreenView}>
        <TouchableOpacity style={styles.homeScreen} onPress={onPressBasket}>
          <Icon name='shopping-basket' type='font-awesome-5' color={White} size={ww(.05)} />
          <Text style={{ ...styles.text, color: screen === "basket" ? White : White }}>Sepetim</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.homeScreenView}>
        <TouchableOpacity style={styles.homeScreen} onPress={onPressCampaigns}>
          <Icon name='pricetags' type='ionicon' color={White} size={ww(.05)} />
          <Text style={{ ...styles.text, color: screen === "campaigns" ? White : White }}>Kampanyalar</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.homeScreenView}>
        <TouchableOpacity style={styles.homeScreen} onPress={onPressAccount}>
          <ProfileIcon size={ww(.06)} color={screen === "account" ? White : White} />
          <Text style={{ ...styles.text, color: screen === "account" ? White : White }}>Hesabım</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  screen: {
    width: ww(1),
    height: wh(0.085),
    backgroundColor: orange,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -3,
      backgroundColor: "black",
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    elevation: 12,
    bottom:0,
    position:'absolute'
  },
  homeScreen: {
    width: ww(0.25),
    height: ww(0.2),
    alignItems: "center",
    justifyContent: "center",
  },
  homeScreenView: {
    width: ww(0.2),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: ww(.03),
    color: "#989696",
    marginVertical: wh(.005),
  },
});
