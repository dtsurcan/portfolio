import React, { Component } from 'react';

import Header from './../layout/Header';
import Footer from './../layout/Footer';

import Home from './Home';

class App extends Component {

  render() {

    return (
      <div>
        <Header/>

        <main className="page-main">
          <Home />
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;
