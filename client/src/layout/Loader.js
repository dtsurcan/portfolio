import React, { Component } from 'react';

import loadingSrc   from './../images/loading.svg';

class Loader extends Component {
  loaded() {
    const $loader = document.querySelector('#loader')

    $loader.classList.add("loaded")

    setTimeout(() => {
      $loader.style.display = 'none'
    }, 300)
  }

  render() {
    return (
	    <div id="loader" className="page-loader" style={{ backgroundImage: "url(" + loadingSrc + ")" }}> </div>
    );
  }
}

export default Loader;
