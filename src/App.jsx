import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import Section from 'components/Section/Section';
import React, { Component } from 'react';
import css from './App.module.css';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    searchWord: '',
    status: 'idle',
    
  };

  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
    console.log('searchWord4', searchWord);
  };

  render() {
    return (
      <Section className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        
        {this.state.status === 'pending' && <Loader />}
        <ImageGallery searchWord={this.state.searchWord} status={this.state.status} />
      </Section>
    );
  }
}
