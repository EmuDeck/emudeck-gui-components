import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import ToolsAndStuffImg from 'assets/powertools.png';

const ToolsAndStuff = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  nextText,
  isGameMode,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { achievements, storagePath } = state;
  const navigate = useNavigate();
  const goTo = (href) => {
    navigate('/' + href);
  };
  const ipcChannel = window.electron.ipcRenderer;
  const openSRM = () => {
    ipcChannel.sendMessage('bash', [
      `zenity --question --width 450 --title "Close Steam/Steam Input?" --text "$(printf "<b>Exit Steam to launch Steam Rom Manager? </b>\n\n To add your Emulators and EmulationStation-DE to steam hit Preview, then Generate App List, then wait for the images to download\n\nWhen you are happy with your image choices hit Save App List and wait for it to say it's completed.\n\nDesktop controls will temporarily revert to touch/trackpad/L2/R2")" && (kill -15 $(pidof steam) & ${storagePath}/Emulation/tools/srm/Steam-ROM-Manager.AppImage)`,
    ]);
  };

  const sprunge = () => {
    const idMessage = Math.random();
    ipcChannel.sendMessage('bash', [
      `sprunge|||cat ~/emudeck/emudeck.log | curl -F 'sprunge=<-' http://sprunge.us`,
    ]);
    ipcChannel.once('sprunge', (message) => {
      let messageText = message.stdout;
      alert(`Copy this url: ${message}`);
    });
  };

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Tools &" bold="Stuff" />
        <Main>
          <p className="lead">
            Welcome to the Tools & Stuff page! Here, you will find EmuDeck's
            suite of tools and scripts that will bring your EmuDeck install to
            the next level.
          </p>
          <div className="btn-row">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('power-tools')}
            >
              Power Tools
            </BtnSimple>

            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('gyrodsu')}
            >
              GyroDSU
            </BtnSimple>

            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('decky-controls')}
            >
              Decky Controls
            </BtnSimple>

            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('chd-tool')}
            >
              EmuDeck Compressor
            </BtnSimple>

            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('update-emulators')}
            >
              Update Emulators & Tools
            </BtnSimple>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('settings')}
            >
              Quick Settings
            </BtnSimple>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('check-bios')}
            >
              BIOS Checker
            </BtnSimple>
            {/*
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('remote-play-whatever')}
            >
              RemotePlayWhatever
            </BtnSimple>
            */}
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('cloud-sync')}
            >
              Save Backup
            </BtnSimple>
            {isGameMode == false && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                onClick={() => openSRM()}
              >
                Steam ROM Manager
              </BtnSimple>
            )}
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('RA-achievements-config')}
            >
              RetroAchievements
            </BtnSimple>
          </div>
          <hr />
          <span class="h5">Guides</span>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => goTo('emulator-guide')}
          >
            Emulator Guides
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => goTo('video-guide')}
          >
            Emulation Showcase
          </BtnSimple>

          <hr />
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => sprunge()}
          >
            Download Log
          </BtnSimple>
          <BtnSimple
            css="btn-simple--3"
            type="button"
            onClick={() => goTo('uninstall')}
          >
            Uninstall EmuDeck
          </BtnSimple>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default ToolsAndStuff;
