import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyles } from './Modal.styled';
const modalRef = document.querySelector('#modal-root');

export const Modal = ({ largeImg, onClose }) => {
  useEffect(() => {
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEsc);

    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  const onCloseByOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onCloseByOverlay}>
      <ModalStyles>
        <img src={largeImg} alt="" />
      </ModalStyles>
    </Overlay>,
    modalRef
  );
};

Modal.PropsTypes = {
  largeImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
