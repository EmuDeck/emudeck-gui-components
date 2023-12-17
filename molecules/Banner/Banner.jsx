import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

function Banner({ children, css, onClick }) {
  return (
    <div className={`banner ${css}`} onClick={onClick}>
      {children}
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.any,
  onClick: PropTypes.func,
};

Banner.defaultProps = {
  children: '',
  css: '',
  onClick: () => {},
};

export default Banner;
