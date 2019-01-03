import React, { Component } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Button, ScrollView, TextInput, FlatList } from 'react-native';
import {Card, CardItem} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {GetData} from '../Employees/actions'


class Department extends Component {
  constructor(){
    super();
    this.state = {
      data: null
    }
    // this.handleArray = this.handleArray.bind(this);
  }
  componentWillMount(){
    this.props.GetEmpData();
  }
  _renderItem = data => {
  console.log(data, "data")
		return (
      <View>
      <Card style ={{width:350}}>
				<CardItem>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'center' }}>
								<Text style={{ color: '#157EFB', fontWeight: 'bold', fontSize: 15 }}>
									Name: {data && data.item ? data.item.name: null}
								</Text>
                <Text style={{ color: '#157EFB', fontWeight: 'bold', fontSize: 15 }}>
									Designation: {data && data.item ? data.item.Desgination: null}
								</Text>
							</View>
						</View>
				</CardItem>
			</Card>
      </View>
		);
  }
  // handleArray(Arr){
  //   console.log(Arr, "arr", "working")
  //   this.setState({data:Arr})
  // {"-"}{Arr ? Arr.length : null} people
  // }
  _keyExtractor = (item, index) => item._id;
  render() {
    let Data = this.props.Employee.data
    let Arr = []
    console.log("EmployeeList", Data)
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const item = itemId.toString()
    console.log(item, "itemId")
    let EmpBased = Data ? Data.map((item)=> item.Department == itemId ? Arr.push(item) : null ) : null
    // if(Arr.length>0 ) {
    //    this.handleArray(Arr)
    // }
     console.log(EmpBased, "Empbased123")
     console.log(Arr, "arr125")
    return (
      <View style={styles.flexCenter}>
      <Text style={{ color: '#157EFB', fontWeight: 'bold', fontSize: 13 }}>{itemId}{"-"}{Arr ? Arr.length : null} people</Text>
      {this.props.Employee ? (
        <FlatList
        data={Arr ? Arr : null}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
      ): null}
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
export default connect(mapStateToProps, mapDispatchToProps)(Department)
