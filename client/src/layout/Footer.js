import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
	    <footer className="page-footer">
	    	<Container fluid={ true }>
	    		<p className="mb-0 py-2">footer</p>
	    	</Container>
	    </footer>
    );
  }
}

export default Footer;