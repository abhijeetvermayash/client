import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const LoginAction = (credentials) => (dispatch) => {
  axios
    .post("/user/login", credentials)
    .then((res) => {
      const { token } = res.data;
      //set token to ls
      localStorage.setItem("token", token);
      //set token to auth heder
      setAuthToken(token);
      //decode the token
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => console.log(err));
};

export const setCurrentUser = (decoded) => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded,
  };
};

export const SingupAction = (credentials, history) => (dispatch) => {
  axios
    .post("/user/register", credentials)
    .then((res) => history.push("/login"))
    .catch((err) => console.log(err));
};

//logput
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
//Action to fetch all the courses
export const FetchCourseAction = () => async (dispatch) => {
  const response = await axios.get("");
  dispatch({ type: "FETCH_COURSES", payload: response.data });
};
//Action to fetch courses of a instructor
export const FetchInstructorCoursesAction = () => async (dispatch) => {
  const response = await axios.get("");
  dispatch({ type: "FETCH_INSTRUCTOR_COURSES", payload: response.data });
};

export const AddCourseAction = (formValues) => async (dispatch) => {
  const res = await axios.post("", formValues);
  dispatch({ type: "ADD_COURSE", payload: res.data });
};
