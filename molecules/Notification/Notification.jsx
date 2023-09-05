import React from 'react';
import PropTypes from 'prop-types';

import './notification.scss';

function Notification({ children, css }) {
  return <div className={`notification ${css}`}>{children}</div>;
}
Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.string,
};

Notification.defaultProps = {
  children: '',
  css: '',
};

export default Notification;
