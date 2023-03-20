import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreenHome from '../screen/SignInScreen/SignInScreenHome';
import SignInScreenOTP from '../screen/SignInScreenOTP/SignInScreenOTP';
import SignUpScreenHome from '../screen/SignUpScreen/SignUpScreenHome';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignInScreenHome} />
        <Stack.Screen name="SignInOTP" component={SignInScreenOTP} />
        <Stack.Screen name="SignUp" component={SignUpScreenHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
