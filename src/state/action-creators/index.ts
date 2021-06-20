// import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {
  DataAction,
  CountryAction,
  PhoneNumberAction,
  OperatorAction,
} from '../actions';
import apidata from '../../ding-data.json';

export const getData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    dispatch({
      type: ActionType.GET_API_DATA,
    });

    try {
      // const { data } = await axios.get(
      //   `https://app.fakejson.com/q/xdOdc9ZF?token=${process.env.REACT_APP_API_KEY}000`
      // );

      const data = apidata;

      dispatch({
        type: ActionType.GET_API_DATA_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({
        type: ActionType.GET_API_DATA_ERROR,
        payload: err.message,
      });
    }
  };
};

interface SelectedCountry {
  iso: string;
  name: string;
  prefix: string;
}

export const submitCountry = (country: SelectedCountry) => {
  return (dispatch: Dispatch<CountryAction>) => {
    dispatch({
      type: ActionType.SUBMIT_COUNTRY,
      payload: country,
    });
  };
};

export const submitPhoneNumber = (phoneNumber: string) => {
  return (dispatch: Dispatch<PhoneNumberAction>) => {
    dispatch({
      type: ActionType.SUBMIT_PHONE_NUMBER,
      payload: phoneNumber,
    });
  };
};

export const submitOperator = (operator: string) => {
  return (dispatch: Dispatch<OperatorAction>) => {
    dispatch({
      type: ActionType.SUBMIT_OPERATOR,
      payload: operator,
    });
  };
};
