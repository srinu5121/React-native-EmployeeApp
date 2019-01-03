import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import {Card, CardItem} from "native-base";
import {GetData} from '../Employees/actions';
import {connect} from "react-redux";
class Events extends Component {
  render(){
    return(
      <View>
     <Text>Events</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  Employee: state.EmployeeList
});
const mapDispatchToProps = (dispatch) => ({
  GetEmpData: () => dispatch(GetData()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Events);
