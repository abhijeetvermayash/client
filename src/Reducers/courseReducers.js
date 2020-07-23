import _ from "lodash";

const initialState = {
  isAuthenticated: false,
  user: {},
  courses: {},
};
export const ReducerCourses = (state = initialState, action) => {
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

export const ReducersSection = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SECTION": {
      return action.payload;
    }
    default:
      return state;
  }
};
