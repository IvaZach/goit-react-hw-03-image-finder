import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
// import * as basicLightbox from 'basiclightbox';

export const Modal = ({ largeImageURL, onClick }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img
          src={largeImageURL}
          alt="img"
          onClick={onClick}
        />
      </div>
    </div>
  );
};


Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
