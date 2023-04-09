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
import City1 from '../../../assets/images/Hyogo.jpg';
import City2 from '../../../assets/images/Kyoto.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Kansai = () => {
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
              <Text style={[style.text]}>Kansai</Text>
            </View>
          </View>

          <Image source={City1} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Himeji Castle</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    ปราสาทฮิเม หรือที่เรียกว่าปราสาทนกกระสาขาว เนื่องจากรูปลักษณ์ที่สง่างามสีขาว จึงได้รับการพิจารณาอย่างกว้างขวางว่าเป็น ปราสาทที่งดงามที่สุดของญี่ปุ่น ปราสาทแห่งนี้เป็นทั้งสมบัติของชาติและมรดกโลก แตกต่างจากปราสาทอื่นๆ ในญี่ปุ่น ปราสาทถูกสร้างเสร็จในปี 1400 และค่อยๆ ขยายใหญ่ขึ้นตลอดหลายศตวรรษโดยกลุ่มต่างๆ ที่ปกครองภูมิภาคนี้ คอมเพล็กซ์ของปราสาทที่ยังหลงเหลืออยู่ในปัจจุบันสร้างเสร็จในปี 1609 ประกอบด้วยอาคารกว่า 80 หลังกระจายอยู่ตามทางเดินหลายชั้น ผู้เข้าชมเข้าสู่หอหลักผ่านทางเข้าในชั้นล่างของอาคารและปีนขึ้นไปโดยใช้บันไดแคบ ๆ สูงชัน แต่ละระดับจะเล็กลงเรื่อย ๆ เมื่อคุณขึ้นไป พื้นโดยทั่วไปไม่ได้ตกแต่ง ชั้นบนสุดเป็นที่ตั้งของศาลเจ้าขนาดเล็กและให้ผู้เยี่ยมชมมองออกไปได้ทุกทิศทาง ลงมา จากหลังคา มีการป้องกันเหมือนเขาวงกตและออกไปทั่วเมืองฮิเมจิ คุณยังสามารถชมเครื่องประดับหลังคารูปปลาอย่างใกล้ชิดซึ่งเชื่อกันว่าป้องกันไฟได้ หลังจากออกจากหอแล้ว ผู้เข้าชมสามารถกลับไปที่ประตูทางเข้าได้ ก่อนออกจากพื้นที่ที่ต้องชำระเงิน พวกเขามีตัวเลือกในการสำรวจเบลีย์เพิ่มเติมหนึ่งหลัง นั่นคือ เวสต์เบลีย์ (นิชิโนะมารุ) ซึ่งทำหน้าที่เป็นที่ประทับของเจ้าหญิงและให้ทัศนียภาพของหอหลักจากมุมมองที่ต่างออกไป`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                9:00 น. - 17:00 น. ปิดวันที่ 29 และ 30 ธันวาคม
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}, {marginTop: 20}]}>
              <Text style={[style.Location]}>ค่าเข้า : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`1,000 เยน (เฉพาะปราสาท)
1,050 เยน (ปราสาทและสวน Kokoen ที่อยู่ใกล้เคียง)`}
              </Text>
            </View>
          </View>

          <Image source={City2} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Fushimi Inari Taisha</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    ศาลเจ้าฟุชิมิอินาริ(Fushimi Inari Taisha) เป็นศาลเจ้าชินโต ที่สำคัญ ทางตอนใต้ของเกียวโต มีชื่อเสียงจากเสาโทริอิสีแดง สดนับพันต้น ซึ่งทอดยาวไปตามทางเดินด้านหลังอาคารหลัก เส้นทางนี้นำไปสู่ป่าอันร่มรื่นของภูเขาอินาริอันศักดิ์สิทธิ์ ซึ่งสูง 233 เมตรและเป็นพื้นที่ของศาลเจ้า Fushimi Inari เป็นศาลเจ้าที่สำคัญที่สุดในบรรดาศาลเจ้าหลายพันแห่งที่อุทิศให้กับ Inari เทพเจ้า แห่งข้าวในศาสนา นักท่องเที่ยวชาวต่างชาติส่วนใหญ่เดินทางมาที่ศาลเจ้าฟุชิมิอินาริก็เพื่อสำรวจเส้นทางบนภูเขา และก็มีตัวอาคารของศาลเจ้าที่มีเสน่ห์ ตรงทางเข้า ศาลเจ้ามีประตูโรมอนซึ่งบริจาคในปี 1589 โดยโทโยโทมิ ฮิเดโยชิ ผู้นำที่มีชื่อเสียง ด้านหลังมีห้องโถงใหญ่ ของศาลเจ้า (ฮอนเด็น) ซึ่งผู้เข้าชมทุกคนได้รับการสนับสนุนให้กราบไหว้เทพเจ้าที่สถิตอยู่ด้วยการถวายของเล็กน้อย`}
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
  buttonCouple: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 100,
    padding: 3,
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

export default Kansai;
