import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
// import axios from 'axios';
// import { async } from 'q';
import { fetchImages } from '../components/Srvice/Fetch';
// import style from './Style/style.css'

class App extends Component {
  state = {
    value: '',
    images: null,
  };

  getCurrentFetchValue = currentValue => {
    this.setState({ value: currentValue });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      fetchImages(this.state.value).then(data =>
        this.setState({ images: data.data.hits })
      );
    }
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
        <Searchbar getCurrentFetchValue={this.getCurrentFetchValue} />
        <ImageGallery images={this.state.images} />

        {/* <ImageGalleryItem images={this.state.images} /> */}

        {/* <Loader /> */}
        <Button currentValue={this.state.value} />
        <Modal />
      </div>
    );
  }
}

export default App;
