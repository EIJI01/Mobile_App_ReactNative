import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  Linking,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Logo from '../../../assets/images/Logo_3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Link from '../../components/LinkButton/Link';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {auth} from '../../../database/firebaseDB';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignInScreenHome = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {error},
  } = useForm();

  const onSignInPress = data => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        alert(error.message);
        console.log(error.code);
      });
  };
  const forgotPassword = () => {
    Linking.openURL('http://google.com');
  };
  const onSignInGoogle = () => {
    Linking.openURL('http://google.com');
  };
  const onTelePhoneScreen = () => {
    console.log('Sign In With OTP');
    navigation.navigate('TelephonScreen');
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
            name="username"
            placeholder="    Username"
            control={control}
            rules={{required: 'Username is required'}}
          />
          <CustomInput
            name="password"
            placeholder="    Password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Prassword should be minimum 3 character long ',
              },
            }}
            secureTextEntry
          />

          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 68,
              paddingRight: 68,
              marginBottom: 10,
            }}>
            <CustomButton
              text="Sign In"
              onPress={handleSubmit(onSignInPress)}
            />
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
            onPress={onTelePhoneScreen}
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
