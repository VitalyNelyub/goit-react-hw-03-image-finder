import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.searchForm} onSubmit={this.props.SearchImages}>
            <button type="submit" className={css.button}>
              <span className={css.button__label}>Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              //   autocomplete="off"
              //   autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
