import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple, Img } from 'getbasecore/Atoms';
import './card-settings.scss';

function CardSettings({
  css,
  btnCSS,
  onClick,
  icon,
  title,
  description,
  button,
  iconSize,
  type,
  href,
  notification,
  disabled,
}) {
  return (
    <button
      type="button"
      className={`card-setting ${css}`}
      onClick={() => onClick()}
    >
      {notification && <span className="card-setting__notification">!</span>}
      <ul>
        <li className={`list--icons list--icons--${iconSize}`}>
          <div className="text">
            <Img src={icon} css={`icon icon--${iconSize}`} alt="OK" />
            {title}
          </div>
        </li>
      </ul>
      {description && <p>{description}</p>}
      {button && (
        <div className="card-setting__buttons">
          <BtnSimple
            css={`
              ${btnCSS} btn-simple--xs
            `}
            type={type}
            aria="Next"
            href={href}
            target="_blank"
            disabled={disabled}
          >
            {button}
          </BtnSimple>
        </div>
      )}
    </button>
  );
}

CardSettings.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.string,
  btnCSS: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  iconSize: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  notification: PropTypes.string,
  disabled: PropTypes.bool,
};

CardSettings.defaultProps = {
  btnCSS: '',
  onClick: '',
  icon: '',
  title: '',
  description: '',
  button: '',
  iconSize: '',
  type: 'button',
  href: '',
  notification: '',
  disabled: '',
};
export default CardSettings;
