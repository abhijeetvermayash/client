import { combineReducers } from "redux";

const ReducerAuthenticate = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(111);
      return { ...state, [action.payload.id]: action.payload };
    case "SIGNUP":
      console.log(222);
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};

export default combineReducers({
  dummy: "{1}",
  Credentials: ReducerAuthenticate,
});
