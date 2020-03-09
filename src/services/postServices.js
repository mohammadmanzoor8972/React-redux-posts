import jsonplaceholder from "./jsonplaceholder";
import { fetchPost, fetchPostInprogress } from "../actions";

export function fetchPostAPI() {
  return async function(dispatch, status) {
    dispatch(fetchPostInprogress());
    const response = await jsonplaceholder.get("/posts");
    dispatch(fetchPost(response));
  };
}

export const deletePostAPI = () => async dispatch => {
  dispatch(fetchPostInprogress());
  const response = await jsonplaceholder.delete("/posts");
  dispatch(fetchPost(response));
};
