import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import Notification from 'components/molecules/Notification/Notification';
import remotelogo from 'assets/remoteplay.png';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

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
  notificationText,
  showNotification,
}) => {
  const { t, i18n } = useTranslation();
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
      let msg = readMSG('cat ~/.config/EmuDeck/RemotePlayWhatever.log');

      if (message.includes('All files converted to CHD')) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Main>
        <p className="lead">
          {t('RemotePlayWhateverPage.intro')}{' '}
          <LinkSimple
            css="link-simple--1"
            href="https://github.com/m4dEngi/RemotePlayWhatever"
            target="_blank"
          >
            {t('RemotePlayWhateverPage.here')}
          </LinkSimple>
        </p>
        <div className="container--grid">
          <div data-col-sm="6">
            <p>{t('RemotePlayWhateverPage.step1')}</p>
            <p>{t('RemotePlayWhateverPage.step2')}</p>
            <p>
              <strong>{t('RemotePlayWhateverPage.beta')}</strong>
            </p>

            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria={t('RemotePlayWhateverPage.install')}
              onClick={() => onClick()}
              disabled={disabledNext && 'true'}
            >
              {t('RemotePlayWhateverPage.install')}
            </BtnSimple>
          </div>
          <div data-col-sm="6">
            <img src={remotelogo} alt="bg" />
          </div>
        </div>
      </Main>
    </>
  );
};

export default RemotePlayWhatever;
