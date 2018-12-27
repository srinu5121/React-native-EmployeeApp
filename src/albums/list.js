import React, { Component } from 'react';
import styles from './styles.js';
import { Text, View, TouchableOpacity } from 'react-native';
import DrawerButton from '@drawerButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from 'react-navigation-drawer';

class Albums extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Albums'
  });

  render() {
    return (
      <View style={styles.flexCenter}>
        <Text style={[styles.header, styles.blackBorder]}>
          Welcome To Albums
        </Text>
      </View>
    );
  }
}

export default Albums;
