import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Sprite from 'components/atoms/Sprite/Sprite';
import Icon from 'components/atoms/Sprite/Icon';
import { LoaderCircle } from 'getbasecore/Atoms';
import useAsideResize from 'hooks/useAsideResize';

import 'components/molecules/Aside/aside.scss';
import './aside-library.scss';

function AsideLibrary({
  css = '',
  systems = [],
  missing = [],
  scraping = false,
  onClick = () => {},
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { asideClass, resizerProps } = useAsideResize();

  return (
    <aside className={`sidebar sidebar--library ${css} ${asideClass}`}>
      <div {...resizerProps} />
      <Sprite />
      <ul className="sidebar__elements">
        <li className="sidebar__back">
          <button type="button" onClick={() => navigate(-1)}>
            <div className="list--icons list--icons--xs">
              <div className="text">
                <Icon name="back" fill="transparent" />
                {t('general.back')}
              </div>
            </div>
          </button>
        </li>
        <li>
          <small>{t('LibraryPage.platforms')}</small>
        </li>
        {systems.map((platform) => (
          <li key={platform.id}>
            <button type="button" onClick={() => onClick(platform)}>
              <div className="list--icons list--icons--xs">
                <div className="text">
                  <img
                    className="icon icon--xs"
                    src={`emudeck-media://assets/controllers/${platform.id}.png`}
                    alt=""
                  />
                  {platform.title}
                  {scraping && missing.includes(platform.id) && (
                    <LoaderCircle aria="Loading" />
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

AsideLibrary.propTypes = {
  css: PropTypes.string,
  systems: PropTypes.array,
  missing: PropTypes.array,
  scraping: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AsideLibrary;
