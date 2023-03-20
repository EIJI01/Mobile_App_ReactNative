import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  Linking,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Link from '../../components/LinkButton/Link';
import {useNavigation} from '@react-navigation/native';

const SignInScreenHome = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const onSignInPress = () => {
    console.log('Sign In');
    navigation.navigate('SignIn');
  };
  const forgotPassword = () => {
    Linking.openURL('http://google.com');
  };
  const onSignInGoogle = () => {
    Linking.openURL('http://google.com');
  };
  const onSignInOTP = () => {
    console.log('Sign In With OTP');
    navigation.navigate('SignInOTP');
  };
  const onSignUpPress = () => {
    console.log('Sign Up');
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={style.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Image
            source={Logo}
            style={[style.logo, {width: width * 1}]}
            resizeMode="contain"
          />
          <CustomInput
            placeholder="    Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="    Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 68,
              paddingRight: 68,
              marginBottom: 10,
            }}>
            <CustomButton text="Sign In" onPress={onSignInPress} />
            <CustomButton text="Sign UP" onPress={onSignUpPress} />
          </View>
          <View style={{marginBottom: 10}}>
            <Link
              nameLink="Forgot password"
              onPress={forgotPassword}
              fgColor="#DD4D44"
            />
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFEAEA',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    padding: 70,
  },
  logo: {
    height: 300,
    maxWidth: 500,
    maxHeight: 500,
    position: 'relative',
    alignSelf: 'center',
  },
});
export default SignInScreenHome;
