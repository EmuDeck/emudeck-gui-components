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
        <p className="lead">
          Plug a USB Drive into the Steam Deck USB C port, using a hub or
          adapter. EmuDeck will create a ROMs and BIOS folder, allowing you to
          copy your ROMs and BIOS to your USB Drive on another device. When you
          are ready, return to this page, and EmuDeck will transfer your newly
          copied files to your Steam Deck.
        </p>
      )}
      <Main>
        <div className="container--grid">
          {statusCopyGames !== true && (
            <>
              <div data-col-sm="4">
                <span className="h4">Select your USB Drive</span>
                <div className="cards">
                  <Card
                    css={
                      storageUSB === 'Custom card--horizontal' &&
                      'is-selected card--horizontal'
                    }
                    onClick={() => onClick('Custom')}
                  >
                    <img src={imgExternal} width="100" alt="Background" />
                    <span className="h6">USB Drive</span>
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
                      aria="Start CopyGames"
                      onClick={() => onClickStart()}
                    >
                      Step 1: Prepare USB drive
                      <br />
                      <em>(we won't delete anything)</em>
                    </BtnSimple>
                  )}
                {statusCopyGames === null &&
                  storageUSBPath !== undefined &&
                  statusCreateStructure === 'waiting' && (
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      aria="Waiting CopyGames"
                    >
                      Creating EmuDeck folders...
                    </BtnSimple>
                  )}

                {statusCreateStructure === true && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria="Waiting CopyGames"
                    onClick={() => onClickCopyGames()}
                  >
                    Step 2: Transfer your ROMs & BIOS from the USB
                    <br />
                    <em>(Make sure you already copied them in the USB)</em>
                  </BtnSimple>
                )}

                {statusCopyGames === 'waiting' && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria="Waiting CopyGames"
                    disabled
                  >
                    Copying games...
                  </BtnSimple>
                )}
              </div>
              <div data-col-sm="2" />
              <div data-col-sm="6">
                <img src={imgUSBDeck} alt="Insert USB" />
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

export default CopyGamesAuto;
