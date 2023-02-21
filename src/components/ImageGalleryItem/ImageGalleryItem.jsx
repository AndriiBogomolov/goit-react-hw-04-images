import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryStyles, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <>
      <GalleryStyles onClick={handleToggleModal} className="ImageGalleryItem">
        <GalleryImage
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt="img"
        />
      </GalleryStyles>
      {isModalOpen && (
        <Modal onClose={handleToggleModal} largeImg={largeImageURL} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
