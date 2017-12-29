import React, { Component } from 'react';
import { translate } from 'react-i18next';

import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';

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
      <header className="page-header sticky">
	      <Navbar dark expand="md" className="bg-dark navbar-header">
	        <NavLink className='navbar-brand' href='/'>{t('header.menu.logo-title')}</NavLink>

	        <NavbarToggler onClick={ this.navbarToggle } />

	        <Collapse isOpen={ this.state.navbarIsOpen } navbar id="main-header-menu">
	          <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink className='nav-link active' href='#home' data-toggle="scroll-to">{t('header.menu.home')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='#about-me' data-toggle="scroll-to">{t('header.menu.about')}</NavLink>
              </NavItem>
	            <NavItem>
                <NavLink className='nav-link' href='#skills' data-toggle="scroll-to">{t('header.menu.skills')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='#projects' data-toggle="scroll-to">{t('header.menu.projects')}</NavLink>
              </NavItem>
              <NavItem className="mr-lg-2">
                <NavLink className='nav-link' href='#contacts' data-toggle="scroll-to">{t('header.menu.contacts')}</NavLink>
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
