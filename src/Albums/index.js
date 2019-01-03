import React, { Component } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import {Card, CardItem} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '@components/header';
import DrawerButton from '@drawerButton';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";

class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    headerLeft: <DrawerButton navigation={navigation} />
  });


  render() {
    return (
      <View style={styles.flexCenter}>
      <ScrollView>
      <Card style={{width:250}} >
      <CardItem>
          <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
          <Icon name="user-plus" size={30} color="#800" />
          <Text style={{marginLeft:25}} onPress= {() => this.props.navigation.navigate('Albums')}>Add Employee</Text>
       </View>
       </CardItem>
       </Card>
       <Card style={{width:250}}>
       <CardItem>
           <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
           <Icon name="user" size={30} color="#800" />
           <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('AllEmployee')}>Employees</Text>
        </View>
        </CardItem>
        </Card>
        <Card style={{width:250}}>
        <CardItem>
            <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
            <Icon name="user-o" size={30} color="#800" />
            <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('EditEmployee')}>Edit Employee</Text>
         </View>
         </CardItem>
         </Card>
        <Card style={{width:250}}>
        <CardItem>
            <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
            <Icon name="bookmark" size={30} color="#800" />
            <Text style={{marginLeft:25 }}>Events</Text>
         </View>
         </CardItem>
         </Card>
         <Card style={{width:250}}>
         <CardItem>
             <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
             <Icon name="users" size={30} color="#800" />
             <Text style={{marginLeft:25 }}>Meetings</Text>
          </View>
          </CardItem>
          </Card>
          <Card style={{width:250}}>
          <CardItem>
              <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
              <Icon name="sticky-note" size={30} color="#800" />
              <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('Department')}>Departments</Text>
           </View>
           </CardItem>
           </Card>
           <Card style={{width:250}}>
           <CardItem>
               <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
               <Icon name="calendar-plus-o" size={30} color="#800" />
               <Text style={{marginLeft:25 }}>Attendence</Text>
            </View>
            </CardItem>
            </Card>
       </ScrollView>
      </View>
    );
  }
}
class Home extends Component {
  constructor(){
    super();
    this.state = {
      name: ''
    }
  }
  handleVal(text){
    this.setState({name:text})
  }
  render() {
    return (
      <View style={styles.flexCenter}>
        <Text>Employee Search</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems:"center", marginTop:50}}>
        <TextInput
          style={{height: 40, width:350, borderWidth:1}}
          placeholder="Add To List!!"
          onChangeText={(text) => this.handleVal(text)}
        />
        <Button title = "Submit" style= {{width:50}} onPress = {()=> {}}/>
        </View>
      </View>
    );
  }
}
class Settings extends Component {
  render() {
    return (
      <View style={styles.flexCenter}>
        <Text>Settings</Text>
      </View>
    );
  }
}
class MiddleTab extends Component {
  render() {
    return (
      <View style={styles.flexCenter}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const BottomTab = createBottomTabNavigator({
  Home: {screen:Welcome,
    Notifications : {screen:MiddleTab,
      navigationOptions: {
           tabBarLabel: 'Home',
           tabBarIcon: ({ tintColor, focused }) => (
             <Icon
               name= 'ios-home'
               size={20}
               style={{ color: tintColor }}
             />
           ),
         },
       }
     },
  Settings: {screen:Settings,
    Notifications : {screen:MiddleTab,
      navigationOptions: {
           tabBarLabel: 'Settings',
           tabBarIcon: ({ tintColor, focused }) => (
             <Icon
               name={focused ? 'ios-settings' : 'md-settings'}
               size={20}
               style={{ color: tintColor }}
             />
           ),
         },
       }
     },
  Notifications : {screen:MiddleTab,
    navigationOptions: {
         tabBarLabel: 'Notifications',
         tabBarIcon: ({ tintColor, focused }) => (
           <Icon
             name={focused ? 'sticky-note' : 'sticky-note-o'}
             size={20}
             style={{ color: tintColor }}
           />
         ),
       },
     }
},{
  order: ['Home','Notifications' ,'Settings']
})

export default createAppContainer(BottomTab);
