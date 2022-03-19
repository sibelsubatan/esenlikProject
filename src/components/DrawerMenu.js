import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import User from "../store/User";
import DrawerItem from "./DrawerItem";
import { wh, ww } from "../helpers/responsive";
import { BackButton, CloseIcon, CloseIcons, Facebook, HomeIcon, Instagram, Twitter } from "../assets/Icons";
import { DarkGrey, White } from "../helpers/colors";
import { Icon } from "react-native-elements";
import Api from "../store/Api";
import axios from "axios";
import DetailHeader from "./DetailHeader";

const DrawerMenu = ({ navigation }) => {
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
        console.log("setPlaceCategory? ", response.data.data);

      })
      .catch(function (error) {
        console.log("setPlaceCategory: ", error);
      });

  }, []);


  const goBack = () => {
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <DetailHeader title="Kategoriler" onPress={goBack} />
      {
        data.map(item => (
          <DrawerItem
            onPress={() => {
              {
                item.screen === "Main" && navigation.closeDrawer();
              }
              navigation.navigate('CategoryDetail', {item:item.id})
            }}
            key={item.categoryName}
            {...item}
          />
        ))
      }
      <View style={{bottom: wh(0.05),position: 'absolute', right: 0, left: 0,backgroundColor: '#FEFEFE', }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderTopWidth:1,borderColor:{DarkGrey},height:ww(.2)}}>
          <Text style={{color:'#000',alignSelf:'center',left:10,fontSize:ww(0.03)}}>İletişim Bilgileri</Text>
          <View style={{flexDirection:'row',alignItems:'center',right:5}}>
            <TouchableOpacity style={{margin:2,width:ww(.08),height:ww(.08),borderRadius:ww(.08)/2,borderWidth:1.5,borderColor:{DarkGrey},justifyContent:'center'}}>
              <Icon name='twitter' type='font-awesome-5' color={DarkGrey} size={15} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin:2,width:ww(.08),height:ww(.08),borderRadius:ww(.08)/2,borderWidth:1.5,borderColor:{DarkGrey},justifyContent:'center'}}>
              <Icon name='instagram' type='font-awesome-5' color={DarkGrey} size={15} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin:2,width:ww(.08),height:ww(.08),borderRadius:ww(.08)/2,borderWidth:1.5,borderColor:{DarkGrey},justifyContent:'center'}}>
              <Icon name='facebook-f' type='font-awesome-5' color={DarkGrey} size={15} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',height:ww(.2)}}>
          <View style={{flexDirection:'row',alignSelf:'center',left:5}}>
            <View style={{margin:2,width:ww(.06),height:ww(.06),borderRadius:ww(.06)/2,borderWidth:1.5,borderColor:{DarkGrey},justifyContent:'center'}}>
              <Icon name='info' type='font-awesome-5' color={DarkGrey} size={10} />
            </View>
            <Text style={{color:'#000',alignSelf:'center',fontSize:ww(0.03)}}>Yardım</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',right:5}}>
            <View style={{justifyContent:'center',padding:5}}>
              <Icon name="headset" type='font-awesome-5' color={DarkGrey} size={15} />
            </View>
            <View style={{flexDirection:'column'}}>
            <Text style={{color:'#000',fontSize:ww(0.03)}}>444 96 44</Text>
              <Text style={{color:'#000',fontSize:ww(0.03)}}>Müşteri Hizmetleri</Text>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
  },
  drawerCenterView: {
    flex: 1,
    position: "absolute",
    top: 30,
    backgroundColor: White,
    // padding: ww(0.1),
  },
});

export default DrawerMenu;
