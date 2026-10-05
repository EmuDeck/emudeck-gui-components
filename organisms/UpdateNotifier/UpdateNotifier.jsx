import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from 'context/globalContext';
import EmuModal from 'components/molecules/EmuModal/EmuModal';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import Kamek from 'components/organisms/Kamek/Kamek';
import { BtnSimple } from 'getbasecore/Atoms';
import './updateNotifier.scss';

// Prevent update in this routes so nothing gets corrupted!
const avoidRoutes = ['/check-updates', '/end'];

// Checks for a new EmuDeck version in the background and offers it on whatever page the user is
function UpdateNotifier() {
  const { t } = useTranslation();
  const ipcChannel = window.electron.ipcRenderer;
  const { state } = useContext(GlobalContext);
  const { system, branch } = state;
  const location = useLocation();
  const [update, setUpdate] = useState(null);
  const avoid = avoidRoutes.includes(location.pathname);

  useEffect(() => {
    if (!navigator.onLine) {
      return;
    }
    ipcChannel.sendMessage('update-check');
    ipcChannel.once('update-check-out', (message) => {
      if (message[0] === 'update-available') {
        setUpdate('available');
      }
    });
  }, []);

  const doUpdate = () => {
    ipcChannel.sendMessage('update-start');
    ipcChannel.once('update-check-out', (message) => {
      if (message[0] === 'updating') {
        // Show the changelog on the first launch after the update installs
        localStorage.setItem('show_changelog', true);
        setUpdate('updating');
      } else {
        setUpdate('dismissed');
      }
    });
  };

  const modal = useMemo(() => {
    if (update === 'updating') {
      return {
        active: true,
        header: (
          <span className="h4">
            🎉 {t('CheckUpdatePage.updating.title')} 🎉
          </span>
        ),
        body: <p className="h5">{t('CheckUpdatePage.updating.description')}</p>,
        footer: <ProgressBar css="progress--success" infinite max="100" />,
        css: 'emumodal--xs emumodal--loading',
      };
    }
    //No modal if we are in onw of the forbidden routes or there's not an update
    if (update !== 'available' || avoid) {
      return false;
    }
    return {
      active: true,
      header: (
        <span className="h4">🎉 {t('CheckUpdatePage.found.title')} 🎉</span>
      ),
      body: (
        <p
          className="lead"
          dangerouslySetInnerHTML={{
            __html: t('CheckUpdatePage.found.description'),
          }}
        />
      ),
      footer: (
        <div>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria={t('general.yes')}
            style={{ marginBottom: 0 }}
            onClick={() => doUpdate()}
          >
            {t('general.yes')}
          </BtnSimple>
          <BtnSimple
            css="btn-simple--2"
            type="link"
            aria={t('CheckUpdatePage.found.changelog')}
            target="_blank"
            href={`https://cloud.emudeck.com/changelog/changelog.php?c=${branch}&s=${system}`}
          >
            {t('CheckUpdatePage.found.changelog')}
          </BtnSimple>
          <BtnSimple
            css="btn-simple--3"
            type="button"
            aria={t('general.no')}
            style={{ marginBottom: 0 }}
            onClick={() => setUpdate('dismissed')}
          >
            {t('general.no')}
          </BtnSimple>
        </div>
      ),
      css: 'emumodal--sm',
    };
  }, [update, avoid, system, branch]);

  return (
    <>
      {update === 'updating' && (
        <div className="update-notifier">
          <Kamek />
        </div>
      )}
      <EmuModal modal={modal} />
    </>
  );
}

export default UpdateNotifier;
