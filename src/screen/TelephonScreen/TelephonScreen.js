import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const TelephonScreen = () => {
  const navigation = useNavigation();
  const onBackSignIn = () => {
    console.log('Back Sign In');
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={style.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>TelephonScreen</Text>
          <CustomButton
            text="Back"
            onPress={onBackSignIn}
            bgColor="#FAB5B5"
            fgColor="#DD4D44"
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
});

export default TelephonScreen;
