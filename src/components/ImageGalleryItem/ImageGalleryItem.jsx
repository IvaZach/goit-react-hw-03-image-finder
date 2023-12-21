// import { Modal } from 'components/Modal/Modal';
import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ searchCards }) => {
  console.log('searchCards - item', searchCards);
  return searchCards.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li className={css.imageGalleryItem} id={id}>
        <img
          src={webformatURL}
          alt={tags}
          id={id}
          className={css.imageGalleryItem_image}
        />
        {/* <Modal largeImageURL={largeImageURL}/> */}
      </li>
    );
  });
};
