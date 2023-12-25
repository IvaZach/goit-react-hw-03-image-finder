import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';


export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onToggleModal,
  showModal,
  modalImage
}) => {
  return (
    <li className={css.imageGalleryItem} key={id} onClick={(e) => {console.log(e.target)
          onToggleModal();
          modalImage()
        }}>
      <img
        key={id}
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItem_image}
        
      />
      {showModal && (
        <Modal onClose={onToggleModal}> 
        <img
          src={largeImageURL}
          alt="img"
          key={id}
        /></Modal>

      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onToggleModal: PropTypes.func,
  showModal:PropTypes.bool
};
