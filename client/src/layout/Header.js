import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import { translate } from 'react-i18next';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import SwitchLang from './../components/locales/SwitchLang';

class Header extends Component {
	constructor(props) {
	  super(props);

    this.navbarToggle = this.navbarToggle.bind(this);
	  this.state = {
      navbarIsOpen: false
	  };
	};

  navbarToggle() {
	  this.setState({
	    navbarIsOpen: !this.state.navbarIsOpen
	  });
	};

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    const languages = [ 'ru', 'en', 'de' ]

    return (
      <header className="page-header">
	      <Navbar dark expand="md" className="bg-dark navbar-header">
	        <NavLink exact={ true } className='navbar-brand' to='/'>{t('header.menu.logo-title')}</NavLink>

	        <NavbarToggler onClick={ this.navbarToggle } />

	        <Collapse isOpen={ this.state.navbarIsOpen } navbar>
	          <Nav className="ml-auto" navbar>
	            <NavItem>
                <NavLink exact={ true } activeClassName='active' className='nav-link' to='#skills'>{t('header.menu.skills')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact={ true } activeClassName='active' className='nav-link' to='#projects'>{t('header.menu.projects')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact={ true } activeClassName='active' className='nav-link' to='#calendar'>{t('header.menu.calendar')}</NavLink>
              </NavItem>
              <NavItem className="mr-lg-2">
                <NavLink exact={ true } activeClassName='active' className='nav-link' to='#contacts'>{t('header.menu.contacts')}</NavLink>
	            </NavItem>
              <NavItem>
                <SwitchLang languages={ languages } onSwitchClick={ changeLanguage }></SwitchLang>
              </NavItem>
	          </Nav>
	        </Collapse>
	      </Navbar>
	    </header>
    )
  }
}

export default translate('translations')(Header);
