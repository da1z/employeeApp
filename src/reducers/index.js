import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeCreateReducer from './EmployeeCreateReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeCreate: EmployeeCreateReducer,
  employeeList: EmployeeReducer
});
