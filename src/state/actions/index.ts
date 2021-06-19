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
  payload: string;
}
