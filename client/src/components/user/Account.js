// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBMask,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBBtn,
//   MDBView,
//   MDBContainer,
// } from "mdbreact";
// import "../../../src/index.css";

// class Account extends React.Component {
//   state = {
//     collapseID: "",
//   };

//   toggleCollapse = (collapseID) => () =>
//     this.setState((prevState) => ({
//       collapseID: prevState.collapseID !== collapseID ? collapseID : "",
//     }));

//   render() {
//     const overlay = (
//       <div
//         id="sidenav-overlay"
//         style={{ backgroundColor: "transparent" }}
//         onClick={this.toggleCollapse("navbarCollapse")}
//       />
//     );
//     return (
//       <div id="videobackground">
//         <Router>
//           <div>
//             <MDBNavbar dark expand="md" fixed="top">
//               <MDBContainer>
//                 <MDBNavbarBrand>
//                   <span className="white-text">MDBNavbar</span>
//                 </MDBNavbarBrand>
//                 <MDBNavbarToggler
//                   onClick={this.toggleCollapse("navbarCollapse")}
//                 />
//                 <MDBCollapse
//                   id="navbarCollapse"
//                   isOpen={this.state.collapseID}
//                   navbar
//                 >
//                   <MDBNavbarNav left>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Home</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">About</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Features</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Services</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Opinions</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Team</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Contact</MDBNavLink>
//                     </MDBNavItem>
//                   </MDBNavbarNav>
//                   <MDBNavbarNav right>
//                     <MDBNavItem>
//                       <MDBNavLink to="!#">
//                         <MDBIcon fab icon="facebook-f" />
//                       </MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="!#">
//                         <MDBIcon fab icon="twitter" />
//                       </MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="!#">
//                         <MDBIcon fab icon="instagram" />
//                       </MDBNavLink>
//                     </MDBNavItem>
//                   </MDBNavbarNav>
//                 </MDBCollapse>
//               </MDBContainer>
//             </MDBNavbar>
//             {this.state.collapseID && overlay}
//           </div>
//         </Router>

//         <MDBView>
//           <video
//             className="video-intro"
//             poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
//             playsInline
//             autoPlay
//             muted=""
//             loop
//           >
//             <source
//               src="https://mdbootstrap.com/img/video/animation.mp4"
//               type="video/mp4"
//             />
//           </video>
//           <MDBMask className="d-flex justify-content-center align-items-center gradient">
//             <MDBContainer className="px-md-3 px-sm-0">
//               <MDBRow>
//                 <MDBCol md="12" className="mb-4 white-text text-center">
//                   <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
//                     Creative Agency{" "}
//                   </h3>
//                   <hr className="hr-light my-4 w-75" />
//                   <h4 className="subtext-header mt-2 mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit
//                     deleniti consequuntur nihil.
//                   </h4>
//                   <MDBBtn outline rounded color="white">
//                     <MDBIcon icon="home" /> Visit us
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//             </MDBContainer>
//           </MDBMask>
//         </MDBView>

//         <MDBContainer>
//           <MDBRow className="pt-5 pb-4">
//             <MDBCol md="12" className="text-center">
//               <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Enter Email"
//                     name="email"
//                     className="form-control"
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="password"
//                     placeholder="Enter Password"
//                     className="form-control"
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <input type="submit" className="btn btn-primary btn-block" />
//               </form>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </div>
//     );
//   }
// }

// export default Account;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdbreact";
class Account extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="chart-pie" /> Marketing
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>This is card title</strong>
                  </MDBCardTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn color="pink">
                    <MDBIcon icon="clone left" /> View project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                <div>
                  <h5 className="orange-text">
                    <MDBIcon icon="desktop" /> Software
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>This is card title</strong>
                  </MDBCardTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn color="deep-orange">
                    <MDBIcon icon="clone left" /> View project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Account;
