import jsonplaceholder from "../services/jsonplaceholder";

export const FETCH_POST = "FETCH_POST";
export const FAILED_POST = "FAILED_POST";
export const INPROGRESS_POST = "INPROGRESS_POST";

export function fetchPost(response) {
  return {
    type: FETCH_POST,
    payload: response.data
  };
}

export function fetchPostInprogress() {
  return {
    type: INPROGRESS_POST
  };
}

export function fetchPostFailed() {
  return {
    type: FAILED_POST
  };
}
