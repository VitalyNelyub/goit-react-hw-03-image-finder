import { Component } from 'react';
import css from '../Button/Button.module.css';
// import { fetchImages } from '../Srvice/Fetch';

class Button extends Component {
  state = {};

  // loadMore = () => {
  //   const test = 'subaru';
  //   // console.log(fetchImages(test))
  //   console.log('MOREEEEE');
  //   // console.log(fetchImages('subaru'));

  //   // fetchImages(test).then(data => console.log(data));
  // };

  // fetchImages();

  render() {
    // console.log(this.props.currentValue);
    return (
      <button
        type="button"
        className={css.load__moreBtn}
        onClick={this.props.loadMore}
      >
        Load more
      </button>
    );
  }
}

export default Button;
