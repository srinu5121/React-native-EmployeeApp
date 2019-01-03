import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import Welcome from '@albums';
import Albums from '@albums/list';
import AllEmployee from "@albums/Employees/AllEmployee";
import EditEmployee from "@albums/editEmployee";
import Department from "@albums/Departments/index"
import DrawerButton from '@drawerButton';
import DepEmployee from '@albums/Departments/DepartbasedEmp';
import Events from "@albums/Events/index"

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
    Albums: { screen: Albums },
    AllEmployee:{screen: AllEmployee},
    EditEmployee:{screen: EditEmployee},
    Department:{screen:Department},
    DepEmployee: {screen: DepEmployee},
    Events:{screen:Events}
  },
  { defaultNavigationOptions }
);

const Drawer = createDrawerNavigator(
  {
    Albums: AlbumStack
  },
  { drawerType: 'back' }
);

export default createAppContainer(Drawer)
