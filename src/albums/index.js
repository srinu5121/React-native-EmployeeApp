import React, { Component } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import DrawerButton from '@drawerButton';

class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    headerLeft: <DrawerButton navigation={navigation} />
  });

  render() {
    return (
      <View style={styles.flexCenter}>
        <Text style={[styles.header, styles.blackBorder]}>
          Welcome To Mobile Starter Kit
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Albums')}
          title="Go to Albums"
          color="#4285f4"
        />
      </View>
    );
  }
}

export default Welcome;
