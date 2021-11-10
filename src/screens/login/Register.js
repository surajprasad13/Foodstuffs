import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {font} from '../../constants/fonts';
import getColorTheme from '../../helpers/theme';

const Register = ({navigation}) => {
  const theme = getColorTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
        <Text
          style={{textAlign: 'center', fontSize: 25, fontFamily: font.bold}}>
          Register
        </Text>
        <Input
          leftIcon={<Icon name="user" type="feather" />}
          placeholder="Name"
        />
        <Input leftIcon={{name: 'email'}} placeholder="Email" />
        <Input leftIcon={{name: 'lock'}} placeholder="Password" />
        <Button
          title="Register"
          containerStyle={{marginTop: 25}}
          buttonStyle={{padding: 15, borderRadius: 10}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Already have an account ? </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 20, color: theme.colors.primary}}>Sigin</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Register;
