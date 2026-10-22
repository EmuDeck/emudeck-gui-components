import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/atoms/Stars/Stars';

import './game.scss';

function Game({
  css = '',
  img = '',
  fallbackImg = '',
  title = '',
  price = null,
  currency = '',
  description = '',
  rating = null,
  tags = [],
  onClick = () => {},
}) {
  const { t } = useTranslation();
  const [failedImgs, setFailedImgs] = useState(0);
  const sources = [img, fallbackImg].filter(Boolean);
  const src = sources[failedImgs];
  const priceLabel = price ? `${price} ${currency}` : t('StorePage.free');

  useEffect(() => {
    setFailedImgs(0);
  }, [img, fallbackImg]);

  return (
    <li
      className={`game ${price !== null ? 'game--store' : ''} ${css}`}
      onClick={() => onClick()}
    >
      {src && (
        <div className="game__img">
          <img
            src={src}
            alt={title}
            onError={() => setFailedImgs(failedImgs + 1)}
          />
        </div>
      )}

      {(price !== null || !src) && title && (
        <div className="game__info">
          <div className="game__title">
            <span className="h6">{title}</span>
            {price !== null && (
              <span className="game__price">{priceLabel}</span>
            )}
          </div>
          {description && <p className="game__description">{description}</p>}
          {rating && (
            <Stars rating={rating.avg} />
          )}
          {tags.length > 0 && (
            <div className="game__tags">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="game__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </li>
  );
}

Game.propTypes = {
  css: PropTypes.string,
  img: PropTypes.string,
  fallbackImg: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.object,
  tags: PropTypes.array,
  onClick: PropTypes.func,
};

export default Game;
