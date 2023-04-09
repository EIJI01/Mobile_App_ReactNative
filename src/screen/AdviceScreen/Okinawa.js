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
import City from '../../../assets/images/Okinawa.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
const Okinawa = () => {
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
              <Text style={[style.text]}>Okinawa</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Ishigaki Island</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    เกาะอิชิงากิ (Ishigakijima) เป็นเกาะหลักของหมู่เกาะยาเอยามะและเป็นศูนย์กลางการขนส่งของภูมิภาค เมืองอิชิงากิ เมืองทางใต้สุดของญี่ปุ่น เป็นเมืองศูนย์กลางแห่งเดียวของหมู่เกาะยาเอยามะ และเป็นที่ตั้งของ สนามบิน และท่าเรือ ข้ามฟากที่สำคัญของภูมิภาคตลอดจนโรงแรม ร้านค้า ร้านอาหาร และบาร์มากมาย อิชิงากิมีชายหาด ที่สวยงามหลายแห่ง มี จุดดำน้ำตื้นและดำน้ำลึกที่ดีในแนวปะการังโดยรอบ สามารถเพลิดเพลินกับการดำน้ำตื้นได้ที่ชายหาดเกือบทุกแห่งบนเกาะ ในขณะที่มีบริการดำน้ำตามร้านดำน้ำมากมายพร้อมบริการทัวร์สำหรับทุกระดับประสบการณ์ ไฮไลท์ของการดำน้ำคือ Manta Scramble ใกล้อ่าวคาบิระซึ่งมีกระเบนราหูรวมตัวกันเป็นจำนวนมาก`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>เปิดตลอดเวลา</Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 20}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>ฟรี</Text>
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
  buttonCouple: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
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

export default Okinawa;
