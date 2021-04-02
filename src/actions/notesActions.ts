import * as req from "../components/requests";
import { GET_NOTES } from "./constants";

export const actionGetNotes = () =>(dispatch: any) => {
  req.getNotices().then((res) => {
    dispatch({
      type: GET_NOTES,
      payload: res,
    });
  });
};
