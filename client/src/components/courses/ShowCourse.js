import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../course.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
function ShowCourse(props) {
  return (
    <div>
      <h1>Subjects</h1>
      {props.course ? (
        <div>
          <ul>
            {props.subjects
              .filter((subject) => {
                return subject.course == props.course._id;
              })
              .map((subject) => {
                return (
                  // <li key={subject._id}>
                  //   <Link to={`/subjects/${subject._id}`}>
                  //     {subject.subject_name}
                  //   </Link>
                  // </li>

                  <li key={subject._id}>
                    <MDBCol style={{ maxWidth: "22rem" }}>
                      <MDBCard wide cascade>
                        <MDBCardImage
                          className="img-fluid"
                          src={subject.subject_img}
                          waves
                        />
                        <MDBCardBody>
                          <MDBCardTitle>
                            {" "}
                            <Link to={`/subjects/${subject._id}`}>
                              {subject.subject_name}
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
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
        <div>....Loading</div>
      )}
    </div>
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    course: state.courses.find((course) => course._id == id),
    subjects: state.subjects,
  };
};
export default connect(mapStateToProps)(ShowCourse);
