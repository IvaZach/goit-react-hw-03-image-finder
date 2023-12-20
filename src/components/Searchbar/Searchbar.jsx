import css from './Searchbar.module.css';
export const Searchbar = ({ onSubmit }) => {(
  <header className={css.searchbar}>
    <form className={css.searchForm}>
      <button
        type="submit"
        className={css.searchForm_button}
        onSubmit={onSubmit}
      >
        <span className={css.searchForm_button_label}>Search</span>
      </button>

      <input
        className={css.searchForm_input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>)
};
