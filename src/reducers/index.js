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
    case "DELETE_POST":
      console.log(action.payload, "alam**");
      return {
        posts: [...state.posts].filter(item => item.id !== action.payload)
      };

    case "FAILED_DELETE_POST":
      return {
        posts: [action.payload, ...state.posts].sort((x, y) => x.id - y.id)
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts: postReducer
});
