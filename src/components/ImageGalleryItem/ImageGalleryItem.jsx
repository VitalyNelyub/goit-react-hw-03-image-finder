import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    currentImage: null,
  };

  showModalImg = image => {
    this.setState({ currentImage: image });
    // console.log(this.state.currentImage);
    this.props.showModal(this.state.currentImage);
  };

  showImage = e => {
    e.preventDefault();
    // console.log(e.target.src);
    // console.log(e.target.alt);
    this.setState({ currentImage: e.target.src });
    // this.props.showModalImg(e.target.src);
    this.props.showModal(e.target.src);
  };

  render() {
    // console.log(this.props.images);
    if (this.props.images)
      return this.props.images.map(img => {
        return (
          <li key={img.id} className={css.gallery__item}>
            <a href="#" onClick={this.showImage}>
              <img
                src={img.webformatURL}
                className={css.gallery__img}
                alt={img.tags}
              />
            </a>
          </li>
        );
      });
  }
}

export default ImageGalleryItem;
