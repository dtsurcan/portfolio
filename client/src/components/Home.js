import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import { Container } from 'reactstrap';

import logo from './../images/logo.svg';

export default class Home extends Component {

  render() {
    return (
      <div className="home-content">
        <div className="top-content mb-5">
          <Container>
            <img src={logo} className="content-logo" alt="logo" />
            <h1 className="content-title">Welcome to React</h1>
          </Container>
        </div>

        <Container>
          <h2>Home</h2>

          <p>
            <NavLink exact={ true } activeClassName='active' className='nav-link' to='/info'>Info</NavLink>
          </p>
        </Container>
      </div>
    );
  }
}
