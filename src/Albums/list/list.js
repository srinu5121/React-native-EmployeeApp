import React, { Component } from 'react';
import styles from '../styles.js';
import Header from '@components/header';
import { View, Text } from 'react-native';

class Albums extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Albums'
  });

  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      getAlbums: null
    };
  }

  componentDidMount = () => {
    this.props.getAlbums().then(getAlbums => {
      getAlbums && Object.keys(getAlbums).length
        ? this.setState({ getAlbums, loader: false })
        : this.setState({ getAlbums: null, loader: false });
    });
    // this.props.GetData()
  };

  render() {
    console.log(this.props.Albums, 'albums')
    const { loader, getAlbums } = this.state;

    let data;

    if (loader) data = <Text>Fetching Albums...</Text>;
    else if (!getAlbums) data = <Text>Albums Not Found</Text>;
    else if (getAlbums.error) data = <Text>{getAlbums.error}</Text>;
    else if (getAlbums.data)
      data = (
        <View>
          {getAlbums.data.map(i => (
            <Text>{i.title}</Text>
          ))}
        </View>
      );

    return (
      <View style={styles.flexCenter}>
        <Header>Welcome To Albums</Header>
        {data}
      </View>
    );
  }
}

export default Albums;
