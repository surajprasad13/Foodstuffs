import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';

import {Button} from 'react-native-elements';

const Auth = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0,0,0,.7)'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Cooking Done the easy way</Text>
      </View>
      <View>
        <Button
          title="Register"
          onPress={() => navigation.replace('Register')}
          buttonStyle={{padding: 15, margin: 10, borderRadius: 15}}
        />
        <Button
          title="Signin"
          type="clear"
          onPress={() => navigation.replace('Login')}
          buttonStyle={{padding: 15, margin: 10, borderRadius: 15}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Auth;
