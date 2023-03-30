import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChangeStarch = e => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
    // this.props.getCurrentFetchValue(e.target.value)
  };

  getInputValue = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.getCurrentFetchValue(value);
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.searchForm} onSubmit={this.getInputValue}>
            <button type="submit" className={css.button}>
              <span className={css.button__label}>Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              //   autocomplete="off"
              //   autofocus
              placeholder="Search images and photos"
              onChange={this.handleChangeStarch}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
