const coursesIntialState = [];
const coursesReducer = (state = coursesIntialState, action) => {
  switch (action.type) {
    case "SET_COURSE": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default coursesReducer;
