import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';

import store from './src/redux';
import getColorTheme from './src/helpers/theme';

import messaging from '@react-native-firebase/messaging';
import {remoteNotification} from './src/services/Notification';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    //console.log('Authorization status:', authStatus);
  }
}

const Main = () => {
  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async data => {
      remoteNotification(data);
    });

    return unsubscribe;
  }, []);

  const theme = getColorTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
