import { ActionType } from '../action-types';
import { CountryAction } from '../actions';

interface SelectedCountry {
  iso: string;
  name: string;
  prefix: string;
}

interface CountryState {
  loading: boolean;
  error: string | null;
  selectedCountry: SelectedCountry;
}

const initialState = {
  loading: false,
  error: null,
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
        loading: false,
        error: null,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
