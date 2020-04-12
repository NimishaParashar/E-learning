import axios from "../config/axios";

export const startSetContent = () => {
  return dispatch => {
    axios
      .get("/content")
      .then(function(response) {
        console.log(response.data);
        dispatch(setContent(response.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};

export const setContent = contents => {
  return {
    type: "SET_CONTENT",
    payload: contents
  };
};
