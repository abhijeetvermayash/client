import axios from "axios";

export const LoginAction = (credentials) => {
  {
    return async (dispatch) => {
      const response = await axios.post("", { credentials });
      dispatch({ type: "LOGIN", payload: response.data });
    };
  }
};

export const SingupAction = (credentials) => {
  {
    return async (dispatch) => {
      const response = await axios.post("users/register", { credentials });
      dispatch({ type: "SIGNUP", payload: response.data });
    };
  }
};
