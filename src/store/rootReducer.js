import { combineReducers } from 'redux';

import Albums from '@albums/list/reducers';
import EmployeeList from "@albums/Employees/reducers";
// Our app reducers
// We need to import each one here and add them to the combiner at the bottom

// Combine all
const rootReducer = combineReducers({
  Albums: Albums,
  EmployeeList:EmployeeList
});

export default rootReducer;
