import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[style.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={style.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};
const style = StyleSheet.create({
  container: {
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 7,
  },
  input: {},
});
export default CustomInput;
