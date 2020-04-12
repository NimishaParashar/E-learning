import axios from "../config/axios";

export const startSetTopics = () => {
  return dispatch => {
    axios
      .get("/topics")
      .then(function(response) {
        console.log(response.data);
        dispatch(setTopics(response.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};

export const setTopics = topics => {
  return {
    type: "SET_TOPICS",
    payload: topics
  };
};
