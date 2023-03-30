import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    // console.log(this.props.images);
    if (this.props.images)
      return this.props.images.map(img => {
        return (
          <li key={img.id} className={css.gallery__item}>
            <img src={img.webformatURL} className={css.gallery__img} alt={img.tags} />
          </li>
        );
      });
  }
}

export default ImageGalleryItem;

//  (
//       <li className={css.gallery__item}>
//         <img src="" alt="" />
//       </li>
//     );

// console.log(this.props.images);
//   // const { id, webformatURL, largeImageURL } = this.props.images;
//   if (this.props.images) {
//     return this.props.images.map(img => {
//       <li key={img.id} className={css.gallery__item}>
//         <img src={img.webformatURL} alt="" />
//       </li>;
//     });
//   }
