import { useTranslation } from 'react-i18next';
import React from 'react';
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
  segaCDBios,
  saturnBios,
  dreamcastBios,
  DSBios,
}) {
  const { t, i18n } = useTranslation();
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
            <Alert css={`alert--mini ${biosCSS(switchBios)}`}>
              {biosText(switchBios).includes('missing') ? (
                <Img src={iconDanger} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              )}{' '}
              Nintendo Switch Firmware {biosText(switchBios)}
            </Alert>
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
              {dreamcastBios ? t('CheckBios.detected') : t('CheckBios.missing')}
            </Alert>
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

CheckBios.defaultProps = {
  ps1Bios: '',
  ps2Bios: '',
  switchBios: '',
  segaCDBios: '',
  saturnBios: '',
  dreamcastBios: '',
  DSBios: '',
  checkBiosAgain: '',
};

export default CheckBios;
