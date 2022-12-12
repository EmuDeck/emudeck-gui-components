import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';
import SimpleCarousel from 'components/molecules/SimpleCarousel/SimpleCarousel.js';

import { ProgressBar, BtnSimple } from 'getbasecore/Atoms';
import imgra from 'assets/emulators/ra.png';
import imgdolphin from 'assets/emulators/dolphin.png';
import imgprimehacks from 'assets/emulators/primehacks.png';
import imgppsspp from 'assets/emulators/ppsspp.png';
import imgduckstation from 'assets/emulators/duckstation.png';
import imgcitra from 'assets/emulators/citra.png';
import imgpcsx2 from 'assets/emulators/pcsx2.png';
import imgrpcs3 from 'assets/emulators/rpcs3.png';
import imgyuzu from 'assets/emulators/yuzu.png';
import imgryujinx from 'assets/emulators/ryujinx.png';
import imgcemu from 'assets/emulators/cemu.png';
import imgxemu from 'assets/emulators/xemu.png';
import imgmame from 'assets/emulators/mame.png';
import imgvita3k from 'assets/emulators/vita3k.png';
import imgscummvm from 'assets/emulators/scummvm.png';
import imgsrm from 'assets/emulators/srm.png';
import imgesde from 'assets/emulators/esde.png';

import sdlogo from 'assets/sdlogo.png';
import remotelogo from 'assets/remotelogo.png';
import amberlogo from 'assets/amberelec.jpg';
const ipcChannel = window.electron.ipcRenderer;
const End = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  onClose,
  next,
  back,
  data,
  isGameMode,
  message,
  percentage,
  onClickLog,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage } = state;

  const slides = [
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="6">
          <span className="h2">Adding games</span>
          <p className="lead">
            Copy your roms to your {storage}, you'll see a folder for each
            system on the Emulation/roms folder.
            <br />
            Once you've copied your games click on the "Launch Steam Rom
            Manager" button
            <br />
            <br />
            <strong>but first, swipe right to see more tips!</strong>
          </p>
        </div>
        <div data-col-sm="6">
          <img src="https://www.emudeck.com/img/ss1.png" alt="bg" />
        </div>
      </div>
    </Card>,
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="6">
          <span className="h2">Tools and Stuff</span>
          <p className="lead">
            After adding your games open EmuDeck again, a new menu called "tools
            and stuff" is now available!
            <br />
            Over there you'll be able to install tools to improve performance,
            use your Deck Gyroscope, have quick access to change your settings,
            check if your bios are properly configured, update your emulators,
            etc.
          </p>
        </div>
      </div>
    </Card>,
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="9">
          <span className="h3">Emulation Folder</span>
          <p className="lead">
            We've created the following folders in your {storage}: <br />
            <br />
            <ul>
              <li>
                <strong>Emulation/roms</strong> - For your games
              </li>
              <li>
                <strong>Emulation/bios</strong> - For your Bios and Yuzu
                firmware
              </li>
              <li>
                <strong>Emulation/saves</strong> - Your saved games
              </li>
              <li>
                <strong>Emulation/storage</strong> - Shaders, PS3 installed
                games, etc.{' '}
                {storage == 'SD-Card' &&
                  'to save space in your internal storage'}{' '}
              </li>
            </ul>
          </p>
        </div>
        <div data-col-sm="3">
          <img src={sdlogo} alt="bg" />
        </div>
      </div>
    </Card>,
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="12">
          <span className="h2">Bios Paths</span>
          <p className="lead">
            Some games need the original system Bios to launch. <br />
            For instance you need bios files for the following systems:
            <br />
            - Playstation 1, 2 and 3.
            <br />
            - SegaCD / MegaCD, Dreamcast and Saturn.
            <br />
            - Nintendo Switch and Nintendo DS
            <br />
            - MSX
            <br />
            <strong>
              Place then in the Emulation/bios folder in your {storage}, don't
              use subdirectories.
              <br />
              Switch has special subfolders inside of Emulation/bios/yuzu, copy
              your firmware and keys inside those folders, don't overwrite them
            </strong>
          </p>
        </div>
      </div>
    </Card>,
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="7">
          <span className="h2">AmberElec Hotkeys</span>
          <p className="lead">
            Almost all of the emulators use the AmberElec convention: <br />
            <br />
            <ul>
              <li>
                <strong>Select + Start</strong> - Exit Emulator
              </li>
              <li>
                <strong>Select + L1</strong> - Load state
              </li>
              <li>
                <strong>Select + R1</strong> - Save state
              </li>
              <li>
                <strong>Select + R2</strong> - Fast-forward
              </li>
              <li>
                <strong>L3 + R3</strong> - Menu (Only RetroArch)
              </li>
            </ul>
          </p>
        </div>
        <div data-col-sm="5">
          <img src={amberlogo} alt="bg" />
        </div>
      </div>
    </Card>,
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="6">
          <span className="h2">Steam Input Profiles </span>
          <p className="lead">
            You can use Steam Deck's L4, L5, R4, R5 triggers to control some
            emulators hotkeys. Just select the right EmuDeck template for the
            system you want. <br />
            <strong>
              Do this for every 3DS, WiiU or Playstation 1 & 2 game.
            </strong>
          </p>
        </div>
        <div data-col-sm="6">
          <img src="https://www.emudeck.com/img/citra1.png" alt="bg" />
        </div>
      </div>
    </Card>,
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="6">
          <span className="h2">Two Frontends </span>
          <p className="lead">
            You can either use Steam Rom Manager to add yor games or use
            EmulationStation DE <br />
            If you have a small library we recomend using Steam Rom Manager, if
            you have thousands of games EmulationStation DE will work better.
            <br />
            If you only want to use EmulationStation DE, disable all the other
            parsers when you launch Steam Rom Manager
          </p>
        </div>
        <div data-col-sm="6">
          <img src="https://www.emudeck.com/img/ss1.png" alt="bg" />
        </div>
      </div>
    </Card>,
  ];

  //console.log({ width });
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          {disabledNext == true && (
            <>
              <Header title="We are completing your" bold="installation..." />
              <p className="lead">{message}...</p>
            </>
          )}
          {disabledNext == false && (
            <Header title="Installation" bold="complete!" />
          )}

          <Main>
            {disabledNext == false && (
              <div class="tips">
                <SimpleCarousel nav={false} img={slides} />
              </div>
            )}
            <br />
            {disabledNext == true && (
              <>
                <ProgressBar
                  css="progress--success"
                  value={percentage}
                  max={100}
                />
                <span class="h5">
                  EmuDeck wouldn't be possible without all these open-source
                  projects. We want to give them all a big shout out for their
                  hard work!
                </span>
                <div class="cards cards--mini cards--center">
                  <Card css="is-selected">
                    <img src={imgra} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgdolphin} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgprimehacks} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgppsspp} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgduckstation} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgcitra} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgpcsx2} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgrpcs3} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgyuzu} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgryujinx} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgcemu} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgxemu} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgmame} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgvita3k} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgscummvm} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgsrm} alt="alt" />
                  </Card>
                  <Card css="is-selected">
                    <img src={imgesde} alt="alt" />
                  </Card>
                </div>
              </>
            )}
          </Main>
          <footer className="footer">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Go Back"
              disabled={false}
              onClick={onClickLog}
            >
              Watch Log
            </BtnSimple>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Go Back"
              disabled={disabledNext && 'true'}
              onClick={onClose}
            >
              Exit
              <svg
                className="rightarrow"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M16.4091 8.48003L21.5024 13.5734L1.98242 13.5734L1.98242 18.0178H21.5024L16.4091 23.1111L19.5558 26.2578L30.018 15.7956L19.5558 5.33337L16.4091 8.48003Z"
                ></path>
              </svg>
            </BtnSimple>

            {isGameMode == false && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Go Next"
                disabled={disabledNext && 'true'}
                onClick={onClick}
              >
                Launch Steam Rom Manager
                <svg
                  className="rightarrow"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M16.4091 8.48003L21.5024 13.5734L1.98242 13.5734L1.98242 18.0178H21.5024L16.4091 23.1111L19.5558 26.2578L30.018 15.7956L19.5558 5.33337L16.4091 8.48003Z"
                  ></path>
                </svg>
              </BtnSimple>
            )}
          </footer>
        </div>
      </div>
    </>
  );
};

export default End;
