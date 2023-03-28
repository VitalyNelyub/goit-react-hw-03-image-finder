import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
// import style from './Style/style.css'

class App extends Component {


  SearchImages = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar SearchImages={ this.SearchImages} />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal/>
      </div>
    );
  }
}

export default App;
