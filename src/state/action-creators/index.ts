// import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {
  DataAction,
  CountryAction,
  PhoneNumberAction,
  OperatorAction,
  ProductAction,
} from '../actions';
import apidata from '../../ding-data.json';

export const getData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    dispatch({
      type: ActionType.GET_API_DATA,
    });

    try {
      // const { data } = await axios.get(
      //   `https://app.fakejson.com/q/xdOdc9ZF?token=${process.env.REACT_APP_API_KEY}`
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

    localStorage.setItem(
      'country',
      JSON.stringify({
        name: country.name,
        iso: country.iso,
        prefix: country.prefix,
      })
    );
  };
};

export const submitPhoneNumber = (phoneNumber: string) => {
  return (dispatch: Dispatch<PhoneNumberAction>) => {
    dispatch({
      type: ActionType.SUBMIT_PHONE_NUMBER,
      payload: phoneNumber,
    });

    localStorage.setItem('phoneNumber', phoneNumber);
  };
};

interface SelectedOperator {
  id: string;
  iso: string;
  name: string;
}

export const submitOperator = (operator: SelectedOperator) => {
  return (dispatch: Dispatch<OperatorAction>) => {
    dispatch({
      type: ActionType.SUBMIT_OPERATOR,
      payload: operator,
    });

    localStorage.setItem(
      'operator',
      JSON.stringify({
        id: operator.id,
        iso: operator.iso,
        name: operator.name,
      })
    );
  };
};

export const submitProduct = (product: string) => {
  return (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ActionType.SUBMIT_PRODUCT,
      payload: product,
    });

    localStorage.setItem('product', product);
  };
};
