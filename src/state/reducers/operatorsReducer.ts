import { ActionType } from '../action-types';
import { OperatorAction } from '../actions';

interface OperatorState {
  loading: boolean;
  error: string | null;
  selectedOperator: string;
}
const initialState = {
  loading: false,
  error: null,
  selectedOperator: '',
};

const reducer = (
  state: OperatorState = initialState,
  action: OperatorAction
): OperatorState => {
  switch (action.type) {
    case ActionType.SUBMIT_OPERATOR:
      return {
        loading: false,
        error: null,
        selectedOperator: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
