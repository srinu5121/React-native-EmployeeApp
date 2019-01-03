import React, {Component} from "react";
import {View, Text, TouchableHighlight, StyleSheet, DatePickerAndroid, ScrollView} from "react-native";
// import styles1 from './styles.js';
import t from "tcomb-form-native";
var Form = t.form.Form;
var Deparments =  t.enums({
  Operations: 'Operations',
  Techincal: 'Techincal',
  Finance: "Finance",
  Sales: "Sales",
  Others:"Others"
});
// here we are: define your domain model
var Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string4
  designation:t.String,
  mailId:t.String,
  age: t.Number,               // a required number
  deparment: Deparments,
  phoneNumber:t.Number,
  location:t.String,
  birthDate: t.Date,
  DateofJoining: t.Date

});
var options = {
  fields: {
    birthDate: {
      mode: 'date' // display the Date field as a DatePickerAndroid
    },
    DateofJoining: {
      mode: 'date' // display the Date field as a DatePickerAndroid
    }
  }
};
export default class editEmployee extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Employee',
  });
  onPress() {
   // call getValue() to get the values of the form
   var value = this.refs.form.getValue();
   if (value) { // if validation fails, value will be null
     console.log(value);
      this.clearForm();
     this.props.navigation.goBack()
     // value here is an instance of Person
   }
 }
 clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  }
  render() {
    console.log("working like we think")
    return (
      <View style={styles.container}>
      <ScrollView>
      <Form
       ref="form"
       type={Person}
       options={options}
     />
     <TouchableHighlight style={styles.button} onPress = {()=>this.onPress() } underlayColor='#99d9f4'>
       <Text style={styles.buttonText}>Edit and Save</Text>
     </TouchableHighlight>
     </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
