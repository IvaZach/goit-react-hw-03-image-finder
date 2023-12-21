// import { Modal } from 'components/Modal/Modal';
import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
  // console.log(webformatURL);
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItem_image}
      />
      <Modal largeImageURL={largeImageURL} onClick={onClick}/>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func
};
