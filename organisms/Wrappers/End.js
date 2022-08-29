import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';
import SimpleCarousel from 'components/molecules/SimpleCarousel/SimpleCarousel.js';

import { ProgressBar, BtnSimple } from 'getbasecore/Atoms';

import sdlogo from 'assets/sdlogo.png';
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
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage } = state;

  const readMSG = (command) => {
    const idMessage = Math.random();
    ipcChannel.sendMessage('emudeck', [`${idMessage}|||${command}`]);
    ipcChannel.once(idMessage, (message) => {
      let messageArray = message.stdout.split('#');
      let messageText = messageArray[1];
      let messagePercent = messageArray[0];

      messagePercent = messagePercent.replaceAll(' ', '');
      messagePercent = messagePercent.replaceAll('\n', '');

      setMsg({ message: messageText, percentage: messagePercent });
    });
  };

  const [msg, setMsg] = useState({
    message: '',
    percentage: 0,
  });

  const { message, percentage } = msg;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let msg = readMSG('cat ~/emudeck/msg.log');

      if (message.includes('100')) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    <Card css="is-selected">
      <div className="container--grid">
        <div data-col-sm="6">
          <span className="h2">Adding games</span>
          <p className="lead">
            When the installation is completed SteamRomManager will open to scan
            and add your games.
            <br />
            Copy your roms to your {storage}, in the Emulation/roms folder,
            don't put your games on its own subdirectories.
            <br />
            <strong>
              Tip:You can copy your roms using an external USB drive.
            </strong>
          </p>
        </div>
        <div data-col-sm="6">
          <img src="https://www.emudeck.com/img/ss1.png" alt="bg" />
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
            SoAn exaple of these systems are:
            <br />
            - Playstation 1, 2 and 3.
            <br />
            - SegaCD / MegaCD and Saturn.
            <br />
            - Switch.
            <br />
            <strong>
              Place then im Emulation/bios folder in your {storage}, don't use
              subdirectories.
              <br />
              Switch has an special folder in Emulation/bios/yuzu
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
              <ProgressBar
                css="progress--success"
                value={percentage}
                max={100}
              />
            )}
          </Main>
          <footer className="footer">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Go Back"
              disabled={disabledNext && 'true'}
              onClick={onClose}
            >
              Exit to Desktop
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default End;
