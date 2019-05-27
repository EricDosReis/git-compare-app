import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Loader from '../Loader';

const Button = ({ label, isLoading, isSubmit }) => (
  <Container type={isSubmit ? 'submit' : 'button'}>
    {isLoading ? <Loader /> : label}
  </Container>
);

Button.defaultProps = {
  label: '',
  isLoading: false,
  isSubmit: true,
};

Button.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  isSubmit: PropTypes.bool,
};

export default Button;
