import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <div className="container">
      <h2>Profile</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="Profile.png" />{" "}
            <div class="card-body">
              {/* <h4 class="card-title">John Doe</h4>
              <p class="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p> */}
              {/* <a href="#" class="btn btn-primary">
              See Profile
            </a> */}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <h2>Name:{props.user.username}</h2>

          <h3>Email:{props.user.email}</h3>
          <Link>Edit-Profile</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
