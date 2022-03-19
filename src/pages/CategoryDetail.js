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
  StatusBar, Dimensions, useWindowDimensions, ActivityIndicator,
} from "react-native";
import DetailHeader from "../components/DetailHeader";
import Api from "../store/Api";
import axios from "axios";
import { wh, ww } from "../helpers";
import { AppColor2, DarkGrey, listColor, White } from "../helpers/colors";
import BottomTabNavigation from "../components/BottomTabNavigation";
import Loader from "../components/Loader";
import { AddIcon, BackButton } from "../assets/Icons";


const CategoryDetail = ({ navigation, route }) => {
  const categoryNameList = [];
  const [data, setData] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategoryListDetail, setSubCategoryListDetail] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isActiveDetail, setIsActiveDetail] = useState(false);
  const [itemId, setItemId] = useState("");
  const [detailItemId, setDetailItemId] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [duringMomentum, setDuringMomentum] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getSubCategoryList();
    getData();
    getDetailData();
  }, [route.params.item, itemId, detailItemId, loading]);

  const getData = () => {
    var config = {
      method: "get",
      url: Api.BASE_URL + "/api/Product/ListCategories",
      headers: Api.getHeaders(),
    };
    axios(config)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
        console.log("setPlaceCategory? ", response.data.data);

      })
      .catch(function(error) {
        console.log("setPlaceCategory: ", error);
      });
  };

  const getSubCategoryList = () => {
    var config = {
      method: "get",
      url: Api.BASE_URL + "/api/Product/ListCategories?parentId=" + (isActive === true ? itemId : route.params.item),
      headers: Api.getHeaders(),
    };
    axios(config)
      .then((response) => {
        setSubCategoryList(response.data.data);
        setLoading(false);

      })
      .catch(function(error) {
        console.log("setPlaceCategory: ", error);
      });
  };

  const getDetailData = () => {
    var config = {
      method: "get",
      url: Api.BASE_URL + "/api/Product/ListCategories?parentId=" + detailItemId,
      headers: Api.getHeaders(),
      offset: offset,
    };
    axios(config)
      .then((response) => {
        setSubCategoryListDetail(response.data.data);
        setLoading(false);

        console.log("setSubCategoryListlitt? ", response);

      })
      .catch(function(error) {
        console.log("setPlaceCategory: ", error);
      });
  };

  const renderItemCategory = ({ item, index }) => {
    console.log("isActive??", isActive);
    return (
      <TouchableOpacity key={index} style={{
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
        borderBottomWidth: 5,
        borderRadius:5,
        borderColor: (isActive === true && item.id === itemId) ? AppColor2 : (item.id === route.params.item && isActive === false) ? AppColor2 : "transparent",
      }} onPress={() => {
        setIsActive(true);
        setItemId(item.id);
        setIsActiveDetail(false);
        setSubCategoryListDetail([]);
        setDetailItemId("");
      }}>
        {
          item.imagePath.imagePath === null &&
          <Image
            source={require("../assets/resim_yok.png")}
            style={{
              width: ww(.25),
              height: ww(.25),
              resizeMode: "center",
            }}
          />
        }
        {
          item.imagePath.imagePath != null &&
          <Image
            source={{ uri: Api.BASE_URL_Image + item.imagePath.imagePath }}
            style={{
              width: ww(.25),
              height: ww(.25),
              resizeMode: "center",
            }}
          />
        }
        <Text style={{ textAlign: "center", backgroundColor: "#fff", fontSize: ww(.03),color:'#000', }}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  };
  const renderItemCategoryDetail = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={{
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
        marginBottom: "5%",
      }}>
        <View style={{ flexDirection: "row" }}>
          {
            item.imagePath.imagePath === null &&
            <Image
              source={require("../assets/resim_yok.png")}
              style={{
                width: ww(.15),
                height: ww(.15),
                resizeMode: "contain",
              }}
            />
          }
          {
            item.imagePath.imagePath != null &&
            <Image
              source={{ uri: Api.BASE_URL_Image + item.imagePath.imagePath }}
              style={{
                width: ww(.15),
                height: ww(.15),
                resizeMode: "contain",
              }}
            />
          }
          <TouchableOpacity style={{
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.38,
            shadowRadius: 3.00,

            elevation: 5,
            shadowColor: DarkGrey,
          }}>
            <Image source={require("../assets/icons8-add-30.png")} />

          </TouchableOpacity>

        </View>

        <Text style={{
          textAlign: "center",
          backgroundColor: "#fff",
          fontSize: ww(.03),
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          color:'#000',
        }} numberOfLines={2}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  };
  const renderItemSubCategoryList = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={{
        backgroundColor: (isActiveDetail === true && detailItemId === item.id) ? AppColor2 : White,
        borderColor: 3, borderRadius: 30, borderWidth: 2,
        height: ww(.1),
        justifyContent: "center", alignSelf: "center", margin: 5,
      }} onPress={() => {
        setDetailItemId(item.id);
        setIsActiveDetail(true);
      }}>
        <Text style={{
          textAlign: "center",
          fontSize: ww(.03),
          fontWeight: "bold",
          color: (isActiveDetail === true && detailItemId === item.id) ? White : "#000",
        }}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  };

  const goBack = () => {
    navigation.navigate("Main", { item: setItemId("") });
  };
  const numColumns = 3;
  const onRefresh = () => {
    setSubCategoryListDetail([]);
    getData();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const loadMore = () => {
    if (!duringMomentum) {
      setDuringMomentum(true);
      setOffset(offset + 20);
      setTimeout(() => {
        getData();
      }, 2000);
    }
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View style={{
        paddingVertical: 20,
      }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#E3BA6A"} />
      <DetailHeader title="Ürünler" onPress={goBack} />
      <Loader loading={loading} />
      <View style={{ marginTop: "4%" }}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderItemCategory}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ marginTop: "5%", backgroundColor: listColor, height: ww(.2) }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={subCategoryList}
          renderItem={renderItemSubCategoryList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <ScrollView>
        <View style={{ marginTop: "4%" }}>
          <FlatList
            data={subCategoryListDetail}
            numColumns={3}
            renderItem={renderItemCategoryDetail}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            onEndReached={loadMore}
            onMomentumScrollBegin={() => {
              setDuringMomentum(false);
            }}
            ListFooterComponent={renderFooter}
            removeClippedSubviews={false}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onEndReachedThreshold={Platform.__constants.systemName === "iOS" ? 0.2 : 0.4}
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

export default CategoryDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
