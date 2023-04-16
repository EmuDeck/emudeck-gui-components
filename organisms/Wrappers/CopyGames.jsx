import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import imgESDE from 'assets/ESDE.jpg';
import imgSTEAM from 'assets/STEAMGAMES.png';
import imgExternal from 'assets/external.png';
import imgUSBDeck from 'assets/usb-in-deck.png';
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
          Insert a USB Drive in your Steam Deck's USB C port. EmuDeck will create a ROMs
          and BIOS folder, allowing you to copy your ROMs and BIOS to your USB Drive on another device. When you are ready, 
          return to this page, and EmuDeck will transfer your newly copied files to your Steam Deck.
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
                    css={storageUSB == 'Custom' && 'is-selected'}
                    onClick={() => onClick('Custom')}
                  >
                    <img src={imgExternal} width="100" alt="Background" />
                    <span className="h6">USB Drive</span>
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
              <div data-col-sm="6">
                <span className="h4">Play Using Steam ROM Manager</span>
                <img src={imgSTEAM} alt="ESDE" />
                <p>
                  EmuDeck can add your games to Steam as non-Steam game shortcuts.
                  <br />
                  <br />
                  When opening Steam ROM Manager just click on{' '}
                  <strong>"Preview" &gt; "Generate App List"</strong> and wait
                  until it finishes, then "Save apps to Steam". When it finishes, 
                  you can switch back to Game Mode and play your newly copied games.
                </p>
              </div>
              <div data-col-sm="6">
                <span className="h4">Play Using EmulationStation DE</span>
                <img src={imgESDE} alt="ESDE" />
                <p>
                  EmulationStation-DE is recommended if you have a lot of games.
                  <br />
                  <br />
                  You need to use Steam ROM Manager to add EmulationStation DE
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
