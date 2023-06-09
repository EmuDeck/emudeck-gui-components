import React from 'react';
import PropTypes from 'prop-types';

import './simple-carousel.scss';

function SimpleCarousel({ css, img }) {
  return (
    <div className={`simple-carousel ${css}`}>
      <div className="simple-carousel-wrap">
        {img.map((item, i) => {
          return (
            <div
              id={`carousel__slide${i + 1}`}
              className="simple-carousel__slide"
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

SimpleCarousel.propTypes = {
  img: PropTypes.string,
  css: PropTypes.string,
};

SimpleCarousel.defaultProps = {
  img: '',
  css: PropTypes.string,
};

export default SimpleCarousel;
