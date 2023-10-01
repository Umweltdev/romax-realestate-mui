import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux"
import {
  addTimelineFailure,
  addTimelineStart,
  addTimelineSuccess,
  deleteTimelineFailure,
  deleteTimelineStart,
  deleteTimelineSuccess,
  getTimelineFailure,
  getTimelineStart,
  getTimelineSuccess,
  updateTimelineFailure,
  updateTimelineStart,
  updateTimelineSuccess
} from "./timelineRedux";
import {
  addUsersFailure,
  addUsersStart,
  addUsersSuccess,
  deleteUsersFailure,
  deleteUsersStart,
  deleteUsersSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  updateUsersFailure,
  updateUsersStart,
  updateUsersSuccess
} from "./usersRedux";
import {
  addEstateFailure,
  addEstateStart,
  addEstateSuccess,
  deleteEstateFailure,
  deleteEstateStart,
  deleteEstateSuccess,
  getEstateFailure,
  getEstateStart,
  getEstateSuccess,
  updateEstateFailure,
  updateEstateStart,
  updateEstateSuccess
} from "./estateRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getTimeline = async (dispatch) => {
  dispatch(getTimelineStart());
  try {
    const res = await publicRequest.get("/timeline");
    dispatch(getTimelineSuccess(res.data));
  } catch (err) {
    dispatch(getTimelineFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const getEstates = async (dispatch) => {
  dispatch(getEstateStart());
  try {
    const res = await publicRequest.get("/estate");
    dispatch(getEstateSuccess(res.data));
  } catch (err) {
    dispatch(getEstateFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const deleteTimeline = async (id, dispatch) => {
  dispatch(deleteTimelineStart());
  try {
    const res = await userRequest.delete(`/timeline/${id}`);
    dispatch(deleteTimelineSuccess(res.data));
  } catch (err) {
    dispatch(deleteTimelineFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUsersSuccess(res.data));
  } catch (err) {
    dispatch(deleteUsersFailure());
  }
};

export const deleteEstate = async (id, dispatch) => {
  dispatch(deleteEstateStart());
  try {
    const res = await userRequest.delete(`/estate/${id}`);
    dispatch(deleteEstateSuccess(res.data));
  } catch (err) {
    dispatch(deleteEstateFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const updateTimeline = async (id, timeline, dispatch) => {
  dispatch(updateTimelineStart());
  try {
    // update
    dispatch(updateTimelineSuccess({ id, timeline }));
  } catch (err) {
    dispatch(updateTimelineFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUsersStart());
  try {
    // update
    dispatch(updateUsersSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUsersFailure());
  }
};

export const updateEstate = async (id, estate, dispatch) => {
  dispatch(updateEstateStart());
  try {
    // update
    dispatch(updateEstateSuccess({ id, estate }));
  } catch (err) {
    dispatch(updateEstateFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const addTimeline = async (timeline, dispatch) => {
  dispatch(addTimelineStart());
  try {
    const res = await userRequest.post(`/timeline`, timeline);
    dispatch(addTimelineSuccess(res.data));
  } catch (err) {
    dispatch(addTimelineFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUsersStart());
  try {
    const res = await userRequest.post(`/users`, user);
    dispatch(addUsersSuccess(res.data));
  } catch (err) {
    dispatch(addUsersFailure());
  }
};

export const addEstate = async (user, dispatch) => {
  dispatch(addEstateStart());
  try {
    const res = await userRequest.post(`/estate`, user);
    dispatch(addEstateSuccess(res.data));
  } catch (err) {
    dispatch(addEstateFailure());
  }
};