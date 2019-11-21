import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../RegistrationLogin/Login";
import Registration from "../RegistrationLogin/Registration";

class Navigation extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">AppName</strong>
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/">SignUp</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">SignIn</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBNavbar>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Registration} />
      </Switch>
    </Router>
    );
  }
}

export default Navigation;