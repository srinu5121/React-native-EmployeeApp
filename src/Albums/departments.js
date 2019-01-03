import React, { Component } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import {Card, CardItem} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

class Department extends Component {
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
          <Text style={{marginLeft:25}} onPress={() => this.props.navigation.navigate('AllEmployee')}>Technical</Text>
       </View>
       </CardItem>
       </Card>
       <Card style={{width:250}}>
       <CardItem>
           <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
           <Icon name="user" size={30} color="#800" />
           <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('Albums')}>Operations</Text>
        </View>
        </CardItem>
        </Card>
        <Card style={{width:250}}>
        <CardItem>
            <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
            <Icon name="user-o" size={30} color="#800" />
            <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('EditEmployee')}>Finance</Text>
         </View>
         </CardItem>
         </Card>
        <Card style={{width:250}}>
        <CardItem>
            <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
            <Icon name="bookmark" size={30} color="#800" />
            <Text style={{marginLeft:25 }}>Sales</Text>
         </View>
         </CardItem>
         </Card>
         <Card style={{width:250}}>
         <CardItem>
             <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
             <Icon name="users" size={30} color="#800" />
             <Text style={{marginLeft:25 }}>Others</Text>
          </View>
          </CardItem>
          </Card>
       </ScrollView>
      </View>
    );
  }
}
