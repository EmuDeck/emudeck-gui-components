import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import imgESDE from 'assets/ESDE.jpg';
import imgSTEAM from 'assets/STEAMGAMES.png';
import imgInternal from 'assets/internal.png';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

const ipcChannel = window.electron.ipcRenderer;
function CopyGames({
  disabledNext,
  disabledBack,
  onChange,
  onClick,
  onClickStart,
  onClickCopyGames,
  next,
  back,
  minute,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  storageUSB,
  storageUSBPath,
  statusCopyGames,
  statusCreateStructure,
}) {
  const { state, setState } = useContext(GlobalContext);
  const { SDID, mode, system } = state;

  console.log({ statusCopyGames, storageUSBPath, statusCreateStructure });

  return (
    <>
      {statusCopyGames !== true && (
        <p className="lead">
          Insert a USB Drive in your Deck's USB C port. We will create a roms
          and bios folder so you can copy your roms and bios on your PC and then
          transfer them to your Steam Deck
        </p>
      )}
      <Main>
        <div className="container--grid">
          {statusCopyGames !== true && (
            <div data-col-sm="6">
              <span className="h4">Pick your USB Drive</span>
              <div className="cards cards--half">
                <Card
                  css={storageUSB == 'Custom' && 'is-selected'}
                  onClick={() => onClick('Custom')}
                >
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">Custom Directory</span>
                  {storageUSBPath && storageUSB == 'Custom' && (
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
                    Create ROM structure on USB
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
                    Creating Rom Structure...
                  </BtnSimple>
                )}

              {statusCreateStructure === true && (
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria="Waiting CopyGames"
                  onClick={() => onClickCopyGames()}
                >
                  Copy your roms & bios to your Steam Deck
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
          )}
          {statusCopyGames === true && (
            <>
              <div data-col-sm="6">
                <span className="h4">Play Using Steam Rom Manager</span>
                <img src={imgSTEAM} alt="ESDE" />
                <p>
                  We can add your games to Steam to look like Steam Games.
                  <br />
                  <br />
                  When opening Steam Rom Manager just click on{' '}
                  <strong>"Preview" &gt; "Generate App List"</strong> and wait
                  until it finishes, then "Save App List" and went back to Game
                  Mode when it finishes creating VDF entries
                </p>
              </div>
              <div data-col-sm="6">
                <span className="h4">Play Using EmulationStation DE</span>
                <img src={imgESDE} alt="ESDE" />
                <p>
                  This is recommended if you have a lot of games.
                  <br />
                  <br />
                  You need to use Steam Rom Manager to add EmulationStation DE
                  to your library. Follow the same steps as instructed before
                  but disable all parsers but the one named{' '}
                  <strong>"EmulationStation DE"</strong>
                </p>
              </div>
            </>
          )}
        </div>
      </Main>
    </>
  );
}

export default CopyGames;
