import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

function Uninstall({ onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <br />
        <div>
          <a
            href="https://discord.gg/b9F7GpXtFP"
            aria-label={t('aria.goNext')}
            className="btn-simple btn-simple--1"
            target="_blank"
            rel="noreferrer"
          >
            {t('UninstallPage.discord')}
          </a>
          <a
            href="https://www.reddit.com/r/EmuDeck/"
            aria-label={t('aria.goNext')}
            className="btn-simple btn-simple--1"
            target="_blank"
            rel="noreferrer"
          >
            {t('UninstallPage.reddit')}
          </a>
        </div>
        <p className="lead">{t('UninstallPage.confirm')}</p>
        <BtnSimple
          css="btn-simple--3"
          type="button"
          onClick={() => onClick()}
          aria={t('aria.goNext')}
        >
          {t('UninstallPage.title')}
        </BtnSimple>
      </Main>
    </>
  );
}

Uninstall.propTypes = {
  onClick: PropTypes.func,
};

Uninstall.defaultProps = {
  onClick: '',
};

export default Uninstall;
