import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreenHome from '../screen/SignInScreen/SignInScreenHome';
import SignInScreenOTP from '../screen/SignInScreenOTP/SignInScreenOTP';
import SignUpScreenHome from '../screen/SignUpScreen/SignUpScreenHome';
import {HomeScreen, HomeProfile, EditProfile} from '../screen/HomeScreen/index';
import TelephonScreen from '../screen/TelephonScreen';
import {
  Chugoku,
  Chubu,
  Hokkaido,
  Kansai,
  Kanto,
  Kyushu,
  Okinawa,
  Shikoku,
  Tohoku,
} from '../screen/AdviceScreen/index';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignInScreenHome} />
        <Stack.Screen name="SignInOTP" component={SignInScreenOTP} />
        <Stack.Screen name="SignUp" component={SignUpScreenHome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TelephonScreen" component={TelephonScreen} />
        <Stack.Screen name="HomeProfile" component={HomeProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Chugoku" component={Chugoku} />
        <Stack.Screen name="Chubu" component={Chubu} />
        <Stack.Screen name="Hokkaido" component={Hokkaido} />
        <Stack.Screen name="Kansai" component={Kansai} />
        <Stack.Screen name="Kanto" component={Kanto} />
        <Stack.Screen name="Kyushu" component={Kyushu} />
        <Stack.Screen name="Okinawa" component={Okinawa} />
        <Stack.Screen name="Shikoku" component={Shikoku} />
        <Stack.Screen name="Tohoku" component={Tohoku} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
