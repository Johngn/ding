import { ActionType } from '../action-types';
import { ProductAction } from '../actions';

interface ProductState {
  loading: boolean;
  error: string | null;
  selectedProduct: string;
}
const initialState = {
  loading: false,
  error: null,
  selectedProduct: '',
};

const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionType.SUBMIT_PRODUCT:
      return {
        loading: false,
        error: null,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
