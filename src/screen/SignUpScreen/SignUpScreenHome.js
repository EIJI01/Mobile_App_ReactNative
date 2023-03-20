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
import {useForm} from 'react-hook-form';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../../database/firebaseDB';
import {doc, setDoc} from 'firebase/firestore';
const SignUpScreenHome = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const EMAIL_REGEX = /[a-zA-Z0-9]+@kkumail.com/;
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const onSignInSignUp = data => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.Email, data.password).then(
      userCredential => {
        console.log('user credential', userCredential);
        const user = userCredential._tokenResponse.Email;
        const myUserUid = auth.currentUser.uid;
        setDoc(
          doc(db, 'users', `${myUserUid}`, {
            email: user,
            password: data.password,
          }),
        );
      },
    );
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
              name="username"
              placeholder="    Username"
              control={control}
              rules={{required: 'Username is required'}}
            />
            <CustomInput
              name="Email"
              placeholder="    Email"
              control={control}
              rules={{pattern: {value: EMAIL_REGEX, message: '@kkumail.com'}}}
            />
            <CustomInput
              name="password"
              placeholder="    Password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 3,
                  message: 'Password should be minimum 3 character long ',
                },
              }}
              secureTextEntry
            />
            <CustomInput
              name="confirmPassword"
              placeholder="    Confirm Password"
              control={control}
              rules={{
                validate: value => value == pwd || 'Password do not match',
              }}
              secureTextEntry
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Sign Up"
              onPress={handleSubmit(onSignInSignUp)}
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
