import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardLink
} from 'reactstrap';

class ProjectItem extends Component {
  render() {
    const { src, alt, title, link, skills, id } = this.props;



    let SkillsItems = ''
    if (skills) {
      let items = skills
          items = items.split(',')
      SkillsItems = items.map((item, i) => {
        return (
          <Badge className="dark" key={i}>{ item }</Badge>
        )
      })
    }

    return (
      <div>
        <Card id={ "project-item-" + id} className="project-item">
          <CardImg src={ src } alt={ alt } />
          <CardBody>
            <div className="content">
              <CardLink href={ link }>{ title }</CardLink>
              <div>
                { SkillsItems }
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  link: PropTypes.string,
  skills: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default ProjectItem
