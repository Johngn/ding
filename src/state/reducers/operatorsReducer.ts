import { ActionType } from '../action-types';
import { OperatorAction } from '../actions';

interface SelectedOperator {
  id: string;
  iso: string;
  name: string;
}

interface OperatorState {
  loading: boolean;
  error: string | null;
  selectedOperator: SelectedOperator;
}

const initialState = {
  loading: false,
  error: null,
  selectedOperator: {
    id: '',
    iso: '',
    name: '',
  },
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
