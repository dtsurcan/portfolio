import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardLink,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledCarousel
} from 'reactstrap';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      className: 'modal-lg'
    };

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { src, alt, title, description, link, skills, images } = this.props;

    // Skills to badgets
    let SkillsItems = ''
    if (skills) {
      let items = skills
          items = items.split(',')
      SkillsItems = items.map((item, i) => {
        return (
          <Badge color="light" key={i}>{ item }</Badge>
        )
      })
    }

    return (
      <div>
        <Card className="project-item">
          <CardImg src={ src } alt={ alt }/>
          <CardBody>
            <div className="content">
              <CardLink onClick={ this.toggleModal } className="details"><i className="fa fa-eye" /></CardLink>
              <CardLink href={ link } target="_blank" className="title">{ title }</CardLink>
              <div>
                { SkillsItems }
              </div>
            </div>
          </CardBody>
        </Card>

        <Modal isOpen={ this.state.modal } toggle={ this.toggleModal } className={ this.state.className }>
          <ModalHeader toggle={ this.toggleModal } />
          <ModalBody>
            <div className="mb-4">
              { title ? (
                <p><strong>Title:</strong> { title }</p>
              ) : null }
              { description ? (
                <p><strong>Description:</strong> { description }</p>
              ) : null }
              { SkillsItems ? (
                <p><strong>Skills:</strong> { SkillsItems }</p>
              ) : null }
              { link ? (
                <p><strong>Link:</strong> <a href={ link } target="_blank">{ link }</a></p>
              ) : null }
            </div>

            { images ? (
              <UncontrolledCarousel items={ images } />
            ) : null }
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  skills: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired
    }).isRequired
  ),
  id: PropTypes.number.isRequired
}

export default ProjectItem
