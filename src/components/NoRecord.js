import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
    BackButton,
    BrandIcon,
    CategoriesIcon,
    CompanyIcon,
    EditIcon, FavIconUnfilled, MessageIcon,
    OfferIcon,
    SendIcon,
    ShopIcon
} from '../assets/Icons';
import {MainOrange, White} from '../helpers/colors';
import {wh, ww} from '../helpers/responsive';
import {AppColor} from "../pages/styles";
import CampaignIcon from "../assets/Icons/CampaignIcon";

const NoRecord = ({screen, color,size,textSize}) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {
                    screen === "Teklif" &&
                    <OfferIcon size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Talep" &&
                    <ShopIcon size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Ürünler" &&
                    <CategoriesIcon size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Kampanyalar" &&
                    <CampaignIcon size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Markalar" &&
                    <BrandIcon size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Firmalar" &&
                    <CompanyIcon size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Favorites" &&
                    <FavIconUnfilled size={size||50} color={color || "#666"}/>
                }
                {
                    screen === "Messages" &&
                    <MessageIcon size={size||50} color={color || "#666"}/>
                }
                <Text style={[styles.text, {color: color || "#666",fontSize: textSize||ww(.035)}]}>Herhangi bir kayıt bulunamadı...</Text>
            </View>
        </View>
    );
};

export default NoRecord;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        flex:1,
        alignItems: "center",
        justifyContent:'center',alignContent:'center',alignSelf:'center'

    },
    text: {
        color: '#666',
        fontSize: ww(.035),
    },
    editIcon: {
        right: ww(0.05),
    },
});
