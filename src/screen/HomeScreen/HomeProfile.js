import React, {useState, useEffect} from 'react';
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
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '../../../database/firebaseDB';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from 'firebase/firestore/lite';

const HomeProfile = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const EMAIL_REGEX = /[a-zA-Z0-9]+@kkumail.com/;
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  // const Auth = auth;
  // const currentUserUID = auth.currentUser.uid;
  // const Db = db;

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(Auth, user => {
  //     if (user) {
  //       setCurrentUser(user);
  //       const userRef = doc(Db, 'react', currentUserUID);
  //       getUserData(userRef);
  //     } else {
  //       setCurrentUser(null);
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // const getUserData = async userRef => {
  //   const userData = await getDoc(userRef);
  //   if (userData.exists()) {
  //     setCurrentUser(userData.data());
  //   }
  // };

  const onBackSignIn = () => {
    console.log('Back Sign In');
    navigation.navigate('Home');
  };
  const onSignInPress = () => {
    console.log('EditProfile');
    navigation.navigate('EditProfile');
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
            <Text style={style.text}>Profile</Text>
          </View>
          {/* <View>
            <Text style={style.textShowData}>
              {`Username       :   `}
              {currentUser?.username}
            </Text>
            <Text style={style.textShowData}>
              {`Email               :   `}
              {currentUser?.email}
            </Text>
            <Text style={style.textShowData}>
              {`Password       :   `}
              {currentUser?.password}
            </Text>
          </View> */}
          <View style={style.button}>
            <CustomButton
              text="Edit Profile"
              onPress={handleSubmit(onSignInPress)}
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
  textShowData: {
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 15,
    color: '#000000',
  },
});
export default HomeProfile;
