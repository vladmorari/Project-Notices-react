import { IS_LOADING } from "./constants";

export const isLoadingAction = (value: boolean) => (dispatch: any) => {
  dispatch({
    type: IS_LOADING,
    payload: value,
  });
};
