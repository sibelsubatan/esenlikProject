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
  StatusBar, Dimensions, useWindowDimensions,
} from "react-native";
import BottomTabNavigation from "../components/BottomTabNavigation";
import { wh, ww } from "../helpers";
import MenuHeader from "../components/MenuHeader";
import Carousel, { Pagination } from "react-native-snap-carousel";
import axios from "axios";
import Api from "../store/Api"

const Main = ({ navigation }) => {
  const _carousel = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: Api.BASE_URL+ "/api/Product/ListCategories",
      headers:Api.getHeaders()
    };
    axios(config)
      .then((response) =>{
        setData(response.data.data)

      })
      .catch(function (error) {
        console.log("setPlaceCategory: ", error);
      });

  }, []);


  const images = [
    { id: 0, image: require("../assets/duyuru.jpg") },
    { id: 1, image: require("../assets/duyuru.jpg") },
    { id: 2, image: require("../assets/duyuru.jpg") },
    { id: 3, image: require("../assets/duyuru.jpg") },
  ];


  const numColumns = 3;
  const width = Dimensions.get("window").width;


  const renderItemSlider = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            width: ww(1),
            height: wh(0.25),
            resizeMode: "contain",
          }}
        ></Image>
      </View>
    );
  };

  const renderItemCategory = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={{
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",marginBottom:'4%'
      }} onPress={()=>{
        navigation.navigate('CategoryDetail', {item:item.id})
      }}>
        {
          item.imagePath.imagePath === null &&
          <Image
            source={require('../assets/resim_yok.png')}
            style={{
              width: ww(.25),
              height: wh(0.1),
              resizeMode: "contain",
            }}
          />
        }
        {
          item.imagePath.imagePath != null &&
          <Image
            source={{uri:Api.BASE_URL_Image + item.imagePath.imagePath}}
            style={{
              width: ww(.25),
              height: wh(0.1),
              resizeMode: "contain",
            }}
          />
        }
        <Text style={{ textAlign: "center", backgroundColor: "#fff",color:'#000', }}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  };
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#E3BA6A"} />
      <MenuHeader title="" onPressMenu={toggleDrawer} icon={"Hamburger"} />
      <ScrollView>
        <View>
          <Carousel
            ref={_carousel}
            data={images}
            renderItem={renderItemSlider}
            sliderWidth={ww(1)}
            itemWidth={ww(1)}
            onSnapToItem={index => setActiveSlide(index)}
            enableMomentum={false}
            lockScrollWhileSnapping
            autoplay
            useScrollView
            loop
            autoplayInterval={3000}
          >

          </Carousel>
          <Pagination
            carouselRef={_carousel}
            dotsLength={images.length}
            activeDotIndex={activeSlide}
            dotContainerStyle={{}}
          //  containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)", top: 10, bottom: 30 }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#E3BA6A",
            }}
            inactiveDotStyle={{
              backgroundColor: "gray",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={false}
          />
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={renderItemCategory}
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

      </ScrollView>
      <BottomTabNavigation
        onPressHome={() => navigation.navigate("Main")}
        onPressSearch={() => navigation.navigate("Search")}
        onPressBasket={() => navigation.navigate("Basket")}
        onPressCampaigns={() => navigation.navigate("Campaigns")}
        onPressAccount={() => navigation.navigate("Account")}
        screen={"Home"}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
