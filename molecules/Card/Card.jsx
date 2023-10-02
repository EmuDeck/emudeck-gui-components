import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

function Card({ children, css, onClick }) {
  return (
    <button type="button" className={`card ${css}`} onClick={onClick}>
      {children}
    </button>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  children: '',
  css: '',
  onClick: () => {
    
  },
};

export default Card;
