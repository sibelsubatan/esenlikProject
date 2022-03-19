import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  Platform,
  AppState,
  Button,
  PushNotificationIOS,
  Image,
  Dimensions,
} from "react-native";
import Api from "../store/Api";
import { White } from "../helpers/colors";
import { wh ,ww} from "../helpers";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class Login extends Component {
  state = {
    isLogin: true,
    isShowLaunch: false,
    showSlider: false,
    companyLogoId: "",
    registerScreen: false,
  };


  render() {
    return (
      <View style={styles.container}>

        <Text>girişşşşşşşş</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 40
  },
  headBackground: {
    position: "absolute",
    width: "100%",
    height: height,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },

  loginArea: {
    marginHorizontal: 10,
    marginTop: wh(.3),
    backgroundColor: "transparent",
    borderRadius: 15,
    //backgroundColor:'red',
  },
  signupWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  signUpArea: {
    alignItems: "center",
    marginBottom: 40,
    width: "20%",
  },
  signUpDescription: {
    color: "#999",
    fontSize: 15,
  },
  signUpText: {
    color: "#666666",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: "4%",

  },
  signUpTextWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#E3BA6A",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    paddingTop: "40%",
    backgroundColor: "blue",
  },
  image: {
    //width: 120,
    //height: 120,
    marginTop: 32,
    marginBottom: 18,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 15,
    marginTop: "20%",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    top: wh(.1),
    width: "52%",
    height: height / 4,
    resizeMode: "contain",
  },
  loginView: {
    position: "relative",
    top: wh(.05),
    marginTop: "2%",
    width: "100%",
  },
});
