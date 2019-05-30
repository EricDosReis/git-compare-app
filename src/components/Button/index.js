import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Loader from '../Loader';

const Button = ({
  label, loading, submit, ...props
}) => (
  <Container
    type={submit ? 'submit' : 'button'}
    {...props}
  >
    {loading ? <Loader /> : label}
  </Container>
);

Button.defaultProps = {
  label: '',
  loading: false,
  submit: false,
  danger: false,
  disabled: false,
};

Button.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  submit: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
