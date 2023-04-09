import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_3.png';
import City from '../../../assets/images/Sapporo.jpg';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Hokkaido = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.root}>
          <View style={style.Header}>
            <View
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Logo} style={[style.logo]} resizeMode="contain" />
            </View>

            <View style={[style.Box]}>
              <Text style={[style.text]}>Hokkaido</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Ishiya Chocolate Factory</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    Shiroi koibito park หรือที่คนไทยเรียกกันว่า โรงงานช็อกโกแลตฮอกไกโด ไม่ใช่โรงงานผลิตขนมจริงๆ นะ แต่เป็นธีมปาร์คที่มาในรูปแบบ สวนสนุกช็อกโกแลต แต่ใช้เดิมชื่อว่า Ishiya chocolate factory ตามชื่อบริษัท แต่เปลี่ยนมาเป็น Shiroi koibito park ตามผลิตภัณฑ์สุดฮิต ที่นี่มีกิจกรรมมากมาย สามารถมาเข้าชมการผลิตช็อกโกแลต ทดลองทำชิโรอิ โคอิบิโตะของตัวเอง เดินเล่นในสวนสไตล์อังกฤษ ชิมขนมที่มีขายเฉพาะที่นี่ ช้อปของฝากไม่ซ้ำใคร และยังมีจุดถ่ายภาพสวยๆ มากมาย ได้ทั้งประสบการณ์ ของฝาก รูปที่ระลึกเก๋ๆ และความประทับใจกลับไปเต็มเปี่ยม ไม่ว่าจะครอบครัวที่มากับเด็กๆ สายหวานผู้หลงรักในช็อกโกแลตและขนม สายถ่ายรูปที่กำลังหาที่แชะภาพสวยๆ หรือคนที่กำลังจัดแพลนเที่ยวฮอกไกโด ก็รับรองว่าสนุกสนานไม่ผิดหวัง`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                10:00 น. – 17:00 น.
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 20}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`มัธยมปลายขึ้นไป 1,500 เยน (มากกว่า 60 ปี 1,400 เยน) 
ประถมและมัธยมต้น 1,200 เยน (ต่ำกว่า 3 ปี เข้าฟรี)`}
              </Text>
            </View>
          </View>
          <View style={style.buttonCouple}>
            <CustomButton
              text="Back"
              onPress={() => navigation.navigate('HomeScreen')}
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
    alignItems: 'center',
    padding: 20,
  },
  buttonCouple: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
  },
  logo: {
    width: '70%',
    width: 130,
    height: 150,
  },
  City: {
    width: 400,
    height: 300,
    maxWidth: 400,
    maxHeight: 300,
  },
  Header: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Box: {
    margin: 10,
    width: 200,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#DD4D44',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },

  CityNameBox: {
    width: 250,
    height: 50,
    marginVertical: 5,

    backgroundColor: '#FAB5B5',
    justifyContent: 'center',
  },
  CityNameText: {
    color: '#E80F1C',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Location: {
    color: '#E80F1CB2',
    fontSize: 17,
    textAlign: 'center',
  },
  Info: {
    color: '#000000',
    fontSize: 16,
    marginTop: 20,
  },
  TimeAndPrice_Detail: {
    color: '#000000',
    fontSize: 12,
    paddingTop: 5,
  },
});

export default Hokkaido;
