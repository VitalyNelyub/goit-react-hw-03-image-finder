import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.gallery__item}>
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
