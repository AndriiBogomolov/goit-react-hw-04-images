import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyles } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images }) {
  return (
    // console.log(images, 'it is in gallery'),
    <ImageGalleryStyles>
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </ImageGalleryStyles>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
