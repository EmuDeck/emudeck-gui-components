import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import remotelogo from 'assets/remoteplay.png';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import RemotePlayWhateverImg from 'assets/powertools.png';
const ipcChannel = window.electron.ipcRenderer;
const RemotePlayWhatever = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  hasSudo,
  nextText,
  onClickSRM,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, RemotePlayWhatever } = state;

  const readMSG = (command) => {
    const idMessage = Math.random();
    ipcChannel.sendMessage('emudeck', [`${idMessage}|||${command}`]);
    ipcChannel.once(idMessage, (message) => {
      let messageText = message.stdout;

      setMsg({ message: messageText });
    });
  };

  const [msg, setMsg] = useState({
    message: '',
  });

  const { message } = msg;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let msg = readMSG('cat ~/emudeck/RemotePlayWhatever.log');

      if (message.includes('All files converted to CHD')) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Multiplayer with " bold="RemotePlayWhatever - Beta" />
        <Main>
          <p className="lead">
            Play with your friends both locally and over the internet. More info
            on this tool{' '}
            <LinkSimple
              css="link-simple--1"
              href="https://github.com/m4dEngi/RemotePlayWhatever"
              target="_blank"
            >
              here
            </LinkSimple>
          </p>
          <div className="container--grid">
            <div data-col-sm="6">
              <p>
                First click on install RemotePlayWhatever, then open Steam Rom
                Manager to add its shorcut to Steam
              </p>
              <p>
                When you are in gaming mode go to the Emulator collection and
                launch RemotePlayWhatever, invite your Steam Friend, go back to
                your library using the STEAM button, open your game and start
                playing!
              </p>
              <p>
                {' '}
                This app is on beta, so sometimes it does not work 100% fine,
                expect some crashes. At the moment launching games outside
                EmulationStation is not supported by launching your games using
                EmulationStation
              </p>

              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Install RemotePlayWhatever"
                onClick={() => onClick()}
                disabled={disabledNext && 'true'}
              >
                Install RemotePlayWhatever
              </BtnSimple>
              <br />
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Open Steam Rom Manager"
                onClick={() => onClickSRM()}
                disabled={disabledNext && 'true'}
              >
                Open Steam Rom Manager to add it
              </BtnSimple>
            </div>
            <div data-col-sm="6">
              <img src={remotelogo} alt="bg" />
            </div>
          </div>
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

export default RemotePlayWhatever;
