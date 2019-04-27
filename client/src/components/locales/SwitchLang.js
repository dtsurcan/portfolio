import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { toCapitalize } from './../../utils';

class SwitchLang extends Component {
	constructor(props) {
	  super(props);

    this.dropdownToggle = this.dropdownToggle.bind(this);
	  this.state = {
      dropdownIsOpen: false
	  };
	};

  dropdownToggle() {
	  this.setState({
	    dropdownIsOpen: !this.state.dropdownIsOpen
	  });
	};

  render() {
    const { i18n, languages, onSwitchClick } = this.props;

		let language = i18n.language
		if (language.toUpperCase() === 'RU-RU') {
			language = 'ru';
		}
		if (language.toUpperCase() === 'EN-US') {
			language = 'en';
		}

    return (
      <ButtonDropdown isOpen={this.state.dropdownIsOpen} toggle={this.dropdownToggle}>
        <DropdownToggle caret> { toCapitalize(language) } </DropdownToggle>
        <DropdownMenu right style={{ 'minWidth': '5rem' }}>
          {languages.map((lang, i) => (
            language !== lang ? <DropdownItem key={i} onClick={() => onSwitchClick(lang)}>{toCapitalize(lang)}</DropdownItem> : ''
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

SwitchLang.propTypes = {
  languages: PropTypes.array.isRequired,
  onSwitchClick: PropTypes.func.isRequired
}

export default translate('translations')(SwitchLang)
