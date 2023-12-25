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
    showModal: false,
    modalLargeImage: '',
    status: 'idle'
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevWord = prevProps.searchWord;
    const nextWord = this.props.searchWord;
    const { page } = this.state;

    if (prevWord !== nextWord) {
      console.log('nextWord', nextWord);

      await pixabayCard(nextWord, page)
        .then(searchCards => this.setState({ searchCards: searchCards }))
        .catch(this.setState({status: 'error'}));
    }

    if (prevState.page !== page && page !== 1) {
      await pixabayCard(nextWord, page)
        .then(searchCards => {
          this.setState(prevState => ({
            searchCards: [...prevState.searchCards, ...searchCards],
          }));
        })
        .catch(this.setState({status: 'error'}));
    }
    
  }

  handleClickMore = e => {
    const pageNext = this.state.page + 1;
    console.log('pageNext:', pageNext);
    this.setState({ page: pageNext,
      status: 'pending' });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  modalImage = (id, largeImageURL, tags) => {
    this.setState({ modalLargeImage: { id: id, largeImageURL: largeImageURL, tags: tags } });
  };

  render() {
    const { searchCards } = this.state;

    console.log('searchCards - gallary', { searchCards });

    return (
      <>
        <ul className={css.imageGallery}>
          {searchCards.map(({ id, webformatURL, tags, largeImageURL }) => {
            const dataModalImage = () => this.modalImage(id, largeImageURL, tags)
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                onToggleModal={this.toggleModal}
                showModal={this.state.showModal}
                modalImage={dataModalImage}
              />
            );
          })}
        </ul>
        {searchCards.length > 0 && <Button onClick={this.handleClickMore} />}
        
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
