import React, { Component } from 'react'
import {
  Progress,
  Badge } from 'reactstrap';
import PropTypes from 'prop-types'

class TestItem extends Component {
  render() {
    const { title, top, value } = this.props;

    return (
      <div className="mb-3">
        <label className="d-block">{title}: <Badge color="success" className="float-right">Top {top}</Badge></label>
        <Progress data-value={value} />
      </div>
    )
  }
}

TestItem.propTypes = {
  title: PropTypes.string.isRequired,
  top: PropTypes.string,
  value: PropTypes.number.isRequired
}

export default TestItem
