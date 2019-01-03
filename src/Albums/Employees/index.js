import { connect } from 'react-redux';

import * as albumAction from './actions';

import EmployeeList from './AllEmployee';

const mapStateToProps = state => ({
  Employee: state.EmployeeList
});

const mapDispatchToProps =  {
  GetEmpData: albumAction.GetData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
