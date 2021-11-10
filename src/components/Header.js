import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Header, Icon} from 'react-native-elements';

const CenterComponent = () => (
  <Text style={{textAlign: 'center'}}>Foodstuffs</Text>
);

const LeftComponent = ({navigation}) => {
  return <Icon name="menu" onPress={() => navigation.openDrawer()} />;
};

const RightComponent = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <Icon name="bell" type="feather" />
    </TouchableOpacity>
  );
};

const HeaderBar = ({navigation, ...props}) => {
  return (
    <Header
      containerStyle={styles.conatainer}
      placement="left"
      leftComponent={<LeftComponent navigation={navigation} />}
      rightComponent={<RightComponent navigation={navigation} />}
    />
  );
};

const styles = StyleSheet.create({
  conatainer: {
    //flex: 1,
    backgroundColor: 'transparent',
  },
});

export default HeaderBar;
