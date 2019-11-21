import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import './RegistrationLogin.css'

const Login = () => {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8">
          <MDBCard className="card">
              <MDBCardBody>
            <form>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
            </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  
  export default Login;