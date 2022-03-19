import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  TextInput,
  StatusBar, Dimensions,
} from "react-native";

import { Black, DarkRed, MainOrange, White } from "../helpers/colors";
import BottomTabNavigation from "../components/BottomTabNavigation";
import { wh, ww } from "../helpers";
import { AppColor, MainPage } from "./styles";
import Header from "../components/MenuHeader";
import Slider from "../components/Slider";
import Carousel, { Pagination } from "react-native-snap-carousel";

const Search = ({ navigation }) => {
  const _carousel = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {

  }, []);


  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#E3BA6A"} />
      <Header title="" onPressMenu={toggleDrawer} icon={"Hamburger"} />
      <Text>ara</Text>

      <BottomTabNavigation
        onPressHome={() => navigation.navigate("Main")}
        onPressSearch={() => navigation.navigate("Search")}
        onPressBasket={() => navigation.navigate("Basket")}
        onPressCampaigns={() => navigation.navigate("Campaigns")}
        onPressAccount={() => navigation.navigate("Account")}
        screen={"search"}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
