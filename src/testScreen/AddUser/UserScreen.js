import React, {Component} from 'react';
import {StyleSheet, ScrollView, ActivityIndicator, View} from 'react-native';
import {
  ThemeProvider,
  ListItem,
  Badge,
  Image,
  Text,
} from 'react-native-elements';

class UserScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={style.container}>
        <View>
          <Text>Hello From UserScreen</Text>
        </View>
      </ScrollView>
    );
  }
}

const theme = {
  Button: {
    raised: true,
  },
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default UserScreen;
