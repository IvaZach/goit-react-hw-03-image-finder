// import { Modal } from 'components/Modal/Modal';
import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => {
  console.log(webformatURL)
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        
        className={css.imageGalleryItem_image}
      />
    </li>
  );
};

/* <Modal largeImageURL={largeImageURL}/> */
