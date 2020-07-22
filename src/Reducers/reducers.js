import { combineReducers } from "redux";
import isEmpty from "../validation/is-empty";
import _ from "lodash";
import { reducer as FormReducer } from "redux-form";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const ReducerAuthenticate = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log(111);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
};
const ReducerCourses = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_INSTRUCTOR_COURSES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ADD_COURSE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
const ReducersSection = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SECTION": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  Credentials: ReducerAuthenticate,
  course: ReducerCourses,
  Sections: ReducersSection,
  form: FormReducer,
});
