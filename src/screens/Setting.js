import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {ListItem, Icon, Divider, Switch} from 'react-native-elements';

import {font} from '../constants/fonts';

import getColorTheme from '../helpers/theme';

const Setting = () => {
  const theme = getColorTheme();

  const [value, setValue] = useState(false);

  return (
    <SafeAreaView>
      <Text style={{fontSize: 25, fontFamily: font.bold, margin: 20}}>
        Settings
      </Text>
      <View style={styles.container}>
        <ListItem containerStyle={styles.list}>
          <Icon name="language" type="font-awesome" />
          <ListItem.Content>
            <ListItem.Title>Language</ListItem.Title>
          </ListItem.Content>
          <ListItem.Title style={{color: theme.colors.primary}}>
            English
          </ListItem.Title>
        </ListItem>
        <Divider color={theme.colors.gray} width={5} style={{padding: 10}} />
        <Text style={{fontSize: 20, fontFamily: font.medium, padding: 15}}>
          Notifications
        </Text>
        <ListItem containerStyle={styles.list}>
          <Icon name="bell" type="feather" />
          <ListItem.Content>
            <ListItem.Title>Push Notification</ListItem.Title>
          </ListItem.Content>
          <Switch value={value} onValueChange={() => setValue(!value)} />
        </ListItem>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  list: {
    borderRadius: 15,
    padding: 20,
  },
});

export default Setting;
