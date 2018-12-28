import React, { Component } from 'react';
import styles from './styles.js';
import { Text } from 'react-native';

class Header extends Component {
  render() {
    return (
      <Text style={[styles.header, styles.blackBorder]}>
        {this.props.children}
      </Text>
    );
  }
}

export default Header;
