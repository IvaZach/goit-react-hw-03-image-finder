import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

import PropTypes from 'prop-types';
import { pixabayCard } from 'services/api';
import { Button } from 'components/Button/Button';

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

    if (prevState.page !== page) {
      await pixabayCard(nextWord, page)
        .then(searchCards => this.setState({ searchCards }))
        .catch(error => console.log(error));
    }
  }

  handleClickMore = e => {
    const pageNext = this.state.page + 1;
    console.log('pageNext:', pageNext);
    this.setState({ page: pageNext });
  };

  render() {
    const { searchCards } = this.state;

    console.log('searchCards - gallary', { searchCards });

    return (
      <>
        <ul className={css.imageGallery}>
          {searchCards.map(
            ({ id, webformatURL, tags, largeImageURL, onImageClick }) => {
              const clickImage = () => onImageClick(largeImageURL);
              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  tags={tags}
                  largeImageURL={largeImageURL}
                  onClick={clickImage}
                />
              );
            }
          )}
        </ul>
        <Button onClick={this.handleClickMore} />
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchCards: PropTypes.array,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.number,
  page: PropTypes.number,
};
