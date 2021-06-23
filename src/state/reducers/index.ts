import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';
import countriesReducer from './countriesReducer';
import phoneNumberReducer from './phoneNumberReducer';
import operatorsReducer from './operatorsReducer';
import productsReducer from './productsReducer';

const reducers = combineReducers({
  apiData: apiDataReducer,
  country: countriesReducer,
  phoneNumber: phoneNumberReducer,
  operator: operatorsReducer,
  product: productsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
