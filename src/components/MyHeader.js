import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MainOrange } from "../helpers/colors";
import { ww } from "../helpers/responsive";
import { AppColor } from "../pages/styles";
import { Header } from "react-native-elements";
import { CheckIcon, EditIcon, HamburgerIcon, MessageIcon, NearMe, QRIcon, NotificationIcon } from "../assets/Icons";
import UnitIcon from "../assets/Icons/UnitIcon";

const MyHeader = ({onPressBack,title}) => {
    return (
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        containerStyle={{ backgroundColor: "#fff", borderBottomColor: "gray" }}
        leftComponent={
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={onPressBack} style={styles.rightIcon}>
                    <NotificationIcon color={"#E3BA6A"} size={ww(.07)} />
                </TouchableOpacity>
            </View>
        }
        centerComponent={{
            text: title,
            style: {
                color: '#000',
                fontSize: ww(.035),
            },
        }}
      />
    );
};

export default MyHeader;

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
