// import { createStore, applyMiddleware, combineReducers } from "redux";
// import notesReducer from "../reducers/notesReducer";
// import categoriesReducer from "../reducers/categoriesReducer";
// import thunk from "redux-thunk";
// const configureStore = () => {
//   const store = createStore(
//     combineReducers({
//       notes: notesReducer,
//       categories: categoriesReducer
//     }),
//     applyMiddleware(thunk)
//   );
//   return store;
// };
// export default configureStore;

import { createStore, combineReducers, applyMiddleware } from "redux";
import contentsReducer from "../reducers/contentsReducer";
import coursesReducer from "../reducers/coursesReducer";
import subjectsReducer from "../reducers/subjectsReducer";
import topicsReducer from "../reducers/topicsReducer";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      contents: contentsReducer,
      courses: coursesReducer,
      subjects: subjectsReducer,
      topics: topicsReducer,
      user: userReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
