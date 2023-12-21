import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import api from 'services/api';

export default class ImageGallery extends Component {
  state = {
    searchCards: [],
    page: 1,
    perPage: 12,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevWord = prevProps.searchWord;
    const nextWord = this.props.searchWord;
    const { page } = this.state;
    if (prevWord !== nextWord) {
      console.log('nextWord', nextWord);

      api
        .pixabayCard(nextWord, page)
        .then(searchCards => this.setState({ searchCards }))
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <ul className={css.imageGallery}>
        <ImageGalleryItem searchCards={this.state.searchCards} />
        {console.log ('searchCards - gallary', this.state.searchCards)}
      </ul>
    );
  }
}
