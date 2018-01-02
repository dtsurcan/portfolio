import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
	    <footer className="page-footer">
	    	<Container>
	    		<p className="mb-0 py-2 text-right">Copyright © 2017 DTsurcan. All Rights Reserved.</p>
	    	</Container>
	    </footer>
    );
  }
}

export default Footer;
