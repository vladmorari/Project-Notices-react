import * as req from "../components/requests";
import { GET_LOCATION } from "./constants";

export const actionGetLocation = () =>(dispatch: any) => {
  req
    .getLocation()
    .then((res) => {
      dispatch({
        type: GET_LOCATION,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
