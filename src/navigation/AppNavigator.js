import React, {useEffect, useState} from 'react';
import {Text, Linking} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Splash from '../screens/welcome/Splash';
import Welcome from '../screens/welcome/Welcome';
import Auth from '../screens/login/Auth';
import Register from '../screens/login/Register';
import Login from '../screens/login/Login';
import MainNavigator from './MainNavigator';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  const linking = {
    prefixes: ['foodstuffs://', 'https://foodstuffs.page.link'],
    config: {
      screens: {
        Welcome: 'welcome',
        Login: 'login',
        Register: 'register',
        Home: {
          path: 'home',
          screens: {
            Home: {
              path: 'main',
              screens: {
                Likes: 'likes',
                User: 'user',
                History: 'history',
              },
            },
            Profile: 'profile',
            Orders: 'orders',
          },
        },
      },
    },
    async getInitialURL() {
      const url = await Linking.getInitialURL();
      if (url != null) {
        console.log('Initial url------------------------', url);
        return url;
      }
      // Check if there is an initial firebase notification
      const message = await messaging().getInitialNotification();
      // Get deep link from data
      // if this is undefined, the app will open the default/home page
      return message?.data?.link;
    },

    subscribe(listener) {
      const onReceiveURL = url => listener(url);
      // Listen to incoming links from deep linking
      Linking.addEventListener('url', onReceiveURL);
      // Listen to firebase push notifications
      const unsubscribeNotification = messaging().onNotificationOpenedApp(
        message => {
          console.log('On notification opened app in running');
          const url = message?.data?.link;
          if (url) {
            listener(url);
          }
        },
      );
      return () => {
        // Clean up the event listeners
        Linking.removeEventListener('url', onReceiveURL);
        unsubscribeNotification();
      };
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
