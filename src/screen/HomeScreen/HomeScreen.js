import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import japanMap from '../../../assets/images/japanMap.png';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onBackSignIn = () => {
    console.log('Back Sign In');
    navigation.navigate('SignIn');
  };
  const onProfile = () => {
    console.log('on Profile');
    navigation.navigate('HomeProfile');
  };

  return (
    <SafeAreaView style={style.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <Text style={style.text}>กรุณาเลือกภูมิภาค</Text>
        </View>
        <TouchableOpacity style={style.imageContainer}>
          <Image style={style.image} source={japanMap} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 2,
            paddingHorizontal: 10,
            marginTop: 50,
          }}>
          <View style={style.button}>
            <CustomButton
              text="Hokkaido"
              onPress={() => navigation.navigate('Hokkaido')}
              bgColor="#FF7D7B"
              fgColor="#000000"
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Tohoku"
              onPress={() => navigation.navigate('Tohoku')}
              bgColor="#FFFF69"
              fgColor="#000000"
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Kanto"
              onPress={() => navigation.navigate('Kanto')}
              bgColor="#84FC90"
              fgColor="#000000"
            />
          </View>
        </View>
        <View style={style.OutButton}>
          <View style={style.button}>
            <CustomButton
              text="Chubu"
              onPress={() => navigation.navigate('Chubu')}
              bgColor="#93EEFF"
              fgColor="#000000"
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Kansai"
              onPress={() => navigation.navigate('Kansai')}
              bgColor="#D391FF"
              fgColor="#000000"
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Chugoku"
              onPress={() => navigation.navigate('Chugoku')}
              bgColor="#FED980"
              fgColor="#000000"
            />
          </View>
        </View>
        <View style={style.OutButton}>
          <View style={style.button}>
            <CustomButton
              text="Shikoku"
              onPress={() => navigation.navigate('Shikoku')}
              bgColor="#A0AAFF"
              fgColor="#000000"
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Kyushu"
              onPress={() => navigation.navigate('Kyushu')}
              bgColor="#FEABEF"
              fgColor="#000000"
            />
          </View>
          <View style={style.button}>
            <CustomButton
              text="Okinawa"
              onPress={() => navigation.navigate('Okinawa')}
              bgColor="#767170"
              fgColor="#000000"
            />
          </View>
        </View>
        <View style={style.OutButtonBottom}>
          <View style={style.buttonCouple}>
            <CustomButton
              text="Profile"
              onPress={onProfile}
              bgColor="#E06A6A"
              fgColor="#FFEAEA"
            />
          </View>
          <View style={style.buttonCouple}>
            <CustomButton
              text="Back"
              onPress={onBackSignIn}
              bgColor="#E06A6A"
              fgColor="#FFEAEA"
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
  header: {
    // flexDirection: 'row',
    backgroundColor: '#E06A6A',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#E06A6A',
    borderRadius: 50,
    marginTop: 20,
    width: 300,
    height: 65,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    // fontWeight: '',
    fontSize: 30,
    color: '#FFEAEA',
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
  },
  OutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonCouple: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
  },
  OutButtonBottom: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
