import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {font} from '../constants/fonts';
import getColorTheme from '../helpers/theme';

const TitleHeader = ({title, onPress}) => {
  const theme = getColorTheme();

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22, fontWeight: '600', fontFamily: font.medium}}>
        {title}
      </Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={{fontFamily: font.italic, color: theme.colors.primary}}>
          See All
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
});

export default TitleHeader;
