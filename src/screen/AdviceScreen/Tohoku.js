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
import City from '../../../assets/images/Akita.jpg';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Tohoku = () => {
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
              <Text style={[style.text]}>Tohoku</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>
              Kakunodate Samurai District
            </Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    เมืองคะคุโนะดา ถือเป็นเมืองที่มีชื่อเสียงด้านประวัติศาสตร์ซึ่งมีการอนุรักษ์บ้านโบราณอายุกว่า 300 ปีของซามูไรในอดีตเอาไว้และได้เปิดเป็นแหล่งท่องเที่ยวสำคัญของเมือง หรือที่รู้จักกันในชื่อ หมู่บ้านซามูไร และเมืองแห่งนี้ยังได้รับฉายาว่าเป็น เกียวโตน้อย ของภูมิภาคโทโฮคุ อีกด้วย ตามบริเวณริมรั้วสองข้างถนนในย่านหมู่บ้านซามูไรก็ยังมีการปลูกต้นไม้ขนาดใหญ่ไว้ รวมถึงต้นซากุระพันธุ์ย้อย ที่จะผลิดอกในช่วงปลายเดือนเมษายนถึงต้นเดือนพฤษภาคม จึงนับเป็นจุดชมซากุระที่มีชื่อเสียงอีกแห่งหนึ่งของญี่ปุ่น และถ้าหากมาเที่ยวในช่วงฤดูใบไม้ร่วง ก็จะได้เห็นสีสันของใบไม้เปลี่ยนสีเป็นสีแดงส้มตัดกับบ้านเรือนโบราณซึ่งมีความสวยงามเป็นอย่างมาก`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`9:00 น. - 17:00 น. (เดือนธันวาคม-มีนาคม ปิด 16:00)
ปิดทำการ 28 ธันวาคม – 4 มกราคม`}
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 20}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>{`300 เยน`}</Text>
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
  buttonCouple: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
  },
  TimeAndPrice_Detail: {
    color: '#000000',
    fontSize: 12,
    paddingTop: 5,
  },
});

export default Tohoku;
