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
      `zenity --question --width 450 --title \"Close Steam/Steam Input?\" --text \"Exit Steam to launch Steam Rom Manager? Desktop controls will temporarily revert to touch/trackpad/L2/R2\" && (kill -15 \$(pidof steam) & ${storagePath}/Emulation/tools/srm/Steam-ROM-Manager.AppImage)`,
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
            In this section you'll find tools and scripts that will allow you to
            get the most of your Device.
          </p>
          <div className="btn-row">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('power-tools')}
            >
              PowerTools
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
              Check Bios
            </BtnSimple>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('remote-play-whatever')}
            >
              RemotePlayWhatever
            </BtnSimple>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => goTo('cloud-sync')}
            >
              SaveSync
            </BtnSimple>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              onClick={() => openSRM()}
            >
              SteamRomManager
            </BtnSimple>
          </div>
          <hr />
          <span class="h5">Guides</span>
          {/*
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => goTo('video-guide')}
          >
            Video Guide
          </BtnSimple>*/}
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => goTo('emulator-guide?emulator=pepe')}
          >
            Emulators Guides
          </BtnSimple>
          <hr />
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => sprunge()}
          >
            Get log
          </BtnSimple>
          <BtnSimple
            css="btn-simple--2"
            type="button"
            onClick={() => goTo('reset')}
          >
            Reset EmuDeck
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
