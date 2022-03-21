import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Basket from "./pages/Basket";
import Campaigns from "./pages/Campaigns";
import DrawerItem from "./components/DrawerItem";
import { HamburgerIcon } from "./assets/Icons";
import { ww } from "./helpers";
import { Dimensions, TouchableOpacity, useWindowDimensions } from "react-native";
import DrawerMenu from "./components/DrawerMenu";
import CategoryDetail from "./pages/CategoryDetail";

const AppStack = createStackNavigator();

const StackRouter = ({ navigation }) => {
  return (
    <AppStack.Navigator initialRouteName="Main">
      <AppStack.Screen name="Main" component={Main} options={{ headerShown: false }} componentId={1}
                       navigationProps={navigation} />
      <AppStack.Screen name="Search" component={Search} options={{ headerShown: false }} navigationProps={navigation} />
      <AppStack.Screen name="Account" component={Account} options={{ headerShown: false }}
                       navigationProps={navigation} />
      <AppStack.Screen name="Basket" component={Basket} options={{ headerShown: false }} navigationProps={navigation} />
      <AppStack.Screen name="Campaigns" component={Campaigns} options={{ headerShown: false }}
                       navigationProps={navigation} />
      <AppStack.Screen name="CategoryDetail" component={CategoryDetail} options={{ headerShown: false }}
                       navigationProps={navigation} />

    </AppStack.Navigator>
  );
};



const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = ({navigation}) => (
  <AppDrawer.Navigator
    screenOptions={{
      drawerStyle: {
        width: ww(1),
      },
    }}
    drawerContent={props => <DrawerMenu {...props} />}
  >
    <AppDrawer.Screen name="StackRouter" component={StackRouter} options={{ headerShown: false }}  navigationProps={navigation} />
  </AppDrawer.Navigator>
);



export default () => (
  <NavigationContainer>
    <AppDrawerScreen />
  </NavigationContainer>
);
