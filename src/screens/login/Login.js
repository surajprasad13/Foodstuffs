import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Input, SocialIcon, Divider, Button} from 'react-native-elements';

import getColorTheme from '../../helpers/theme';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

import {font} from '../../constants/fonts';

GoogleSignin.configure({
  webClientId:
    '186705231635-juse7a468akn0hfro8lelh3453f1hd4v.apps.googleusercontent.com',
});

const Login = ({navigation}) => {
  const theme = getColorTheme();

  const [progress, setProgress] = useState(false);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {userInfo, idToken} = await GoogleSignin.signIn();
      //this.setState({userInfo});
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', padding: 15}}>
        <Text
          style={{textAlign: 'center', fontSize: 22, fontFamily: font.bold}}>
          Sign In
        </Text>
        <Input
          leftIcon={{name: 'mail'}}
          placeholder="Email"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        <Input
          leftIcon={{name: 'lock'}}
          placeholder="Password"
          autoCapitalize="none"
          autoCompleteType="password"
        />
        <Text style={{textAlign: 'right'}}>Forgot passcode ?</Text>
        <Button
          title="Sigin"
          containerStyle={{padding: 20}}
          buttonStyle={{
            padding: 15,
            borderRadius: 15,
            margin: 10,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <SocialIcon type="facebook" onPress={onFacebookButtonPress} />
          <SocialIcon type="google" onPress={signin} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Don't have an account ? </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: theme.colors.primary, fontSize: 20}}>
            Register
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
