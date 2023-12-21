import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value.trim().toLowerCase() });
    console.log(name);
    console.log(value.trim().toLowerCase());
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      return;
    }
    const searchWord = {
      searchName: this.state.searchName,
    };
    console.log('searchWord1', searchWord);
    this.props.onSubmit(this.state.searchName);
    console.log('searchWord2', searchWord);
    this.reset();
  };

  reset = () => {
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchName"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
