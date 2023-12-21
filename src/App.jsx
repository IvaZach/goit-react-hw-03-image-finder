import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import Section from 'components/Section/Section';
import React, { Component } from 'react';
import css from './App.module.css';

// <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> і <Modal>

export class App extends Component {
  state = {
    searchWord: '',

    status: 'idle',
    isLoading: false,
  };

  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
    console.log('searchWord4', searchWord);
  };

  render() {
    return (
      <Section className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* {this.state.isLoading && ( */}
        <ImageGallery searchWord={this.state.searchWord} />
       

        
      </Section>
    );
  }
}
