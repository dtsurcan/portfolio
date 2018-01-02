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

		if (i18n.language === "ru-RU") {
			i18n.language = 'ru'
			i18n.locale = 'ru'
		}
		if (i18n.language === "en-US") {
			i18n.language = 'en'
			i18n.locale = 'en'
		}

    return (
      <ButtonDropdown isOpen={this.state.dropdownIsOpen} toggle={this.dropdownToggle}>
        <DropdownToggle caret>
          {toCapitalize(i18n.language)}
        </DropdownToggle>
        <DropdownMenu>
          {languages.map((lang, i) => (
            i18n.language !== lang ? <DropdownItem key={i} onClick={() => onSwitchClick(lang)}>{toCapitalize(lang)}</DropdownItem> : ''
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
