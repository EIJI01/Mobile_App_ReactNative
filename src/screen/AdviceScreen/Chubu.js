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
import City from '../../../assets/images/Yamanashi.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Chubu = () => {
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
              <Text style={[style.text]}>Chubu</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Yamanashi</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    การปีนภูเขาไฟฟูจิ (3,776 เมตร) ซึ่งเป็นภูเขาที่สูงที่สุดและโดดเด่นที่สุดของญี่ปุ่น สามารถสร้างความทรงจำไปตลอดชีวิต ตัวภูเขาอาจดูน่าดึงดูดใจจากระยะไกลมากกว่าระยะใกล้ แต่ทิวทัศน์ในวันที่อากาศแจ่มใสและประสบการณ์การปีนเขาในช่วงเช้าตรู่ และในช่วงต้นเดือนกรกฎาคมถึงกลางเดือนกันยายนเป็นฤดูปีนเขาอย่างเป็นทางการเมื่อเส้นทางและสิ่งอำนวยความสะดวกบนภูเขาเปิดให้บริการ ในช่วงเวลานี้ภูเขามักจะไม่มีหิมะ อากาศค่อนข้างอบอุ่น การเข้าถึงโดยระบบขนส่งสาธารณะทำได้ง่าย และกระท่อมบนภูเขายังเปิดให้บริการ ขอแนะนำให้ใครก็ตามที่ไม่มีประสบการณ์การปีนเขามากนักให้พิชิตเขาในช่วงฤดูปีนเขาอย่างเป็นทางการ วันที่ที่ระบุขึ้นอยู่กับปีและเส้นทาง ในช่วงไม่กี่ปีที่ผ่านมามีการกำหนดดังนี้:
•        เส้นทางโยชิดะ: 1 กรกฎาคมถึง 10 กันยายน
•        เส้นทาง Subashiri, Gotemba และ Fujinomiya: 10 กรกฎาคมถึง 10 กันยายน`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`เส้นทางโยชิดะ: 1 กรกฎาคมถึง 10 กันยายน 
เส้นทาง Subashiri, Gotemba และ 
Fujinomiya: 10 กรกฎาคมถึง 10 กันยายน`}
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 20}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`ในช่วงฤดูปีนเขา นักปีนเขาจะถูกขอ
ให้บริจาคเงิน 1,000 เยนต่อคน`}
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
  buttonCouple: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
  },
});

export default Chubu;
