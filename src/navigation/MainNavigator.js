import React from 'react';
import {Icon} from 'react-native-elements';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Header, Drawer as DrawerItem} from '../components';

//screens
import Home from '../screens/Home';
import Likes from '../screens/Likes';
import User from '../screens/User';
import History from '../screens/History';
import Search from '../screens/Search';
import theme from '../constants/theme';
import Profile from '../screens/Profile';
import Order from '../screens/Order';
import Setting from '../screens/Setting';
import Notification from '../screens/Notification';

import getColorTheme from '../helpers/theme';
import RecipeDetail from '../screens/RecipeDetail';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={RecipeDetail}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const SettingStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          header: ({navigation}) => (
            <Header {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

function BottomNavigator() {
  const theme = getColorTheme();

  return (
    <Bottom.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: theme.colors.primary,
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" type="antdesign" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="hearto" type="antdesign" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" type="feather" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="settings" type="feather" color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export default function MainNavigator(props) {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerItem {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Orders" component={Order} />
      <Drawer.Screen name="Offer and Promo" component={Likes} />
      <Drawer.Screen name="Privacy Policy" component={Likes} />
      <Drawer.Screen name="Security" component={Likes} />
      <Drawer.Screen name="Setting" component={SettingStack} />
    </Drawer.Navigator>
  );
}
