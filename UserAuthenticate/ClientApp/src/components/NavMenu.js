import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import StyleModel from './NavMenu.module.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
       
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">Library</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className={StyleModel.Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className={StyleModel.Link} to="/About">About Us</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink tag={Link} className={StyleModel.Link} to="/Contact">Contact Us</NavLink>
              </NavItem>
               <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle caret className="nav-link" tag="a">
                  Account
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem  tag={Link} to="/Login">
                      Login
                    </DropdownItem>
                    <DropdownItem  tag={Link} to="/Registration" >
                      Registration
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
