import axios from "axios";

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
//Action to add course by the instructor
export const AddCourseAction = (formValues) => async (dispatch, getState) => {
  const sections = getState().Sections;
  console.log(sections);
  const res = await axios.post("", { ...formValues, sections });
  dispatch({ type: "ADD_COURSE", payload: res.data });
};
//This is a basic action which adds a section to the reducers and from the reducers state we got this state in as sections in the AddCourseAction creator
export const AddSectionAction = (sections) => {
  return {
    type: "ADD_SECTION",
    payload: sections,
  };
};
