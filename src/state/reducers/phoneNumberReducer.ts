import { ActionType } from '../action-types';
import { PhoneNumberAction } from '../actions';

interface PhoneNumberState {
  selectedPhoneNumber: string;
}
const initialState = {
  selectedPhoneNumber: '',
};

const reducer = (
  state: PhoneNumberState = initialState,
  action: PhoneNumberAction
): PhoneNumberState => {
  switch (action.type) {
    case ActionType.SUBMIT_PHONE_NUMBER:
      return {
        selectedPhoneNumber: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
