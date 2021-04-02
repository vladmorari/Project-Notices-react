import { IS_LOADING } from "../actions/constants";

const initState = {
  isLoading: false,
};
interface Action {
  type: string;
  payload: boolean;
}

export default function locationReducer(state = initState, action: Action) {
  switch (action.type) {
    case IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
}
