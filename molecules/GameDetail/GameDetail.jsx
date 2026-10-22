import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/atoms/Stars/Stars';
import { BtnSimple } from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import './game-detail.scss';

function GameDetail({
  game,
  comments = [],
  status = '',
  owned = false,
  installed = false,
  ratingStatus = '',
  commentStatus = '',
  reviewBlock = '',
  onRate = null,
  onComment = null,
  onAction = () => {},
  onClose = () => {},
}) {
  const { t } = useTranslation();
  const [commentText, setCommentText] = useState('');
  const ratingText = {
    sent: t('StorePage.rated'),
    error: t('StorePage.ratingError'),
  }[ratingStatus];
  const commentStatusText = {
    sending: t('StorePage.commentSending'),
    sent: t('StorePage.commentSent'),
    already: t('StorePage.commentAlready'),
    error: t('StorePage.commentError'),
  }[commentStatus];

  const reviewHint = t(`StorePage.${reviewBlock || 'login'}ToComment`);

  // Sends the comment and clears the box once the store accepts it
  const submitComment = () => {
    onComment(commentText.trim()).then((ok) => {
      if (ok) {
        setCommentText('');
      }
    });
  };
  const priceLabel = game.price
    ? `${game.price} ${game.currency}`
    : t('StorePage.free');
  const busy = status === 'installing' || status === 'uninstalling';
  let actionLabel = t('general.install');
  if (installed) {
    actionLabel = t('general.uninstall');
  } else if (game.price && !owned) {
    actionLabel = priceLabel;
  }
  const statusText = {
    installing: t('StorePage.installing'),
    installed: t('StorePage.installed'),
    error: t('StorePage.installError'),
    uninstalling: t('StorePage.uninstalling'),
    uninstalled: t('StorePage.uninstalled'),
    uninstallError: t('StorePage.uninstallError'),
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
        <div className="game-detail__rating">
          <Stars rating={game.rating ? game.rating.avg : 0} onRate={onRate} />
          {ratingText && <small>{ratingText}</small>}
        </div>
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
            css={installed ? 'btn-simple--3' : 'btn-simple--1'}
            type="button"
            aria={actionLabel}
            disabled={busy}
            onClick={onAction}
          >
            {busy ? statusText : actionLabel}
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
          {onComment ? (
            <Form css="game-detail__comment-form">
              <textarea
                className="form__control"
                rows="3"
                maxLength={1000}
                placeholder={t('StorePage.writeComment')}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="game-detail__action">
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria={t('StorePage.sendComment')}
                  disabled={!commentText.trim() || commentStatus === 'sending'}
                  onClick={submitComment}
                >
                  {t('StorePage.sendComment')}
                </BtnSimple>
                {commentStatusText && (
                  <small className="game-detail__status">{commentStatusText}</small>
                )}
              </div>
            </Form>
          ) : (
            <small>{reviewHint}</small>
          )}
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
  installed: PropTypes.bool,
  ratingStatus: PropTypes.string,
  commentStatus: PropTypes.string,
  reviewBlock: PropTypes.string,
  onRate: PropTypes.func,
  onComment: PropTypes.func,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
};

export default GameDetail;
