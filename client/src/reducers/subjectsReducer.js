const subjectsIntitalstate = [];
const subjectsReducer = (state = subjectsIntitalstate, action) => {
  switch (action.type) {
    case "SET_SUBJECT": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default subjectsReducer;
