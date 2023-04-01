import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
// import Modal from './Modal/Modal';
import { fetchImages } from '../components/Srvice/Fetch';

class App extends Component {
  state = {
    value: '',
    images: null,
    page: 1,
    isHidden: false,
    loader: false,
  };

  getCurrentFetchValue = currentValue => {
    this.setState({ value: currentValue });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ loader: true });
      fetchImages(this.state.value, this.state.page).then(data =>
        this.setState({
          images: data.data.hits,
          isHidden: true,
          loader: false,
        })
      );
    }
  }

  loadMore = () => {
    const nextPage = this.state.page + 1;
    fetchImages(this.state.value, nextPage).then(data => {
      if (data.data.hits.length === 0) {
        this.setState({ isHidden: false });
        alert('No more photo');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.data.hits],
        page: nextPage,
      }));
    });
  };

  render() {
    return (
      <div>
        <Searchbar getCurrentFetchValue={this.getCurrentFetchValue} />

        {<ImageGallery images={this.state.images} />}

        {this.state.loader && <Loader />}
        {this.state.isHidden && (
          <Button currentValue={this.state.value} loadMore={this.loadMore} />
        )}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
