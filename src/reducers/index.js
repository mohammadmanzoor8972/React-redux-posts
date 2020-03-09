import React from "react";
import { INPROGRESS_POST, FAILED_POST, FETCH_POST } from "../actions";
import { combineReducers } from "redux";

const initialState = {
  status: "na",
  posts: []
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        status: "success",
        posts: action.payload
      };
    case INPROGRESS_POST:
      return {
        status: "inprogress"
      };
    case FAILED_POST:
      return {
        status: "failed"
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts: postReducer
});
