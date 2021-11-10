import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Icon} from 'react-native-elements';

import faker from 'faker';

import {useNavigation} from '@react-navigation/native';

const Drawer = ({state}) => {
  const navigation = useNavigation();

  const screens = [
    'Home',
    'Favorites',
    'Recently Viewed',
    'Setting',
    'About Us',
    'Help',
    'Sign Out',
  ];

  const renderIcon = text => {
    switch (text) {
      case 'Home':
        return <Icon name="home-outline" type="ionicon" />;
      case 'Favorites':
        return <Icon name="heart" type="feather" />;
      case 'Recently Viewed':
        return <Icon name="timer-outline" type="ionicon" />;
      case 'Setting':
        return <Icon name="setting" type="antdesign" />;
      case 'About Us':
        return <Icon name="info" type="octicon" />;
      case 'Help':
        return <Icon name="help-circle" type="feather" />;
      case 'Sign Out':
        return <Icon name="logout" type="material-icon" />;
      default:
        return;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'rgba(0,0,0,0.04)', flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Image
          source={{uri: faker.image.avatar()}}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>{faker.name.firstName()}</Text>
          <Text>View Profile</Text>
        </View>
      </View>
      <ScrollView>
        {screens.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                flexDirection: 'row',
                margin: 10,
                padding: 10,
                alignItems: 'center',
                marginTop: 20,
              }}
              key={index.toString()}>
              {renderIcon(item)}
              <Text style={{marginLeft: 15}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Drawer;
