import { ActionType } from '../action-types';
import { DataAction } from '../actions';

interface Countries {
  iso: string;
  name: string;
  prefix: string;
}

interface Operators {
  id: string;
  iso: string;
  name: string;
}

interface Products {
  id: string;
  products: string[];
}

interface APIDataState {
  loading: boolean;
  error: string | null;
  data: {
    countries: Countries[];
    operators: Operators[];
    products: Products[];
  };
}

const initialState = {
  loading: false,
  error: null,
  data: {
    countries: [],
    operators: [],
    products: [],
  },
};

const reducer = (
  state: APIDataState = initialState,
  action: DataAction
): APIDataState => {
  switch (action.type) {
    case ActionType.GET_API_DATA:
      return {
        loading: true,
        error: null,
        data: {
          countries: [],
          operators: [],
          products: [],
        },
      };
    case ActionType.GET_API_DATA_SUCCESS:
      return {
        loading: false,
        error: null,
        data: {
          countries: action.payload.countries,
          operators: action.payload.operators,
          products: action.payload.products,
        },
      };
    case ActionType.GET_API_DATA_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: {
          countries: [],
          operators: [],
          products: [],
        },
      };
    default:
      return state;
  }
};

export default reducer;
