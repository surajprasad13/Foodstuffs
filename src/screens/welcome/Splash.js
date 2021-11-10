import React from 'react';
import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

import {font} from '../../constants/fonts';

const {width, height} = Dimensions.get('screen');

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/splash.png')}
      style={{
        flex: 1,
        width,
        height,
        justifyContent: 'flex-end',
      }}
      resizeMode="cover">
      <Button
        title="Get Started"
        titleStyle={{color: 'black', fontFamily: font.regular}}
        style={{backgroundColor: 'white'}}
        containerStyle={{margin: 50, borderRadius: 30}}
        buttonStyle={{backgroundColor: 'white', height: 70}}
        onPress={() => navigation.replace('Auth')}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;
