import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Linking,
} from 'react-native';
import Logo from '../../../assets/images/Logo_3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Link from '../../components/LinkButton/Link';

const SignInScreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const onSignInPress = () => {
    console.log('Sign In');
  };
  const forgotPassword = () => {
    Linking.openURL('http://google.com');
  };
  const onSignInOTP = () => {
    console.log('Sign In With SOS');
  };
  const onSignInGoogle = () => {
    console.log('Sign In With Google');
  };
  const createAccount = () => {
    Linking.openURL('http://google.com');
  };

  return (
    <View style={style.root}>
      <Image
        source={Logo}
        style={[style.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Sign In" onPress={onSignInPress} />
      <Link nameLink="Forgot password" onPress={forgotPassword} />
      <Link nameLink="Create Account" onPress={createAccount} />
      <CustomButton
        text="Sign In OTP"
        onPress={onSignInOTP}
        bgColor="#FAB5B5"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign With Google"
        onPress={onSignInGoogle}
        bgColor="#B9DCF4"
        fgColor="blue"
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
});
export default SignInScreen;
