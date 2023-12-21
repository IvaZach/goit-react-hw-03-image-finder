import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

import PropTypes from 'prop-types';
import { pixabayCard } from 'services/api';

export default class ImageGallery extends Component {
  state = {
    searchCards: [],
    page: 1,
    perPage: 12,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevWord = prevProps.searchWord;
    const nextWord = this.props.searchWord;
    const { page } = this.state;

    if (prevWord !== nextWord) {
      console.log('nextWord', nextWord);

      await pixabayCard(nextWord, page)
        .then(searchCards => this.setState({ searchCards }))
        .catch(error => console.log(error));
    }
  }

  render() {
    const { searchCards } = this.state;

    console.log('searchCards - gallary', { searchCards });

    return (
      <ul className={css.imageGallery}>
        {searchCards.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  searchCards: PropTypes.array,
};
