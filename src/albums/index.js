import React, { Component } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import Header from '@components/header';
import DrawerButton from '@drawerButton';

class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft: <DrawerButton />
  };

  render() {
    return (
      <View style={styles.flexCenter}>
        <Header>Welcome To Mobile Starter Kit</Header>
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
