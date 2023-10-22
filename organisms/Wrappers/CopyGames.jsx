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

function CopyGames({
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
              <div data-col-sm="6">
                <span className="h4">Select your USB Drive</span>
                <div className="cards cards--half">
                  <Card
                    css={storageUSB === 'Custom' && 'is-selected'}
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
                  statusCreateStructure === null && (
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      aria="Start CopyGames"
                      onClick={() => onClickStart()}
                    >
                      Create EmuDeck folders on USB Drive
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
                    Copy your ROMs & BIOS to your Steam Deck
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
              <div data-col-sm="6">
                <img src={imgUSBDeck} alt="Insert USB" />
              </div>
            </>
          )}
          {statusCopyGames === true && (
            <>
              <div
                data-col-sm={
                  installFrontends.esde.status && installFrontends.steam.status
                    ? '6'
                    : '12'
                }
              >
                <span className="h4">
                  Adding{' '}
                  {installFrontends.steam.status
                    ? 'your games'
                    : 'EmulationStation DE'}{' '}
                  using Steam ROM Manager
                </span>
                <img src={imgSTEAM} alt="Steam" />
                <p>
                  EmuDeck can add your games to Steam as non-Steam game
                  shortcuts.
                  <br />
                  <br />
                  When you open Steam ROM Manager, enable your desired parsers,
                  click on <strong>Preview, Parse</strong>
                  and wait until it finishes, then{' '}
                  <strong>Save apps to Steam</strong>. When it finishes, you can
                  switch back to Game Mode and play your newly transferred
                  games.
                </p>
              </div>
              {installFrontends.esde.status && (
                <div
                  data-col-sm={
                    installFrontends.esde.status &&
                    installFrontends.steam.status
                      ? '6'
                      : '12'
                  }
                >
                  <span className="h4">Play Using EmulationStation DE</span>
                  <img src={rbsimple2} alt="ESDE" />
                  <p>
                    EmulationStation-DE is recommended if you have a lot of
                    games.
                    <br />
                    <br />
                    You will need to launch Steam ROM Manager to add
                    EmulationStation DE to your library even if you won't use it
                    to launch your games since you need Steam Input to be
                    enabled.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </Main>
    </>
  );
}

CopyGames.propTypes = {
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

CopyGames.defaultProps = {
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

export default CopyGames;
