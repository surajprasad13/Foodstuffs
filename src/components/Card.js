import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';
import {Icon, AirbnbRating} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';

import getColorTheme from '../helpers/theme';

const {width} = Dimensions.get('screen');

const CardComponent = ({item, detail}) => {
  const theme = getColorTheme();

  const navigation = useNavigation();
  const {title, image, id} = item;

  return (
    <TouchableOpacity
      accessibilityLabel="Go back"
      accessibilityHint="Navigates to the previous screen"
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {item})}>
      <View style={{flexDirection: 'row'}}>
        <Icon name="heart" type="evilicon" size={30} style={{}} />
        <FastImage
          source={{uri: image}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={{color: theme.colors.secondary}}>Breakfast</Text>
      <Text style={styles.text}>{title}</Text>
      <AirbnbRating
        showRating={false}
        size={15}
        starContainerStyle={{marginLeft: -60}}
      />
      <Text style={{color: theme.colors.primary}}>Calories-120</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="timer-outline" type="ionicon" />
        <Text>2 minute</Text>
        <Icon name="pot-mix-outline" type="material-community" />
        <Text>1 serving</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    height: 300,
    justifyContent: 'space-around',
    width: width * 0.45,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default CardComponent;
