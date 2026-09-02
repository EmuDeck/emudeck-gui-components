import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';

import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

function CHDTool({ disabledNext, onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            <strong>{t('CHDToolPage.cso.title')}</strong>
            <br />
            {t('CHDToolPage.cso.description')} <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>{t('CHDToolPage.chd.title')}</strong>
            <br />
            {t('CHDToolPage.chd.description')}
            <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>{t('CHDToolPage.rvz.title')}</strong>
            <br />
            {t('CHDToolPage.rvz.description')}
            <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>{t('CHDToolPage.trimmed3ds.title')}</strong>
            <br />
            {t('CHDToolPage.trimmed3ds.description')} <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>{t('CHDToolPage.xiso.title')}</strong>
            <br />
            {t('CHDToolPage.xiso.description')} <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>{t('CHDToolPage.sevenzip.title')}</strong>
            <br />
            {t('CHDToolPage.sevenzip.description')} <br />
            <br />
            <hr />
          </div>
        </div>
        <div className="form">
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria={t('aria.installCHDTool')}
            onClick={() => onClick()}
          >
            {t('CHDToolPage.run')}
          </BtnSimple>
        </div>
      </Main>
    </>
  );
}

CHDTool.propTypes = {
  disabledNext: PropTypes.bool,
  onClick: PropTypes.func,
};

CHDTool.defaultProps = {
  disabledNext: true,
  onClick: '',
};

export default CHDTool;
