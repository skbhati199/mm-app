import { View, Text, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../Constants";
import { Feather } from "react-native-vector-icons/Feather";
import { AntDesign } from "react-native-vector-icons/AntDesign";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
import AccountOverViewPage from "../screens/account-overview/AccountOverViewPage";
import TransferPage from "../screens/Transfer/TransferPage";
import MorePage from "../screens/more/MorePage";
import ReportPage from "../screens/Reports/ReportPage";
import { Ionicons } from '@expo/vector-icons';
import CreditCardIcon from "../components/icons/CreditCardIcon";
import TransferIcon from "../components/icons/TransferIcon";
import ReportsIcon from "../components/icons/ReportsIcon";
import MoreIcon from "../components/icons/MoreIcon";


const Tab = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: Colors.primaryColor,
  inactiveTintColor: Colors.tabIconDefault,
  allowFontScaling: true,
  labelStyle: { fontSize: 14, paddingTop: 5, paddingBottom: 5 },
  tabStyle: { paddingTop: 0 },
  style: { height: 80, borderTopColor: Colors.tabBarBorderDefault },
};

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainTabNavigation"
      screenOptions={{ headerMode: "screen", tabBarShowLabel: false, }}
      className="pb-8"
    >
      <Tab.Screen
        name="Home"
        component={AccountOverViewPage}
        options={{ headerShown: false, tabBarIcon:({color, size, focused}) => (<CreditCardIcon focused={focused} />)}}
        
      />
      <Tab.Screen
        name="Transfer"
        component={TransferPage}
        options={{ headerShown: false, tabBarIcon:(tabInfo) => (<TransferIcon focused={tabInfo.focused} />)}}
      />
      <Tab.Screen
        name="Reports"
        component={ReportPage}
        options={{ headerShown: false, tabBarIcon:(tabInfo) => (<ReportsIcon focused={tabInfo.focused} />)}}
      />
      <Tab.Screen
        name="More"
        component={MorePage}
        options={{ headerShown: false, tabBarIcon:(tabInfo) => (<MoreIcon focused={tabInfo.focused} />)}}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
