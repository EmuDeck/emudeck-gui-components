import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple } from 'getbasecore/Atoms';
import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';

import {
  rbsimple2,
  imgSTEAM,
  imgExternal,
  imgUSBDeck,
} from 'components/utils/images/images';

function CopyGamesAuto({
  onClick,
  onClickStart,
  onClickCopyGames,
  storageUSB,
  storageUSBPath,
  storagePathDestination,
  statusCopyGames,
  statusCreateStructure,
  installFrontends,
}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      {statusCopyGames !== true && (
        <p className="lead">{t('CopyGamesPage.usb.intro')}</p>
      )}
      <Main>
        <div className="container--grid">
          {statusCopyGames !== true && (
            <>
              <div data-col-sm="4">
                <span className="h4">{t('CopyGamesPage.usb.select')}</span>
                <div className="cards">
                  <Card
                    css={
                      storageUSB === 'Custom card--horizontal' &&
                      'is-selected card--horizontal'
                    }
                    onClick={() => onClick('Custom')}
                  >
                    <img src={imgExternal} width="100" alt="Background" />
                    <span className="h6">{t('CopyGamesPage.usb.drive')}</span>
                    {storageUSBPath && storageUSB === 'Custom' && (
                      <span className="h6">{storagePathDestination}</span>
                    )}
                  </Card>
                </div>

                {statusCopyGames === null &&
                  storageUSBPath !== undefined &&
                  statusCreateStructure === null &&
                  storageUSBPath !== '' && (
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      aria={t('aria.startCopyGames')}
                      onClick={() => onClickStart()}
                    >
                      {t('CopyGamesPage.usb.step1')}
                      <br />
                      <em>{t('CopyGamesPage.usb.step1Note')}</em>
                    </BtnSimple>
                  )}
                {statusCopyGames === null &&
                  storageUSBPath !== undefined &&
                  statusCreateStructure === 'waiting' && (
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      aria={t('aria.waitingCopyGames')}
                    >
                      {t('CopyGamesPage.usb.creatingFolders')}
                    </BtnSimple>
                  )}

                {statusCreateStructure === true && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria={t('aria.waitingCopyGames')}
                    onClick={() => onClickCopyGames()}
                  >
                    {t('CopyGamesPage.usb.step2')}
                    <br />
                    <em>{t('CopyGamesPage.usb.step2Note')}</em>
                  </BtnSimple>
                )}

                {statusCopyGames === 'waiting' && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria={t('aria.waitingCopyGames')}
                    disabled
                  >
                    {t('CopyGamesPage.usb.copying')}
                  </BtnSimple>
                )}
              </div>
              <div data-col-sm="2" />
              <div data-col-sm="6">
                <img src={imgUSBDeck} alt={t('CopyGamesPage.usb.insertUsb')} />
              </div>
            </>
          )}
        </div>
      </Main>
    </>
  );
}

CopyGamesAuto.propTypes = {
  onClick: PropTypes.func,
  onClickStart: PropTypes.func,
  onClickCopyGames: PropTypes.func,
  storageUSB: PropTypes.string,
  storageUSBPath: PropTypes.string,
  storagePathDestination: PropTypes.string,
  statusCopyGames: PropTypes.string,
  statusCreateStructure: PropTypes.bool,
  installFrontends: PropTypes.any,
};

CopyGamesAuto.defaultProps = {
  onClick: '',
  onClickStart: '',
  onClickCopyGames: '',
  storageUSB: '',
  storageUSBPath: '',
  storagePathDestination: '',
  statusCopyGames: '',
  statusCreateStructure: '',
  installFrontends: '',
};

export default CopyGamesAuto;
