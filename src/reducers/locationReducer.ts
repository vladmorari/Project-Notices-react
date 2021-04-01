import { GET_LOCATION } from "../actions/constants";
type DataState = {
  location: Object;
};
const initState: DataState = {
  location: {},
};
interface Action {
  type: string;
  payload: object;
}

export default function locationReducer(
  state: DataState = initState,
  action: Action
) {
  switch (action.type) {
    case GET_LOCATION: {
      return { ...state, location: action.payload };
    }
    default:
      return state;
  }
}
