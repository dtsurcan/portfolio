import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  parents } from './../../utils';

import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledCarousel
} from 'reactstrap';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      direction: 'right',
      className: 'modal-lg'
    };

    this.toggleModal = this.toggleModal.bind(this)
    this.togglePrev = this.togglePrev.bind(this)
    this.toggleNext = this.toggleNext.bind(this)
    this.getElements = this.getElements.bind(this)
  }

  getElements() {
    const $current = document.getElementById('project-item-'+ this.props.id)
    const $row = parents($current, '.row')[0]
    const $items = $row.querySelectorAll('.project-item')

    let $prev = null;
    let $next = null;
    for (let i = 0; i < $items.length; i++) {
      if ($items[i] === $current) {
        if ($items[i-1]) {
          $prev = $items[i-1]
        } else {
          $prev = $items[$items.length-1]
        }
        if ($items[i+1]) {
          $next = $items[i+1]
        } else {
          $next = $items[0]
        }
      }
    }

    return {
      current: $current,
      prev: $prev,
      next: $next
    }
  }

  toggleModal() {
    const elements = this.getElements()
    const direction = elements.current.getAttribute('direction')

    if (direction !== null) {
      this.setState({
        direction: direction
      });
    }
    this.setState({
      modal: !this.state.modal
    });

  }

  togglePrev() {
    const elements = this.getElements()

    elements.prev.setAttribute('direction', 'left')
    elements.current.setAttribute('direction', 'right')

    elements.prev.querySelector('.details').click()
    setTimeout(() => {
      this.toggleModal()
    }, 225)
  }

  toggleNext() {
    const elements = this.getElements()

    elements.next.setAttribute('direction', 'right')
    elements.current.setAttribute('direction', 'left')

    elements.next.querySelector('.details').click()
    setTimeout(() => {
      this.toggleModal()
    }, 225)
  }

  render() {
    const { id, src, alt, title, description, link, skills, images } = this.props;

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
        <Card className="project-item" id={ 'project-item-' + id } data-id={ id }>
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

        <Modal isOpen={ this.state.modal } toggle={ this.toggleModal } className={ this.state.className + " " + this.state.direction }>
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
          <ModalFooter className="p-0">
            <div className="controls">
              <a className="modal-control-prev" onClick={ this.togglePrev } data-id={ id } role="button" tabIndex="0">
                <span className="modal-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span>
              </a>
              <a className="modal-control-next" onClick={ this.toggleNext } data-id={ id } role="button" tabIndex="1">
                <span className="modal-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span>
              </a>
            </div>
          </ModalFooter>
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
