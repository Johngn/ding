import { ActionType } from '../action-types';
import { ProductAction } from '../actions';

interface ProductState {
  selectedProduct: string;
}
const initialState = {
  selectedProduct: '',
};

const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionType.SUBMIT_PRODUCT:
      return {
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
