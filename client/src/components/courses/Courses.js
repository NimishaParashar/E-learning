import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "../../course.css";

function Courses(props) {
  return (
    <div className="container">
      <h1>All Courses-{props.courses.length}</h1>
      <ul>
        {props.courses.map(function (course) {
          return (
            <li key={course._id}>
              <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard wide cascade>
                  <MDBCardImage
                    className="img-fluid"
                    src={course.course_img}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>
                      {" "}
                      <Link to={`/courses/${course._id}`}>
                        {course.course_name}
                      </Link>
                    </MDBCardTitle>
                    {/* <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Click</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <br />
              {console.log(course.course_img)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};
export default connect(mapStateToProps)(Courses);
{
  /* <MDBCol style={{ maxWidth: "22rem" }}>
<MDBCard>
  <MDBCardImage
    className="img-fluid"
    src={course.course_img}
    waves
  />
  <MDBCardBody>
    <MDBCardTitle>
      {" "}
      <Link to={`/courses/${course._id}`}>
        {course.course_name}
      </Link>
    </MDBCardTitle>
    {/* <MDBCardText>
      Some quick example text to build on the card title and
      make up the bulk of the card's content.
    </MDBCardText> */
}
{
  /* <MDBBtn href="#">Click</MDBBtn> */
}
//   </MDBCardBody>
// </MDBCard>
// </MDBCol>*/}
