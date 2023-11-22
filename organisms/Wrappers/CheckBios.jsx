import React from 'react';
import PropTypes from 'prop-types';
import { Img } from 'getbasecore/Atoms';
import { Alert } from 'getbasecore/Molecules';
import Main from 'components/organisms/Main/Main';

import {
  iconSuccess,
  iconDanger,
  iconWarning,
} from 'components/utils/images/images';

function CheckBios({
  ps1Bios,
  ps2Bios,
  switchBios,
  segaCDBios,
  saturnBios,
  dreamcastBios,
  DSBios,
}) {
  const biosText = (name) => {
    switch (name) {
      case true:
        return 'detected!';
      case false:
        return 'missing!';
      case null:
        return '...searching...';
      default:
        return '...searching...';
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
      <p className="lead">
        Some games will not load properly without BIOS files in place. Place
        your BIOS in Emulation/bios and use this BIOS Checker to ensure that you
        have the correct BIOS for your system.
      </p>
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
              {dreamcastBios
                ? 'detected!'
                : ' missing! It is not mandatory, but recommended'}
            </Alert>
          </div>

          <div data-col-sm="6">
            <Alert css="alert--info">
              <ul className="list">
                <li>
                  Tip 1: Not all systems require additional BIOS files. Listed
                  here are the more common systems.
                </li>
                <li>
                  Tip 2: Make sure you have the correct BIOS for your ROM
                  region. Your ROMs may come from the United States, Japan,
                  Europe, etc.
                </li>
                <li>
                  Tip 3: Casing matters. Even if your BIOS are detected, your
                  BIOS must be lowercase for Playstation 1 and Playstation 2.
                </li>
                <li>
                  Tip 4: Your BIOS files must be placed in Emulation/bios. Do
                  not make sub-folders for BIOS files. For the Nintendo Switch,
                  use our pre-created folders.
                </li>
                <li>
                  Tip 5: For systems not listed here, check the{' '}
                  <a
                    href="https://github.com/dragoonDorise/EmuDeck/wiki/Cheat-Sheet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EmuDeck Wiki Cheat Sheet.
                  </a>{' '}
                </li>
                <li>
                  You can use this link{' '}
                  <a
                    href="https://emulation.gametechwiki.com/index.php/File_hashes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>{' '}
                  as a handy guide for how your BIOS should be named.
                </li>
              </ul>
            </Alert>
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
