import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Icon, AirbnbRating} from 'react-native-elements';
import getColorTheme from '../helpers/theme';
import {font} from '../constants/fonts';

const Hcard = ({item}) => {
  const theme = getColorTheme();

  const {image, title} = item;

  return (
    <View
      style={styles.container}
      accessibilityRole="alert"
      accessibilityHint="This is the hint of the view"
      onMagicTap={() => Alert.alert('Hi')}>
      <FastImage
        source={{uri: image}}
        resizeMode="contain"
        style={{width: 100, height: 100, borderRadius: 100}}
      />
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'space-between',
          alignContent: 'space-between',
        }}>
        <Text style={{color: theme.colors.secondary}}>Breakfast</Text>
        <Text style={{fontSize: 18, fontFamily: font.medium}}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <AirbnbRating showRating={false} size={15} />
          <Text style={{color: theme.colors.primary}}>120-Calories</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="timer-outline" type="ionicon" />
          <Text>2 minute</Text>
          <Icon name="pot-mix-outline" type="material-community" />
          <Text>1 serving</Text>
        </View>
      </View>
      <Icon name="heart" type="evilicon" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-between',
  },
});

export default Hcard;
