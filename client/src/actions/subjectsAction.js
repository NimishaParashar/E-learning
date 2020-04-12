import axios from "../config/axios";

export const startSetSubjects = () => {
  return dispatch => {
    axios
      .get("/subjects")
      .then(function(response) {
        console.log(response.data);
        dispatch(setSubjects(response.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};

export const setSubjects = subject => {
  return {
    type: "SET_SUBJECT",
    payload: subject
  };
};
