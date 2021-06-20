import { ActionType } from '../action-types';
import { PhoneNumberAction } from '../actions';

interface PhoneNumberState {
  loading: boolean;
  error: string | null;
  selectedPhoneNumber: string;
}
const initialState = {
  loading: false,
  error: null,
  selectedPhoneNumber: '',
};

const reducer = (
  state: PhoneNumberState = initialState,
  action: PhoneNumberAction
): PhoneNumberState => {
  switch (action.type) {
    case ActionType.SUBMIT_PHONE_NUMBER:
      return {
        loading: false,
        error: null,
        selectedPhoneNumber: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
