import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { DataAction, CountryAction } from '../actions';

export const getData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    dispatch({
      type: ActionType.GET_API_DATA,
    });

    try {
      const { data } = await axios.get(
        'https://app.fakejson.com/q/xdOdc9ZF?token=M37SFqOXjnZXOBpUuOCRXA__00'
      );

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

export const submitCountry = (country: string) => {
  return (dispatch: Dispatch<CountryAction>) => {
    dispatch({
      type: ActionType.SUBMIT_COUNTRY,
      payload: country,
    });
  };
};
