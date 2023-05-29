import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple } from 'getbasecore/Atoms';

import './store-game.scss';

function StoreGame({ css, img, title, tags, onMore, onInstall, disabled }) {
  return (
    <li className={`store-game ${css}`}>
      <div className="store-game__img">
        <img src={img} alt={title} />
      </div>

      <div className="store-game__info">
        <div className="store-game__title">
          <span className="h6">{title}</span>
        </div>
      </div>

      <div className="store-game__tags">
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
      <div className="store-game__buttons">
        <BtnSimple
          css="btn-simple--xs btn-simple--1"
          type="button"
          aria="Next"
          onClick={() => onInstall()}
          disabled={disabled}
        >
          Install
        </BtnSimple>

        <BtnSimple
          css="btn-simple--xs btn-simple--1"
          type="button"
          aria="Next"
          onClick={() => onMore()}
        >
          More info
        </BtnSimple>
      </div>
    </li>
  );
}

StoreGame.propTypes = {
  css: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  onMore: PropTypes.func,
  onInstall: PropTypes.func,
  disabled: PropTypes.string,
};

StoreGame.defaultProps = {
  css: '',
  img: '',
  title: '',
  tags: '',
  onMore: () => {},
  onInstall: () => {},
  disabled: '',
};

export default StoreGame;
