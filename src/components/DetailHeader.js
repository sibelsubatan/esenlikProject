import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MainOrange } from "../helpers/colors";
import { ww } from "../helpers/responsive";
import { AppColor } from "../pages/styles";
import { Header } from "react-native-elements";
import {
  BackButton,
} from "../assets/Icons";

const DetailHeader = ({onPress,title}) => {
  return (
    <Header
      statusBarProps={{ barStyle: "light-content" }}
      containerStyle={styles.container}
      leftComponent={
        <TouchableOpacity onPress={onPress} style={{left:ww(.04)}}>
          <BackButton size={ww(.07)} color={"#000"} />
        </TouchableOpacity>
      }
      centerComponent={{
        text: title,
        style: {
          color: '#000',
          fontSize: ww(.04),
        },
      }}
    />
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",backgroundColor: "#fff", borderBottomColor: "gray"

  },
});
