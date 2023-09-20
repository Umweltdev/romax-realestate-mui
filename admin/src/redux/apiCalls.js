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
import { addTimelineFailure, addTimelineStart, addTimelineSuccess, deleteTimelineFailure, deleteTimelineStart, deleteTimelineSuccess, getTimelineFailure, getTimelineStart, getTimelineSuccess, updateTimelineFailure, updateTimelineStart, updateTimelineSuccess } from "./timelineRedux";

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
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteTimelineSuccess(res.data));
  } catch (err) {
    dispatch(deleteTimelineFailure());
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