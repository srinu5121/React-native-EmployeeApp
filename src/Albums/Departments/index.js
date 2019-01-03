import React, { Component } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import {Card, CardItem} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Department extends Component {
  render() {
    return (
      <View style={styles.flexCenter}>
      <ScrollView>
      <Card style={{width:250}} >
      <CardItem>
          <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
           <Icon name="user" size={30} color="#800" />
          <Text style={{marginLeft:25}} onPress={() => this.props.navigation.navigate('DepEmployee', {
              itemId: "Technical"
            })}>Technical</Text>
       </View>
       </CardItem>
       </Card>
       <Card style={{width:250}}>
       <CardItem>
           <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
           <Icon name="user" size={30} color="#800" />
           <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('DepEmployee',  {
               itemId: "Operations"
             })}>Operations</Text>
        </View>
        </CardItem>
        </Card>
        <Card style={{width:250}}>
        <CardItem>
            <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
             <Icon name="user" size={30} color="#800" />
            <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('DepEmployee',  {
                itemId: "Finance"
              })}>Finance</Text>
         </View>
         </CardItem>
         </Card>
        <Card style={{width:250}}>
        <CardItem>
            <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
           <Icon name="user" size={30} color="#800" />
            <Text style={{marginLeft:25 }}  onPress = {() => this.props.navigation.navigate('DepEmployee',
            {
                itemId: "Sales"
              })}>Sales</Text>
         </View>
         </CardItem>
         </Card>
         <Card style={{width:250}}>
         <CardItem>
             <View style={{flex: 1, flexDirection: 'row', padding:10, alignItems:"center"}}>
             <Icon name="user" size={30} color="#800" />
             <Text style={{marginLeft:25 }} onPress = {() => this.props.navigation.navigate('DepEmployee',{
                 itemId: "Others"
               } )}>Others</Text>
          </View>
          </CardItem>
          </Card>
       </ScrollView>
      </View>
    );
  }
}
