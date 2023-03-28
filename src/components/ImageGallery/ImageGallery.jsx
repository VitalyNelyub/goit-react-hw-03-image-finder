import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.gallery}>Gallery ul
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
