import axios from "../config/axios";

export const startSetCourses = () => {
  return dispatch => {
    axios
      .get("/courses")
      .then(function(response) {
        console.log(response.data);
        dispatch(setCourses(response.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};

export const setCourses = courses => {
  return { type: "SET_COURSE", payload: courses };
};
