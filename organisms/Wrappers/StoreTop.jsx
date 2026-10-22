import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';

import Main from 'components/organisms/Main/Main';

import './store-top.scss';

function StoreTop({ top = null, games = [], onClick = () => {} }) {
  const { t } = useTranslation();

  if (!top) {
    return <Main />;
  }

  const gameList = (list) => {
    if (!list.length) {
      return <p>{t('StorePage.noTop')}</p>;
    }
    return (
      <ol className="store-top__list">
        {list.map((item, index) => {
          const game = games.find((catalogGame) => catalogGame.id === item.id);
          const titlescreen = game && (game.artwork.titlescreen || [])[0];
          return (
            <li key={item.id}>
              <button
                type="button"
                className="store-top__row"
                onClick={() => game && onClick(game)}
              >
                <span
                  className={`store-top__rank ${index < 3 ? 'is-top' : ''}`}
                >
                  {index + 1}
                </span>
                {titlescreen ? (
                  <img className="store-top__thumb" src={titlescreen} alt="" />
                ) : (
                  <span className="store-top__thumb" />
                )}
                <span className="store-top__info">
                  <span className="h6">{item.name}</span>
                  <span className="store-top__platform">{item.platform}</span>
                </span>
                <span className="store-top__stats">
                  <span className="store-top__price">
                    {item.price
                      ? `${item.price} ${game ? game.currency : 'USD'}`
                      : t('StorePage.free')}
                  </span>
                  <small>
                    {t('StorePage.downloads', { count: item.downloads })}
                  </small>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    );
  };

  return (
    <Main>
      <div className="store-top">
        <section className="store-top__section">
          <span className="h4">{t('StorePage.topFree')}</span>
          {gameList(top.free)}
        </section>
        <section className="store-top__section">
          <span className="h4">{t('StorePage.topPaid')}</span>
          {gameList(top.paid)}
        </section>
        {top.developers.length > 0 && (
          <section className="store-top__section store-top__section--developers">
            <span className="h4">{t('StorePage.topDevelopers')}</span>
            <ol className="store-top__list">
              {top.developers.map((developer, index) => (
                <li key={developer.id}>
                  <div className="store-top__row">
                    <span
                      className={`store-top__rank ${index < 3 ? 'is-top' : ''}`}
                    >
                      {index + 1}
                    </span>
                    <span className="store-top__thumb store-top__avatar">
                      {developer.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="store-top__info">
                      <span className="h6">{developer.name}</span>
                      <small>
                        {t('StorePage.games', { count: developer.total_games })}
                      </small>
                    </span>
                    <span className="store-top__stats">
                      <small>
                        {t('StorePage.downloads', {
                          count: developer.downloads,
                        })}
                      </small>
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </Main>
  );
}

StoreTop.propTypes = {
  top: PropTypes.object,
  games: PropTypes.array,
  onClick: PropTypes.func,
};

export default StoreTop;
