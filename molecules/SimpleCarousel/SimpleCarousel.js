import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';
import './simple-carousel.scss';

const SimpleCarousel = ({ children, css, img, nav }) => {
  return (
    <div className={`simple-carousel ${css}`}>
      <div className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {img.map((item, i) => {
            return (
              <li
                id={`carousel__slide${i + 1}`}
                tabindex="0"
                className="carousel__slide"
                key={i}
              >
                <div className="carousel__snapper">{item}</div>
              </li>
            );
          })}
        </ol>
        {nav && (
          <nav className="carousel__navigation">
            <ol className="carousel__navigation-list">
              {img.map((item, i) => {
                return (
                  <li className="carousel__navigation-item">
                    <a
                      href={`#carousel__slide${i + 1}`}
                      className="carousel__navigation-button"
                    >
                      Go to slide {i + 1}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default SimpleCarousel;
