import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import './ErrorMessage.scss';
import './transitions/slide.scss';

const ErrorMessage = ({ message }) => {
  return (
    <CSSTransition in={message} timeout={200} classNames="error">
      <div className="error_message">{message}</div>
    </CSSTransition>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
