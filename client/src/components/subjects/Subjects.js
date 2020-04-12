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

function Subjects(props) {
  const subjectTopic_id = props.match.params.id;
  console.log(props.match.params.id);
  return (
    <div>
      {props.subject ? <h1>{props.subject.subject_name}</h1> : <h1>Topics</h1>}
      <ul>
        {props.topics
          .filter((topic) => {
            return topic.subject == subjectTopic_id;
          })
          .map((topic) => {
            return (
              // <li key={topic._id}>
              //   <Link to={`/topics/${topic._id}`}>{topic.topic_name}</Link>
              // </li>

              <li key={topic._id}>
                <MDBCol style={{ maxWidth: "22rem" }}>
                  <MDBCard wide cascade>
                    <MDBCardImage
                      className="img-fluid"
                      src={topic.topic_img}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        {" "}
                        <Link to={`/topics/${topic._id}`}>
                          {topic.topic_name}
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
  );
}

const mapStateToProps = (state, props) => {
  const subjectTopic_id = props.match.params.id;
  return {
    topics: state.topics,
    subject: state.subjects.find((subject) => subject._id == subjectTopic_id),
  };
};

export default connect(mapStateToProps)(Subjects);
