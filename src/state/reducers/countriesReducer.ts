import { ActionType } from '../action-types';
import { CountryAction } from '../actions';

interface CountryState {
  loading: boolean;
  error: string | null;
  selectedCountry: string;
}

const initialState = {
  loading: false,
  error: null,
  selectedCountry: '',
};

const reducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  switch (action.type) {
    case ActionType.SUBMIT_COUNTRY:
      return {
        loading: false,
        error: null,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
