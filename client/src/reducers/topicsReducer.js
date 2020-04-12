const topicsIntialState = [];
const topicsReducer = (state = topicsIntialState, action) => {
  switch (action.type) {
    case "SET_TOPICS": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default topicsReducer;
