import jsonplaceholder from "./jsonplaceholder";
import {
  fetchPost,
  fetchPostInprogress,
  fetchPostFailed,
  deletePost,
  deletePostFailed
} from "../actions";
import Axios from "axios";

const url = "https://jsonplaceholder.typicode.com";
export function fetchPostAPI() {
  return async function(dispatch, status) {
    dispatch(fetchPostInprogress());
    const response = await jsonplaceholder.get("/posts");
    setTimeout(() => {
      if (response.status === 404) {
        dispatch(fetchPostFailed());
      }
      dispatch(fetchPost(response));
    }, 1000);
  };
}

export const deletePostAPI = item => async dispatch => {
  const post = item;
  dispatch(deletePost(post.id));
  const response = await Axios.delete(url + "/posts/" + post.id);
  if (response.status === 200) {
    dispatch(deletePostFailed(post));
  }
};
