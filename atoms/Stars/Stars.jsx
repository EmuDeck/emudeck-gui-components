import React from 'react';
import PropTypes from 'prop-types';

import './stars.scss';

function Stars({ rating = 0, onRate = null }) {
  return (
    <div className={`stars ${onRate ? 'stars--interactive' : ''}`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const css = `stars__star ${
          rating && star <= Math.round(rating) ? 'is-filled' : ''
        }`;
        const icon = (
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
        if (onRate) {
          return (
            <button
              key={star}
              type="button"
              className={css}
              aria-label={`${star}/5`}
              onClick={() => onRate(star)}
            >
              {icon}
            </button>
          );
        }
        return (
          <span key={star} className={css}>
            {icon}
          </span>
        );
      })}
    </div>
  );
}

Stars.propTypes = {
  rating: PropTypes.number,
  onRate: PropTypes.func,
};

export default Stars;
