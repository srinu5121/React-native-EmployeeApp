import React, {Component} from "react";
import {View, Text, TouchableHighlight, StyleSheet, DatePickerAndroid, ScrollView, TextInput, FlatList} from "react-native";
import {Card, CardItem, Right } from "native-base";
import Dialog, { DialogContent, DialogButton, dialogAnimation, SlideAnimation } from 'react-native-popup-dialog';
import {GetData} from './actions';
import {connect} from "react-redux";

// import styles1 from './styles.js';
class AllEmployee extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:'',
      isLoading:true,
      value:''
      // init:this.props.Employee.data ?
    }
  }
componentWillMount(){
this.props.GetEmpData();
  }
  componentDidUpdate(){
    var isLoading = true;
    const data = this.props.Employee  && this.props.Employee.error ? this.props.Employee.error : this.props.Employee.data;
    if (this.state.isLoading === isLoading) {
      this.setState({
        isLoading: false,
        items: data
      });
    }

  }
  handleSearch(text){
    console.log("testing" , text)
    var updatedList = this.props.Employee.data;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        text.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
    //
    // const newData = this.props.Employees.data.filter(item => {
    //   const names = item.name ? item.name.toUpperCase() : '';
    //   const textData = text ? text.toUpperCase() : '';
    //   return names.indexOf(textData) > -1 || villages.indexOf(textData) > -1;
    // });
    //
    // this.setState({ items: newData, text });

  }
  handlePop(data){
    this.setState({value:data, visible:true})
  }
  handleUnShown(){
    this.setState({visible:false})
  }
  _renderItem = data => {
  console.log(data, "data")
		return (
      <View>
      <Card
				style={{
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 5,
					marginTop: 3,
					flexDirection: 'row'
				}}
			>
				<CardItem style={{ flex: 0.85 }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'center' }}>
								<Text style={{ color: '#157EFB', fontWeight: 'bold', fontSize: 15 }} onPress = {()=> this.handlePop(data)}>
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
  render() {
    console.log("EmployeeListing", this.props.Employee.data)
    // console.log(this.state.init, "initial")
    return (
      <View style={styles.container}>
      <Right>
    <Text style={{ color: '#157EFB', fontWeight: 'bold', fontSize: 15 }}>Total:{this.props.Employee.data ? this.props.Employee.data.length : null }</Text>
      </Right>
      <TextInput
        style={{height: 40, borderWidth:1, width:400, marginTop: 50}}
        placeholder="Search For Employees"
        onChangeText={(text) => this.handleSearch(text)}
      />
      <Dialog
    visible={this.state.visible}
    actions={[
      <DialogButton
        text="OK"
        onPress={() =>this.handleUnShown()}
      />
    ]}
  >
    <DialogContent>
    <View style={{width:150, height:100}}>
   <Text>{this.state.value ? this.state.value.name : null}</Text>
   </View>
    </DialogContent>
  </Dialog>
      {this.state.items ? (
        <FlatList
        data={this.state.items ? this.state.items : null}
        // keyExtractor={this._keyExtractor}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllEmployee)
