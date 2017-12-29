import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './../layout/Header';
import Footer from './../layout/Footer';

import Home from './Home';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Header/>

          <main className="page-main">
            <Route exact path="/" component={ Home }/>
          </main>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
