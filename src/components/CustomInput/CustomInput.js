import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={style.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;
