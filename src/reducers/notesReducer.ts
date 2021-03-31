import { GET_NOTES } from "../actions/constants";
type NotesState = {
  notes: Array<Object>;
};
const initState: NotesState = {
  notes: [],
};
interface Action {
  type: string;
  payload: { notes: Array<Object> };
}

export default function appReducer(
  state: NotesState = initState,
  action: Action
) {
  switch (action.type) {
    case GET_NOTES: {
      // console.log("notesReducer",action.payload );
      return { ...state, notes: action.payload };
    }

    default:
      return state;
  }
}
