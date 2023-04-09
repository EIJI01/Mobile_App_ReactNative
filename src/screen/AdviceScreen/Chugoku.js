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
import City from '../../../assets/images/Hiroshima.jpg';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
const Chugoku = () => {
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
              <Text style={[style.text]}>Chugoku</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Itsukushima Shrine</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    ศาลเจ้า Itsukushima ที่มีอายุหลายศตวรรษ (Itsukushima Jinja) บนMiyajimaเป็นที่มาของทั้งชื่อเสียงและชื่อของเกาะ เกาะนี้มีชื่ออย่างเป็นทางการว่าอิตสึคุชิมะ หรือที่รู้จักกันแพร่หลายในชื่อ "มิยาจิมะ" ซึ่งแปลว่า "เกาะศาลเจ้า" ในภาษาญี่ปุ่นต้องขอบคุณสถานที่ท่องเที่ยวที่เป็นดาวเด่น ศาลเจ้าแห่งนี้เป็นที่รู้จักไปทั่วโลกจากประตูโทริอิ "ลอยน้ำ" อันเป็นสัญลักษณ์ เกาะมิยาจิมะมีประวัติศาสตร์อันยาวนานในฐานะสถานที่ศักดิ์สิทธิ์ของลัทธิชินโต ภูเขามิเซนยอดเขาที่สูงที่สุดของเกาะเป็นที่เคารพบูชาของคนในท้องถิ่นตั้งแต่ช่วงต้นศตวรรษที่ 6 ในปี ค.ศ. 1168 ไทระ โนะ คิโยโมริ ชายผู้ทรงอิทธิพลที่สุดในญี่ปุ่นในช่วงปลายยุคเฮอัน ได้เลือกเกาะแห่งนี้เป็นที่ตั้งของศาลเจ้าประจำตระกูลของเขาและสร้างศาลเจ้าอิสึกุชิมะขึ้น ศาลเจ้าตั้งอยู่ในทางเข้าเล็กๆ ในขณะที่ประตูโทริอิตั้งอยู่ในทะเลเซโตะใน ทางเดินทอดยาวไปรอบๆ ปากน้ำ และนักท่องเที่ยวก็เพลิดเพลินกับการเดินเล่นไปพร้อมกับมองออกไปที่ทะเล หลังพระอาทิตย์ตกดิน ศาลเจ้าและประตูโทริอิจะประดับไฟทุกวันจนถึงเวลา 23:00 น. เป็นฉากหลังที่สมบูรณ์แบบ นักท่องเที่ยวสามารถชมเกาะประดับไฟได้จากการล่องเรือ การล่องเรือใช้เวลา 30 นาที ราคา 1,600 เยน และพาผู้โดยสารไปรอบๆ อ่าวและไปยังประตูโทริอิ ต้องจองล่วงหน้าและสามารถจองผ่านเรียวกังหรือที่โต๊ะบริการข้อมูลนักท่องเที่ยว`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`6:30 น. ถึง 18:00 น. (มีนาคม ถึง 14 ตุลาคม)
6:30 น. ถึง 17:30 น. 
(มกราคม กุมภาพันธ์ และ 15 ตุลาคม ถึง พฤศจิกายน)
6:30 น. ถึง 17:00 น. (ธันวาคม)`}
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 2}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`300 เยน (500 เยนสำหรับการเข้ารวมกับ Treasure Hall)`}
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

export default Chugoku;
