import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          onClick={() => openModal(largeImageURL)}
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
