import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple } from 'getbasecore/Atoms';

import './store-game.scss';

function StoreGame({ css, img, title, tags, onClick, onInstall, disabled }) {
  const { t, i18n } = useTranslation();
  return (
    <li className={`store-game ${css}`} onClick={() => onClick()}>
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

export default StoreGame;
