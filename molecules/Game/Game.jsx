import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './game.scss';

function Game({ css = '', img = '', title = '', tags = '', onClick = () => {} }) {
  const [imgError, setImgError] = useState(false);
  const showImg = img && !imgError;

  useEffect(() => {
    setImgError(false);
  }, [img]);

  return (
    <li className={`game ${css}`} onClick={() => onClick()}>
      {showImg && (
        <div className="game__img">
          <img src={img} alt={title} onError={() => setImgError(true)} />
        </div>
      )}

      {!showImg && title && (
        <div className="game__info">
          <div className="game__title">
            <span className="h6">{title}</span>
          </div>
        </div>
      )}

      <div className="game__tags">
        {tags &&
          tags.map((item) => {
            return (
              <small
                key={item}
                className="tag"
                style={{ background: `var(--${item})` }}
              >
                {item}
              </small>
            );
          })}
      </div>
    </li>
  );
}

Game.propTypes = {
  css: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};

export default Game;
