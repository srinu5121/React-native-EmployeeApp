import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { withNavigation } from 'react-navigation';

const DrawerButton = ({ navigation }) => {
  return (
    <View>
      <Icon
        name="menu"
        style={styles.menuIcon}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default withNavigation(DrawerButton);
