import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/Logo_2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const onSignInPress = () => {
    console.log('Sign In');
  };
  const forgotPassword = () => {
    console.log('Forgot Password');
  };
  const onSignInOTP = () => {
    console.log('Sign In With SOS');
  };
  const onSignInGoogle = () => {
    console.log('Sign In With Google');
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
      <CustomButton
        text="Forgot password"
        onPress={forgotPassword}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign In OTP"
        onPress={onSignInOTP}
        bgColor="#E7EAF4"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign With Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="green"
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
    maxWidth: 300,
    maxHeight: 200,
  },
});
export default SignInScreen;
