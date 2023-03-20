import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const SignUpScreenHome = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInSignUp = () => {
    console.log('Sign Up');
  };
  const onBackSignIn = () => {
    console.log('Back Sign In');
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={style.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View style={style.header}>
            <Image
              source={Logo}
              style={[style.logo, {height: height * 0.3}]}
              resizeMode="contain"
            />
            <Text style={style.text}>Sign Up</Text>
          </View>
          <View style={{marginTop: 10, paddingLeft: 20, paddingRight: 20}}>
            <CustomInput
              placeholder="    Username"
              value={username}
              setValue={setUsername}
            />
            <CustomInput
              placeholder="    Email"
              value={email}
              setValue={setEmail}
              secureTextEntry
            />
            <CustomInput
              placeholder="    Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />
            <CustomInput
              placeholder="    Confirm Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Sign Up"
              onPress={onSignInSignUp}
              bgColor="#FAB5B5"
              fgColor="#DD4D44"
            />
            <CustomButton
              text="Back"
              onPress={onBackSignIn}
              bgColor="#FAB5B5"
              fgColor="#DD4D44"
            />
          </View>
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
    padding: 40,
  },
  logo: {
    margin: 0,
    width: '40%',
    maxWidth: 500,
    maxHeight: 100,
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
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#DD4D44',
  },
  button: {
    marginTop: 0,
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
  },
});
export default SignUpScreenHome;
