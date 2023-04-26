import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';
import './simple-carousel.scss';

const SimpleCarousel = ({ children, css, img, nav }) => {
  return (
    <div className={`simple-carousel ${css}`}>
      <div className="simple-carousel-wrap">
        {img.map((item, i) => {
          return (
            <div
              id={`carousel__slide${i + 1}`}
              tabindex="0"
              className="simple-carousel__slide"
              key={i}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleCarousel;
