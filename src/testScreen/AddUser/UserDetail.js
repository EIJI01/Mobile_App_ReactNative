import React, {Component} from 'react';
import {StyleSheet, ScrollView, ActivityIndicator, View} from 'react-native';
import firebase from '../../../database/firebaseDB';
import {
  ThemeProvider,
  ListItem,
  Badge,
  Image,
  Text,
  Button,
  Input,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class UserDetail extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ScrollView style={style.container}>
          <Input placeholder="Name" />
          <Input placeholder={'Email'} />
          <Input placeholder={'Mobile'} />
          <Button
            icon={<Icon name="wrench" size={15} color="#ffff" />}
            title={'   Update'}
            containerStyle={{marginTop: 10}}
            buttonStyle={{backgroundColor: 'green'}}
          />
          <Button
            icon={<Icon name="trash" size={15} color="#ffff" />}
            title={'   Delete'}
            containerStyle={{marginTop: 10}}
            buttonStyle={{backgroundColor: 'red'}}
          />
        </ScrollView>
      </ThemeProvider>
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
export default UserDetail;
