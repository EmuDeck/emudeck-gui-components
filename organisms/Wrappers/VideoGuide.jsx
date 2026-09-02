import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { Iframe } from 'getbasecore/Atoms';

function VideoGuide({ onClick, minute }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <p className="lead">{t('VideoGuidePage.intro')}</p>
      <Main>
        <div className="container--grid">
          <div data-col-sm="7">
            <Iframe
              src={`https://www.youtube-nocookie.com/embed/rs9jDHIDKkUstart=${minute}&autoplay=${
                minute !== 0 ? 1 : 0
              }&modestbranding=1&rel=0&showinfo=0`}
            />
          </div>
          <div data-col-sm="5">
            <span className="h4">{t('VideoGuidePage.sections')}</span>
            <ol className="list">
              <li className="h6">
                <button type="button" onClick={() => onClick(76)}>
                  {t('VideoGuidePage.introduction')}
                </button>
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(159)}>
                  {t('VideoGuidePage.writtenGuide')}
                </button>
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(229)}>
                  {t('VideoGuidePage.installing')}
                </button>{' '}
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(402)}>
                  {t('VideoGuidePage.configuringGames')}
                </button>{' '}
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(553)}>
                  {t('VideoGuidePage.configuringSRM')}
                </button>{' '}
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(657)}>
                  {t('VideoGuidePage.tools')}
                </button>
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(810)}>
                  {t('VideoGuidePage.tips')}
                </button>
              </li>
            </ol>
          </div>
        </div>
      </Main>
      z
    </>
  );
}

VideoGuide.propTypes = {
  minute: PropTypes.string,
  onClick: PropTypes.func,
};

VideoGuide.defaultProps = {
  minute: '',
  onClick: '',
};

export default VideoGuide;
