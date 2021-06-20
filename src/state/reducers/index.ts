import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';
import countriesReducer from './countriesReducer';
import phoneNumberReducer from './phoneNumberReducer';
import operatorsReducer from './operatorsReducer';

const reducers = combineReducers({
  apiData: apiDataReducer,
  country: countriesReducer,
  phoneNumber: phoneNumberReducer,
  operator: operatorsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
