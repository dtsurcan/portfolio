import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Container } from 'reactstrap';

import SwitchLang from './../components/locales/SwitchLang';

class Footer extends Component {

  render() {
    const { i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    const languages = [ 'ru', 'en', 'de' ]

    return (
	    <footer className="page-footer">
	    	<Container>
          <div className="d-md-none float-right ml-3">
            <SwitchLang languages={ languages } onSwitchClick={ changeLanguage }></SwitchLang>
          </div>

	    		<p className="mb-0 py-2 text-right">
            Copyright © 2017 DTsurcan. All Rights Reserved.</p>
	    	</Container>
	    </footer>
    );
  }
}

export default translate('translations')(Footer);
