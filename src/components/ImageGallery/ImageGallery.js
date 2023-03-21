import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} openModal={openModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
