import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default (DrawerButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
});
