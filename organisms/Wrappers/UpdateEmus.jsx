import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

function UpdateEmus({ onClickFlatpak, onClickAppImage, disabledNext }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <p>{t('UpdateEmus.title')}</p>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Update Emulators from the Discover Store"
          onClick={() => onClickFlatpak()}
          disabled={disabledNext && 'true'}
        >
          {t('UpdateEmus.btn1')}
        </BtnSimple>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Update AppImages, Binaries, and Windows Executables"
          onClick={() => onClickAppImage()}
          disabled={disabledNext && 'true'}
        >
          {t('UpdateEmus.btn2')}
        </BtnSimple>
      </Main>
    </>
  );
}

UpdateEmus.propTypes = {
  onClickFlatpak: PropTypes.func,
  onClickAppImage: PropTypes.func,
  disabledNext: PropTypes.bool,
};

UpdateEmus.defaultProps = {
  onClickFlatpak: '',
  onClickAppImage: '',
  disabledNext: false,
};

export default UpdateEmus;
