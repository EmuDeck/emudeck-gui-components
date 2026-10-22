import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/atoms/Stars/Stars';
import { BtnSimple } from 'getbasecore/Atoms';

import './game-detail.scss';

function GameDetail({
  game,
  comments = [],
  status = '',
  owned = false,
  onAction = () => {},
  onClose = () => {},
}) {
  const { t } = useTranslation();
  const priceLabel = game.price
    ? `${game.price} ${game.currency}`
    : t('StorePage.free');
  const installing = status === 'installing';
  const actionLabel = game.price && !owned ? priceLabel : t('general.install');
  const statusText = {
    installing: t('StorePage.installing'),
    installed: t('StorePage.installed'),
    error: t('StorePage.installError'),
  }[status];
  const artwork = game.artwork || {};
  const video = (artwork.video || [])[0];
  const titlescreen = (artwork.titlescreen || [])[0];
  const screenshots = artwork.screenshot || [];

  return (
    <div className="game-detail">
      <button
        type="button"
        className="game-detail__close"
        aria-label={t('general.close')}
        onClick={onClose}
      >
        ✕
      </button>

      <div className="game-detail__gallery">
        {video ? (
          <video src={video} autoPlay loop muted playsInline controls />
        ) : (
          titlescreen && <img src={titlescreen} alt={game.name} />
        )}
        {screenshots.map((screenshot) => (
          <img key={screenshot} src={screenshot} alt={game.name} />
        ))}
      </div>

      <div className="game-detail__content">
        <span className="h2">{game.name}</span>
        <div className="game-detail__meta">
          <span className="game-detail__platform">{game.platform}</span>
          <span className="game-detail__price">{priceLabel}</span>
          {game.developer_name && (
            <small>{t('StorePage.by', { name: game.developer_name })}</small>
          )}
        </div>
        {game.rating && <Stars rating={game.rating.avg} />}
        {game.tags && game.tags.length > 0 && (
          <div className="game-detail__tags">
            {game.tags.map((tag) => (
              <span key={tag} className="game-detail__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="game-detail__action">
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria={actionLabel}
            disabled={installing}
            onClick={onAction}
          >
            {installing ? t('StorePage.installing') : actionLabel}
          </BtnSimple>
          {statusText && (
            <small className="game-detail__status">{statusText}</small>
          )}
        </div>

        <p>{game.description || t('StorePage.noDescription')}</p>

        <div className="game-detail__comments">
          <span className="h5">{t('StorePage.comments')}</span>
          {comments.length === 0 && <small>{t('StorePage.noComments')}</small>}
          {comments.map((comment) => (
            <div key={comment.id} className="game-detail__comment">
              <div className="game-detail__comment-header">
                <small>{comment.author}</small>
                <small>{new Date(comment.date).toLocaleDateString()}</small>
              </div>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object.isRequired,
  comments: PropTypes.array,
  status: PropTypes.string,
  owned: PropTypes.bool,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
};

export default GameDetail;
