import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './../layout/Header';
import Footer from './../layout/Footer';

import Home from './Home';
import Info from './Info';

class App extends Component {

  // When component did mount
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('resize', this.handleLoad);
  }
  componentWillUnmount() {
    window.removeListener('load', this.handleLoad);
    window.removeListener('resize', this.handleLoad);
  }

  // Handle load event function
  handleLoad() {

    // Set min height for inner main content
    const setMinHeight = () => {
      console.log('Change min height');

      const $header = document.querySelector('header.page-header');
      const $footer = document.querySelector('footer.page-footer');
      const $main = document.querySelector('main.page-main');

      $main.style.minHeight = (window.innerHeight - $header.clientHeight - $footer.clientHeight) + 'px';
    };

    // Call function
    setMinHeight();
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>

          <main className="page-main">
            <Route exact path="/" component={ Home }/>
            <Route exact path="/info" component={ Info }/>
          </main>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
