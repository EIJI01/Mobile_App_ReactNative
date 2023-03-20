import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Link = ({onPress, nameLink, fgColor}) => {
  return (
    <View style={[style.container]}>
      <Text
        onPress={onPress}
        style={{
          color: fgColor,
          textDecorationLine: 'underline',
        }}>
        {nameLink}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAEA',
    marginVertical: 3,
    textAlign: 'center',
  },
  container_PRIMARY: {},
});
export default Link;
