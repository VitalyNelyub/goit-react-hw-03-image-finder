import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      // console.log(this.props.images.id)
      <ul className={css.gallery}>
        <ImageGalleryItem images={this.props.images} />
      </ul>
    );
  }
}

export default ImageGallery;
