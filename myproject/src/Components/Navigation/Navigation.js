import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

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
            <MDBNavItem active>
              <MDBNavLink to="#!">SignUp</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">SignIn</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navigation;