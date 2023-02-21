import PropTypes from 'prop-types';
import React from 'react';
import { ButtonStyles } from './Button.styled';

export function Button({ onClick }) {
  return (
    <ButtonStyles type="button" onClick={onClick}>
      Load More
    </ButtonStyles>
  );
}

Button.propTypes = { onClick: PropTypes.func.isRequired };
