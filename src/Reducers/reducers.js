import { combineReducers } from "redux"
import isEmpty from "../validation/is-empty"

const initialState = {
  isAuthenticated: false,
  user: {}
}

const ReducerAuthenticate = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log(111)
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }

    default:
      return state
  }
}

export default combineReducers({
  Credentials: ReducerAuthenticate
})
