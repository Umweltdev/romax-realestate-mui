import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  resetState,
} from "./userRedux";

import { publicRequest, updateTokenInHeaders } from "../requestMethods";

// LOGIN
export const login = async (dispatch, user, onSuccess, onError) => {
  dispatch(resetState());
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    const data = res.data;

    dispatch(loginSuccess(data));
    updateTokenInHeaders(data.accessToken);

    if (onSuccess) onSuccess(data);
  } catch (err) {
    const errorMessage =
      err?.response?.data?.message || "Something went wrong during login";
    dispatch(loginFailure(errorMessage));
    if (onError) onError(errorMessage);
  }
};

// REGISTER
export const register = async (dispatch, user, onSuccess, onError) => {
  dispatch(resetState());
  dispatch(registerStart());

  try {
    const res = await publicRequest.post("/auth/register", user);
    const data = res.data;

    dispatch(registerSuccess(data));

    // log the user in immediately if your backend returns accessToken
    if (data?.accessToken) {
      updateTokenInHeaders(data.accessToken);
      dispatch(loginSuccess(data));
    }

    if (onSuccess) onSuccess(data);
  } catch (err) {
    const errorMessage =
      err?.response?.data?.message || "Something went wrong during registration";
    dispatch(registerFailure(errorMessage));
    if (onError) onError(errorMessage);
  }
};
