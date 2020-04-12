import React from "react";
import Courses from "./components/courses/Courses";
import { Switch, Link, BrowserRouter, Route } from "react-router-dom";
import ShowCourse from "./components/courses/ShowCourse";
import Subjects from "./components/subjects/Subjects";
import Topics from "./components/topic/Topics";
import Login from "./components/user/Login";
import { connect } from "react-redux";
import Register from "./components/user/Register";
import Dashboard from "./components/home/Dashboard";
import Profile from "./components/home/Profile";
import ContactUs from "./components/home/ContactUs";
import { startRemoveUser } from "./actions/userAction";
import ExamplePDFViewer from "./components/contents/MyDocument";
import Account from "./components/user/Account";

function App(props) {
  const handleLogout = () => {
    props.dispatch(startRemoveUser());
  };
  return (
    <BrowserRouter>
      <div>
        {/* <h1>E-Learning</h1> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {Object.keys(props.user).length == 0 ? (
            // <div>
            //   <h2>
            //     <Link to="/users/login">Login</Link>||
            //     <Link to="/users/register">Register</Link>||
            //     <Link to="/users/account">Account</Link>
            //   </h2>
            // </div>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <h3>
                      {" "}
                      <Link to="/users/login">Login</Link>{" "}
                    </h3>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h3>
                      {" "}
                      <Link to="/users/register">Register</Link>
                    </h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h3>
                      <Link to="/users/account">Account</Link>
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            // <div>
            //   <h2>
            //     <Link
            //       to="#"
            //       onClick={() => {
            //         handleLogout();
            //       }}
            //     >
            //       Logout
            //     </Link>
            //     ||
            //     <Link to={`/courses`}>Courses</Link>
            //     <Link to="/dashboard">Dashboard</Link>
            //     <Link to="/profile">Profile</Link>
            //   </h2>
            // </div>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <h3>
                      {" "}
                      <Link
                        to="#"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </Link>{" "}
                    </h3>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h3>
                      <Link to={`/courses`}>Courses</Link>
                    </h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h3>
                      <Link to="/dashboard">Dashboard</Link>
                    </h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h3>
                      {" "}
                      <Link to="/profile">Profile</Link>
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <Link>Login</Link> <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link>Register</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link>Account</Link>
                </a>
              </li>
            </ul>
          </div> */}
        </nav>

        <Switch>
          <Route path="/courses/:id" component={ShowCourse} exact={true} />
          <Route path="/courses" component={Courses} />
          <Route path="/subjects/:id" component={Subjects} />
          <Route path="/topics/:id" component={ExamplePDFViewer} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/users/account" component={Account} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

//export default App;
export default connect(mapStateToProps)(App);
