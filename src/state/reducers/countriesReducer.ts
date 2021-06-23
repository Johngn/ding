import { ActionType } from '../action-types';
import { CountryAction } from '../actions';

interface SelectedCountry {
  iso: string;
  name: string;
  prefix: string;
}

interface CountryState {
  selectedCountry: SelectedCountry;
}

const initialState = {
  selectedCountry: {
    iso: '',
    name: '',
    prefix: '',
  },
};

const reducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  switch (action.type) {
    case ActionType.SUBMIT_COUNTRY:
      return {
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
