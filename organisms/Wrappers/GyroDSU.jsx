import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple, FormInputSimple, LinkSimple } from 'getbasecore/Atoms';
import Notification from 'components/molecules/Notification/Notification';
import Main from 'components/organisms/Main/Main';

import { gyroDsuImg } from 'components/utils/images/images';

function GyroDSU({
  installClick,
  showNotification,
  textNotification,
  disableButton,
}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria={t('general.install')}
              onClick={installClick}
              disabled={disableButton && 'true'}
            >
              {t('general.install')}
            </BtnSimple>
          </div>
        </div>
      </Main>
    </>
  );
}

GyroDSU.propTypes = {
  installClick: PropTypes.func,
  showNotification: PropTypes.bool,
  textNotification: PropTypes.string,
  disableButton: PropTypes.bool,
};

GyroDSU.defaultProps = {
  installClick: '',
  showNotification: '',
  textNotification: '',
  disableButton: '',
};

export default GyroDSU;
