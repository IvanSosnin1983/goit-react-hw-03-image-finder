import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Searchbar from './Searchbar';
import Modal from './Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoad: false,
    isLoadMore: false,
    isModalOpen: false,
    largeImageURL: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoad: true });

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=33197930-0348e44db3821c8c552d6d0a0&image_type=photo&orientation=horizontal&per_page=12&`
        );
        console.log(response);
        if (response.data.hits.length === 0) {
          toast.error('Sorry! Nothing found. Try again');
        }
        this.setState({ isLoadMore: response.data.hits.length === 12 });
        if (prevState.query !== query) {
          this.setState({ images: [...response.data.hits] });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
          }));
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoad: false });
      }
    }
  }
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };
  resetImages = () => {
    this.setState({ images: [] });
  };

  handleSubmit = (searchValues, { resetForm }) => {
    this.setState({ query: searchValues });
    this.resetPage();
    if (searchValues === this.state.query && this.state.page !== 1) {
      this.resetImages();
    }
    resetForm();
  };
  toggleModal = largeImageURL => {
    this.setState({ largeImageURL });

    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { isLoad, isLoadMore, isModalOpen, images, largeImageURL } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            isModal={isModalOpen}
            openModal={this.toggleModal}
          />
        )}
        {isLoad && <Loader />}
        {isLoadMore && <Button onClick={this.loadMore} />}
        <ToastContainer autoClose={1500} />
        {isModalOpen && (
          <Modal largImage={largeImageURL} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
