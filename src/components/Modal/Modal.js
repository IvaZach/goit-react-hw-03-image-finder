import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('close Modalku');

      this.props.onClose();
    }
  };

  backdropClick = event => {
    if (event.target === event.currentTarget) {
      console.log('event.target',event.target)
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.backdropClick}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  id: PropTypes.number,
  onToggleModal: PropTypes.func,
};
