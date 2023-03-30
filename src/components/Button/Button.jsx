import { Component } from 'react';
import css from '../Button/Button.module.css';
// import { fetchImages } from '../Srvice/Fetch';

class Button extends Component {
  state = {};

  loadMore = () => {
    console.log('MOREEEEE');
    // console.log(fetchImages('subaru'));
    // fetchImages('subaru');
  };

  render() {
    // console.log(this.props.currentValue);
    return (
      <button
        type="button"
        className={css.load__moreBtn}
        // onClick={this.loadMore}
      >
        Load more
      </button>
    );
  }
}

export default Button;
