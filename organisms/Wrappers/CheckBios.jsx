import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import { Img } from 'getbasecore/Atoms';
import { Alert } from 'getbasecore/Molecules';
import Main from 'components/organisms/Main/Main';

import {
  iconSuccess,
  iconDanger,
  iconWarning,
} from 'components/utils/images/icons';

function CheckBios({
  ps1Bios,
  ps2Bios,
  switchBios,
  edenBios,
  citronBios,
  ryujinxBios,
  segaCDBios,
  saturnBios,
  dreamcastBios,
  DSBios,
}) {
  const { t, i18n } = useTranslation();

  const { state, setState } = useContext(GlobalContext);

  const { installEmus } = state;

  const biosText = (name) => {
    switch (name) {
      case true:
        return t('CheckBios.detected');
      case false:
        return t('CheckBios.missing');
      case null:
        return t('CheckBios.sarching');
      default:
        return t('CheckBios.sarching');
    }
  };

  const biosCSS = (name) => {
    switch (name) {
      case true:
        return 'alert--success ';
      case false:
        return 'alert--danger ';
      case null:
        return ' ';
      default:
        return ' ';
    }
  };

  return (
    <>
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            <div>
              <div data-col-sm="6">
                <Alert css={`alert--mini ${biosCSS(ps1Bios)}`}>
                  {biosText(ps1Bios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Playstation 1 BIOS {biosText(ps1Bios)}
                </Alert>
                <Alert css={`alert--mini ${biosCSS(ps2Bios)}`}>
                  {biosText(ps2Bios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Playstation 2 BIOS {biosText(ps2Bios)}
                </Alert>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div>
                <Alert css={`alert--mini ${biosCSS(switchBios)}`}>
                  {biosText(switchBios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Yuzu Firmware {biosText(switchBios)}
                </Alert>
              </div>
              <div>
                <Alert css={`alert--mini ${biosCSS(switchBios)}`}>
                  {biosText(switchBios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Eden Firmware {biosText(switchBios)}
                </Alert>
              </div>
              {installEmus.ryujinx.status && (
                <div>
                  <Alert css={`alert--mini ${biosCSS(ryujinxBios)}`}>
                    {biosText(ryujinxBios).includes('missing') ? (
                      <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    )}{' '}
                    Ryujinx Firmware {biosText(ryujinxBios)}
                  </Alert>
                </div>
              )}
              <div>
                <Alert css={`alert--mini ${biosCSS(citronBios)}`}>
                  {biosText(citronBios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Citron Firmware {biosText(citronBios)}
                </Alert>
              </div>
            </div>
            <div>
              <div data-col-sm="6">
                <Alert css={`alert--mini ${biosCSS(segaCDBios)}`}>
                  {biosText(segaCDBios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Sega CD BIOS {biosText(segaCDBios)}
                </Alert>
                <Alert css={`alert--mini ${biosCSS(saturnBios)}`}>
                  {biosText(saturnBios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Saturn BIOS {biosText(saturnBios)}
                </Alert>
                <Alert css={`alert--mini ${biosCSS(DSBios)}`}>
                  {biosText(DSBios).includes('missing') ? (
                    <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Nintendo DS BIOS {biosText(DSBios)}
                </Alert>
                <Alert
                  css={`alert--mini ${
                    dreamcastBios ? 'alert--success' : 'alert--warning'
                  }`}
                >
                  {biosText(DSBios).includes('missing') ? (
                    <Img src={iconWarning} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  )}{' '}
                  Dreamcast BIOS{' '}
                  {dreamcastBios
                    ? t('CheckBios.detected')
                    : t('CheckBios.missing')}
                </Alert>
              </div>
            </div>
          </div>
          <div data-col-sm="6">
            <ul className="list">
              <li>{t('CheckBios.tip1')}</li>
              <li>{t('CheckBios.tip2')}</li>
              <li>{t('CheckBios.tip3')}</li>
              <li>{t('CheckBios.tip4')}</li>
              <li>
                {t('CheckBios.tip5')}
                <a
                  href="https://emudeck.github.io/cheat-sheet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('CheckBios.cheat')}
                </a>
              </li>
              <li>
                {t('CheckBios.tip6')}
                <a
                  href="https://emulation.gametechwiki.com/index.php/File_hashes"
                  target="_blank"
                  rel="noreferrer"
                >
                  BIOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
}

CheckBios.propTypes = {
  ps1Bios: PropTypes.string,
  ps2Bios: PropTypes.string,
  switchBios: PropTypes.string,
  segaCDBios: PropTypes.string,
  saturnBios: PropTypes.string,
  dreamcastBios: PropTypes.string,
  DSBios: PropTypes.string,
  checkBiosAgain: PropTypes.func,
};

export default CheckBios;
