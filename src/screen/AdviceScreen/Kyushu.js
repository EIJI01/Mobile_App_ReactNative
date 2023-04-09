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
import City from '../../../assets/images/Fukuoka.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Kyushu = () => {
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
              <Text style={[style.text]}>Kyushu</Text>
            </View>
          </View>

          <Image source={City} style={[style.City]} resizeMode="contain" />

          <View style={[style.CityNameBox]}>
            <Text style={[style.CityNameText]}>Tenmangu Shrine</Text>
          </View>

          <Text style={[style.Location]}>
            สถานที่ : เขตมินาโตะ, กรุงโตเกียว
          </Text>

          <Text style={[style.Info]}>
            {`                    ศาลเจ้าคิตาโนะ เท็นมังงู (Kitano Tenmangū) เป็นหนึ่งใน ศาลเจ้าที่สำคัญที่สุดในบรรดาศาลเจ้าหลายร้อยแห่งทั่วประเทศญี่ปุ่น ซึ่งอุทิศให้กับสุงาวาระ มิชิซาเนะ นักวิชาการและนักการเมืองที่ถูกคู่แข่งทางการเมืองเนรเทศอย่างไม่เป็นธรรม ภัยพิบัติหลายอย่างเกิดจากวิญญาณพยาบาทของ Michizane มิชิซาเนะชอบต้นบ๊วยและว่ากันว่าต้นไม้ต้นหนึ่งเรียกว่าโทบิอุเมะหรือต้นบ๊วยบินได้ติดตามเขาตั้งแต่เกียวโตจนถึงการลี้ภัยในคิวชู ด้วยเหตุนี้จึงมักพบต้นพลัมตั้งตระหง่านอยู่หน้าโถงบูชาของศาลเจ้าเท็นมังงุ นอกจากต้นโทบิอุเมะแล้ว Kitano Tenmangu ยังมีต้นพลัมเกือบ 2,000 ต้นที่บานสะพรั่งตั้งแต่เดือนกุมภาพันธ์ถึงมีนาคม ศาลเจ้าจัดพิธีชงชา แบบพิเศษ ที่เรียกว่า ไบคาไซ ในสวนบ๊วยแห่งนี้ทุกวันที่ 25 กุมภาพันธ์ โดยมีไมโกะและเกโกะจากเขตคามิชิจิเค็นเกโกะที่อยู่ใกล้เคียง เข้าร่วม คิตาโนะเท็นมังงุยังเป็นจุดชมใบไม้เปลี่ยนสี ยอดนิยม เนื่องจากศาลเจ้าเปิดสวนให้สาธารณชนเข้าชมในช่วงฤดูใบไม้เปลี่ยนสีสูงสุดตั้งแต่ปลายเดือนตุลาคมถึงต้นเดือนธันวาคม ต้นเมเปิลหลายร้อยต้นเรียงรายไปตามแม่น้ำของสวนและประดับไฟในตอนเย็น และจะมีตลาดนัดจะจัดขึ้นที่บริเวณศาลเจ้าและถนนรอบ ๆ ในวันที่ 25 ของทุกเดือน ผู้ค้าหลายร้อยรายที่จำหน่ายต้นไม้ ของเก่า เครื่องมือ ของเล่น และงานฝีมือ`}
          </Text>

          <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[style.Location]}>เวลาเปิดทำการ : </Text>
              <Text style={[style.TimeAndPrice_Detail]}>
                {`5:00 น. ถึง 18:00 น. (เมษายนถึงกันยายน)
5:30 น. ถึง 17:30 น. (ตุลาคมถึงมีนาคม)`}
              </Text>
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
    marginTop: 20,

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

export default Kyushu;
