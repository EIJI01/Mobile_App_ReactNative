import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        style.container,
        style[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          style.text,
          style[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 15,
    borderRadius: 20,
  },
  container_PRIMARY: {
    backgroundColor: '#E06A6A',
  },
  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});
export default CustomButton;
