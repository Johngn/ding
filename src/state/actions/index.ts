import { ActionType } from '../action-types';

interface GetDataAction {
  type: ActionType.GET_API_DATA;
}

interface GetDataSuccessAction {
  type: ActionType.GET_API_DATA_SUCCESS;
  payload: any;
}

interface GetDataErrorAction {
  type: ActionType.GET_API_DATA_ERROR;
  payload: string;
}

export type DataAction =
  | GetDataAction
  | GetDataSuccessAction
  | GetDataErrorAction;

export interface CountryAction {
  type: ActionType.SUBMIT_COUNTRY;
  payload: {
    iso: string;
    name: string;
    prefix: string;
  };
}
export interface PhoneNumberAction {
  type: ActionType.SUBMIT_PHONE_NUMBER;
  payload: string;
}

export interface OperatorAction {
  type: ActionType.SUBMIT_OPERATOR;
  payload: string;
}
