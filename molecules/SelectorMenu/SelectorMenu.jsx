import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import './selector-menu.scss';

function SelectorMenu({ css, imgs, options, details, title, toggle }) {
  return (
    <div className={`selector-menu ${css}`}>
      <div className="selector-menu__text">
        <div className="selector-menu__options selector-menu__options--full">
          {title && <p>{title}</p>}
          {!toggle && (
            <ul>
              {options &&
                options.map((item) => {
                  const func = item[0];
                  const cssOption = item[1];
                  const title = item[2];
                  const desc = item[3];
                  const enabled = item[4];

                  return (
                    <li className={enabled ? '' : 'is-hidden'}>
                      <Card onClick={() => func()} css={cssOption}>
                        <span className="h4">{title}</span>
                        {desc && (
                          <p dangerouslySetInnerHTML={{ __html: desc }} />
                        )}
                      </Card>
                    </li>
                  );
                })}
            </ul>
          )}
          {toggle && (
            <>
              <input
                type="checkbox"
                value="1"
                id={title}
                class="toggleCheckbox"
              />
              <label for={title} class="toggleContainer">
                {options &&
                  options.map((item) => {
                    const func = item[0];
                    const cssOption = item[1];
                    const title = item[2];
                    const desc = item[3];
                    const enabled = item[4];

                    return (
                      <div onClick={() => func()} css={cssOption}>
                        {title}
                      </div>
                    );
                  })}
              </label>
            </>
          )}
        </div>
        <div className="selector-menu__details">
          {details && (
            <>
              <p className="lead">Settings will be applied to</p>
              <ul>
                {details.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="selector-menu__img">
        {imgs &&
          imgs.map((item) => {
            const img = item[0];
            const cssImg = item[1];
            return <img src={img} alt="Background" className={cssImg} />;
          })}
      </div>
    </div>
  );
}

SelectorMenu.propTypes = {
  css: PropTypes.string,
  imgs: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
  ),
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
  ),
  details: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
  ),
  title: PropTypes.string,
};

SelectorMenu.defaultProps = {
  css: '',
  imgs: '',
  options: '',
  details: '',
  title: '',
};

export default SelectorMenu;
