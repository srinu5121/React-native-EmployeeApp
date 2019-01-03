const express = require('express');
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
// var SchemaList = require('./Model/index')
// var Routes = require('./Routes/index')
var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({
  name: {
    type: String,
    required :[true, "name is req"]
  },
  surname:String,
  DateofJoining: String,
  EmailId:String,
  Location:String,
  Department: String,
  Desgination: String,
  Age:Number,
  PhoneNo:String,
  Active:String,
});
var Employee = mongoose.model("employee", EmployeeSchema);
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/Mongodb/people', (req, res) => {
  console.log("Working123")
  Employee.find().then(function(emp){
    console.log(emp, "emp")
    res.send(emp)
  })
});
 // app.use('/api', Routes);
mongoose.connect("mongodb://127.0.0.1:27017/Ninjagoo",  { useNewUrlParser: true }).then(function(){
  console.log("connection is made")
});
mongoose.Promise = global.Promise;
const port = 5000;

app.listen(port, () => console.log(port))
