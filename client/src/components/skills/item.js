import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tooltip, Card, CardFooter, CardBody, CardImg, CardTitle } from 'reactstrap';

class SkillItem extends Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { srcLogo, altLogo, title, description, id, size } = this.props;

    return (
      <div>
        <Card id={ "item-" + id} className={size ? "card-" + size : ''}>
          <CardBody>
            <CardImg src={ srcLogo } alt={ altLogo } />
          </CardBody>
          <CardFooter>
            <CardTitle>{ title }</CardTitle>
          </CardFooter>
        </Card>

        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} autohide={ false } target={ "item-" + id} toggle={this.toggleTooltip}>
          <div dangerouslySetInnerHTML={ description }></div>
        </Tooltip>
      </div>
    )
  }
}

SkillItem.propTypes = {
  srcLogo: PropTypes.string.isRequired,
  altLogo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.object,
  id: PropTypes.number.isRequired,
  size: PropTypes.string
}

export default SkillItem
