import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MainOrange } from "../helpers/colors";
import { ww } from "../helpers/responsive";
import { AppColor } from "../pages/styles";
import { Header } from "react-native-elements";
import { HamburgerIcon, NearMe, NotificationIcon } from "../assets/Icons";

const MenuHeader = ({onPressMenu,onPressRight, onPressRight2 }) => {
  return (
    <Header
      statusBarProps={{ barStyle: "light-content" }}
      containerStyle={{ backgroundColor: "#fff", borderBottomColor: "gray" }}
      leftComponent={
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onPressMenu} style={styles.rightIcon}>
            <HamburgerIcon color={"#E3BA6A"} size={ww(.07)} />
          </TouchableOpacity>
          <View style={{ left: ww(.02) }}>
            <Image source={require("../assets/logo/Webp.net-resizeimage.png")} style={{ resizeMode: "contain" }} />
          </View>
        </View>
      }
      rightComponent={
        <View style={styles.rightComponent}>
          <View style={styles.NearMe}>
            <Text style={styles.titleText}>
              YEŞİLYURT (Ev adresim)
            </Text>
            <TouchableOpacity onPress={onPressRight} style={{
              ...styles.rightIcon,
              borderRightWidth: 1,
              borderRightColor: "#000",
            }}>
              <NearMe size={ww(.06)} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onPressRight2} style={{ ...styles.rightIcon }}>
            <NotificationIcon color={"#000"} size={ww(.06)} />
          </TouchableOpacity>

        </View>

      }
    />
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainOrange,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconContainer: {
    // position:"absolute",
    width: ww(0.15),
    height: ww(0.15),
    alignItems: "flex-start",
    justifyContent: "center",
    left: ww(0.055),
  },
  titleText: {
    color: "#000",
    fontSize: ww(0.025),
  },
  rightIcon: {
    marginRight: ww(.01),
    alignItems: "center",
    justifyContent: "center",
  },
  NearMe: {
    alignItems: "center", flexDirection: "row", justifyContent: "space-between",
  },
  rightComponent: {
    flexDirection: "row", width: ww(.5), right: 0, position: "absolute", justifyContent: "flex-end",
  },
});
