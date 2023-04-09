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
import City from '../../../assets/images/Tokyo.jpg';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Kanto = () => {
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
              <Text style={[style.text]}>Kanto</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Tokyo Tower</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    ถูกสร้างขึ้นในปี 1958 มีความสูง 333 เมตร เป็นสัญลักษณ์ของการฟื้นฟูโตเกียวหลังสงคราม  สร้างเสร็จในเวลาเพียง 1 ปีครึ่งโดยงานส่วนใหญ่เป็นงานที่ทำด้วยมือ ปัจจุบันมันยังคงเป็นสถานที่ท่องเที่ยวและจุดถ่ายรูปยอดนิยมสำหรับนักท่องเที่ยว จุดชมวิวทั้ง 2 ชั้นสามารถมองเห็นทัศนียภาพของโตเกียวได้ทั่วทั้งเมือง นอกจากนี้ ยังมีอาคารสูง 4 ชั้นที่ตั้งอยู่ใต้หอคอยอันเป็นสถานที่รวบรวมแหล่งช้อปปิ้ง, ร้านอาหาร และความบันเทิงต่างๆ ให้นักท่องเที่ยวได้เพลิดเพลินอีกด้วย`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                9:00 น. - 22:30 น.
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 20}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`1,200 เยน (เฉพาะดาดฟ้าหลัก)
3,000 เยน (ทั้งสองชั้น, 2,800 เยน หากซื้อล่วงหน้า)`}
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

export default Kanto;
