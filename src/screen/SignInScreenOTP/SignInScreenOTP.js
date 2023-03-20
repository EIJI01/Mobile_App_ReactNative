import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/Logo_3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const SignInScreenOTP = () => {
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInOTPConfirm = () => {
    console.log('Sign In Confirm');
  };
  const BackOnSignIn = () => {
    console.log('Back On Sign In');
    navigation.navigate('SignIn');
  };

  return (
    <View style={style.root}>
      <View style={style.header}>
        <Image
          source={Logo}
          style={[style.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Text style={style.text}>OTP </Text>
      </View>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
        Password
      </Text>
      <View style={style.button}>
        <CustomInput
          placeholder=""
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder=""
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder=""
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder=""
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
      </View>
      <View style={style.button}>
        <CustomButton text="Confirm" onPress={onSignInOTPConfirm} />
        <CustomButton text="back" onPress={BackOnSignIn} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 40,
    backgroundColor: '#FFEAEA',
  },
  logo: {
    margin: 0,
    width: '40%',
    maxWidth: 500,
    maxHeight: 100,
  },
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingLeft: 125,
    paddingRight: 125,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#DD4D44',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FAB5B5',
    padding: 0,
    marginBottom: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FAB5B5',
    borderRadius: 50,
  },
});
export default SignInScreenOTP;
