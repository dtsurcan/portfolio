import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';

import {
  parents,
  insertAfter } from './../../utils';

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
      direction: 'top',
      className: 'modal-lg'
    };

    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.togglePrev = this.togglePrev.bind(this)
    this.toggleNext = this.toggleNext.bind(this)
    this.getElements = this.getElements.bind(this)
    this.createModalBackdrop = this.createModalBackdrop.bind(this)
  }

  componentDidMount() {
    this.createModalBackdrop()
  }

  detectLoadImages(images) {
    images.forEach(image => {
      const objImage = new Image();

      objImage.src = image.src;
      objImage.onload = () => {
        const element = document.querySelector('[src="'+image.src+'"]')

        if (element !== null) {
          element.parentNode.setAttribute('data-is-loaded', true)
        }
      };
    })
  }

  // Get Projects elements
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

  // Open modal project
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

  // Close modal project
  closeModal() {
    const elements = this.getElements()

    elements.current.setAttribute('direction', 'bottom')
    this.setState({
      direction: 'bottom',
      modal: !this.state.modal
    });

    // Set default
    setTimeout(() => {
      elements.current.setAttribute('direction', 'top')
      this.setState({
        direction: 'top'
      })
    }, 300)
  }

  // Show previous modal project
  togglePrev() {
    const elements = this.getElements()

    elements.prev.setAttribute('direction', 'left')
    elements.current.setAttribute('direction', 'right')

    elements.prev.querySelector('.details').click()
    setTimeout(() => {
      this.toggleModal()
    }, 100)
  }

  // Show next modal project
  toggleNext() {
    const elements = this.getElements()

    elements.next.setAttribute('direction', 'right')
    elements.current.setAttribute('direction', 'left')

    elements.next.querySelector('.details').click()
    setTimeout(() => {
      this.toggleModal()
    }, 100)
  }

  // Make backdrop for modal
  createModalBackdrop() {
    const $current = document.getElementById('project-item-'+ this.props.id)
    const $inner = parents($current, '.inner')[0]
    const $row = parents($current, '.row')[0]

    // Add backdrop element
    if (!$inner.querySelector('.modal-backdrop')) {
      var backdrop = document.createElement('div');
      backdrop.innerHTML = '<div class="modal-backdrop fade"></div>';

      insertAfter(backdrop, $row)
    }
  }

  preMakeCarouselItems(t, items) {
    let _items = items

    const translateCaption = item => {
      const caption = t(item.caption)
      item.altText = caption
      item.caption = caption

      return item
    }

    _items = _items.map(translateCaption)

    this.detectLoadImages(_items)

    return _items
  }

  preMakeSkillsItems = (items) => {
    let SkillsItems = ''
    if (items) {
      let _items = items
          _items = _items.split(',')
      SkillsItems = _items.map((item, i) => {
        return (
          <Badge color="light" key={i}>{ item }</Badge>
        )
      })
    }

    return SkillsItems;
  }

  render() {
    const { t, id, src, alt, title, description, link, skills, images } = this.props;

    // Images for carousel
    let CarouselImages = this.preMakeCarouselItems(t, images)

    // Skills to badgets
    let SkillsItems = this.preMakeSkillsItems(skills)

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

        <Modal isOpen={ this.state.modal } toggle={ this.toggleModal } className={ this.state.className + " " + this.state.direction } backdrop={ false }>
          <ModalHeader toggle={ this.closeModal } />
          <ModalBody>
            <div className="mb-4">
              { title ? (
                <p><strong>{t("title")}:</strong> { title }</p>
              ) : null }
              { description ? (
                <p><strong>{t("description")}:</strong> { t(description) }</p>
              ) : null }
              { SkillsItems ? (
                <p><strong>{t("skills")}:</strong> { SkillsItems }</p>
              ) : null }
              { link ? (
                <p><strong>{t("link")}:</strong> <a href={ link } target="_blank">{ link }</a></p>
              ) : null }
            </div>

            { CarouselImages ? (
              <UncontrolledCarousel items={ CarouselImages } autoPlay={ false } />
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
      caption: PropTypes.string.isRequired
    }).isRequired
  ),
  id: PropTypes.number.isRequired
}

export default translate('translations')(ProjectItem);
