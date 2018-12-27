import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import Welcome from '@albums';
import Albums from '@albums/list';
import DrawerButton from '@drawerButton';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#4285f4'
  },
  headerTitleStyle: {
    color: 'white'
  },
  headerTintColor: 'white',
  headerPressColorAndroid: 'white'
};

const AlbumStack = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Albums: { screen: Albums }
  },
  { defaultNavigationOptions }
);

const Drawer = createDrawerNavigator(
  {
    Albums: AlbumStack
  },
  { drawerType: 'back' }
);

export default createAppContainer(Drawer);
