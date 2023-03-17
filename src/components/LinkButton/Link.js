import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Link = ({nameLink, onPress}) => {
  return (
    <View style={style.container}>
      <Text onPress={onPress} style={style.text}>
        {nameLink}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAEA',
    marginVertical: 3,
  },
  text: {
    textAlign: 'center',
  },
});
export default Link;
