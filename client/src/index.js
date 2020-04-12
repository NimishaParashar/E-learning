import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import { startSetCourses } from "./actions/coursesAction";
import { startSetSubjects } from "./actions/subjectsAction";
import { startSetTopics } from "./actions/topicsAction";
import { startSetContent } from "./actions/contentsAction";
import ReactPDF from "@react-pdf/renderer";
import Test from "../src/components/contents/Test";
import PDFViewer from "pdf-viewer-reactjs";
import "bootstrap/dist/css/bootstrap.css";
import { startSetUser } from "./actions/userAction";
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(startSetCourses());
store.dispatch(startSetSubjects());
store.dispatch(startSetTopics());
store.dispatch(startSetContent());
store.dispatch(startSetUser());
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

//ReactDOM.render(<ExamplePDFViewer />, document.getElementById("root"));
ReactDOM.render(jsx, document.getElementById("root"));
