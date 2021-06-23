import { ActionType } from '../action-types';
import { OperatorAction } from '../actions';

interface SelectedOperator {
  id: string;
  iso: string;
  name: string;
}

interface OperatorState {
  selectedOperator: SelectedOperator;
}

const initialState = {
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
        selectedOperator: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
