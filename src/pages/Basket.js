import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

import BottomTabNavigation from "../components/BottomTabNavigation";
import Header from "../components/MenuHeader";

const Basket = ({ navigation }) => {

  useEffect(() => {

  }, []);

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#E3BA6A"} />
      <Header title="" onPressMenu={toggleDrawer} icon={"Hamburger"} />
      <Text>sepet</Text>
      <BottomTabNavigation
        onPressHome={() => navigation.navigate("Main")}
        onPressSearch={() => navigation.navigate("Search")}
        onPressBasket={() => navigation.navigate("Basket")}
        onPressCampaigns={() => navigation.navigate("Campaigns")}
        onPressAccount={() => navigation.navigate("Account")}
        screen={"basket"}
      />
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
