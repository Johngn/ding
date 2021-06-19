import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';
import countriesReducer from './countriesReducer';

const reducers = combineReducers({
  apiData: apiDataReducer,
  country: countriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
