import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

class Header extends Component {
	constructor(props) {
	  super(props);

	  this.toggle = this.toggle.bind(this);
	  this.state = {
	    isOpen: false
	  };
	};

	toggle() {
	  this.setState({
	    isOpen: !this.state.isOpen
	  });
	};

  render() {
    return (
    	<header className="page-header">
	      <Navbar dark expand="md" className="bg-dark">
	        <NavLink exact={ true } className='navbar-brand' to='/'>React</NavLink>

	        <NavbarToggler onClick={ this.toggle } />

	        <Collapse isOpen={ this.state.isOpen } navbar>
	          <Nav className="ml-auto" navbar>
	            <NavItem>
	              <NavLink exact={ true } activeClassName='active' className='nav-link' to='/'>Home</NavLink>
	            </NavItem>
	          </Nav>
	        </Collapse>
	      </Navbar>
	    </header>
    );
  }
}

export default Header;
