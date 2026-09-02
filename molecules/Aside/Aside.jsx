import { useTranslation } from 'react-i18next';
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Sprite from 'components/atoms/Sprite/Sprite';
import Icon from 'components/atoms/Sprite/Icon';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import EmuModal from 'components/molecules/EmuModal/EmuModal';

import './aside.scss';
import {
  iconChecker,
  iconCloud,
  iconCompress,
  iconGear,
  iconList,
  iconMigrate,
  iconPlugin,
  iconPrize,
  iconUninstall,
  iconQuick,
  iconCustom,
  iconDoc,
  iconJoystick,
  iconPackage,
  iconDisk,
  iconHelp,
  iconScreen,
  iconAndroid,
} from 'components/utils/images/icons';

function Aside({ css }) {
  const { t, i18n } = useTranslation();
  const ipcChannel = window.electron.ipcRenderer;
  const { state, setState, stateCurrentConfigs } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({ modal: false, updates: false });
  const { system, systemName, mode, branch, installEmus, installFrontends } =
    state;
  const { modal, updates } = statePage;
  const navigate = useNavigate();

  const openCSM = () => {
    ipcChannel.sendMessage('bash', [
      'csm|||bash ~/.config/EmuDeck/backend/functions/cloudServicesManager.sh',
    ]);
    ipcChannel.once('csm', (message) => {
      console.log({ message });
    });
  };

  const getLogs = () => {
    ipcChannel.sendMessage('emudeck', [`zipLogs|||zipLogs`]);
    ipcChannel.once('zipLogs', (message) => {
      console.log({ message });
      let modalData;
      let { stdout } = message;

      stdout = stdout.replace('\n', '');

      if (stdout.includes('true')) {
        modalData = {
          active: true,
          header: <span className="h4">{t('general.success')}!</span>,
          body: <p>{t('aside.logsSuccess')}</p>,
          css: 'emumodal--xs',
        };
      } else {
        modalData = {
          active: true,
          header: <span className="h4">{t('general.error')}!</span>,
          body: <p>{t('aside.logsError')}</p>,
          css: 'emumodal--xs',
        };
      }
      setStatePage({ ...statePage, modal: modalData });
    });
  };

  const openWiki = () => {
    window.open('https://manual.emudeck.com', '_blank');
  };

  const uninstall = () => {
    if (system === 'win32') {
      ipcChannel.sendMessage(
        'emudeck',
        'powershell -ExecutionPolicy Bypass -NoProfile -File "$env:APPDATA/EmuDeck/backend/uninstall.ps1"'
      );
    } else {
      ipcChannel.sendMessage(
        'bash',
        'bash ~/.config/EmuDeck/backend/uninstall.sh'
      );
    }
  };
  const makePortable = () => {
    ipcChannel.sendMessage('emudeck', [`makePortable|||makePortable`]);
    ipcChannel.once('makePortable', (message) => {
      console.log({ message });
      let modalData;
      if (message.error) {
        modalData = {
          active: true,
          header: <span className="h4">{t('general.error')}</span>,
          body: (
            <>
              <p>{t('aside.portableSD.errorBody')}</p>
              <p>{message.error.message}</p>
            </>
          ),
          css: 'emumodal--sm',
        };
      } else {
        modalData = {
          active: true,
          header: <span className="h4">{t('general.success')}</span>,
          body: (
            <>
              <p>{t('aside.portableSD.successP1')}</p>
              <p>{t('aside.portableSD.successP2')}</p>
              <p>
                <strong>{t('aside.portableSD.successP3')}</strong>
              </p>
              <p>{t('aside.portableSD.successP4')}</p>
            </>
          ),
          css: 'emumodal--sm',
        };
      }

      setStatePage({ ...statePage, modal: modalData });
    });
  };
  const closeModal = () => {
    setStatePage({
      ...statePage,
      modal: {
        active: false,
      },
    });
  };
  const showPortableModal = () => {
    let modalData = {
      active: true,
      header: <span className="h4">{t('aside.portableSD.modalTitle')}</span>,
      body: (
        <>
          <p>{t('aside.portableSD.modalP1')}</p>
          <p>{t('aside.portableSD.modalP2')}</p>
          <p>{t('aside.portableSD.modalP3')}</p>
          <button
            type="button"
            aria-label={t('general.next')}
            className="btn-simple btn-simple--1"
            onClick={makePortable}
            style={{ marginBottom: 0 }}
          >
            {t('general.start')}
          </button>
          <button
            type="button"
            aria-label={t('general.next')}
            className="btn-simple btn-simple--2"
            style="margin-bottom:0"
            onClick={closeModal}
            style={{ marginBottom: 0 }}
          >
            {t('general.cancel')}
          </button>
        </>
      ),
      footer: <></>,
      css: 'emumodal--sm',
    };
    setStatePage({ ...statePage, modal: modalData });
  };

  const openSRM = () => {
    let modalData = {
      active: true,
      header: (
        <span className="h4">{t('general.launching')} Steam Rom Manager</span>
      ),
      body: <p>{t('aside.srm.body')}</p>,
      footer: <ProgressBar css="progress--success" infinite max="100" />,
      css: 'emumodal--xs',
    };

    if (system === 'win32') {
      setStatePage({ ...statePage, modal: modalData });
      ipcChannel.sendMessage(
        'emudeck',
        'powershell -ExecutionPolicy Bypass -NoProfile -File "$toolsPath/launchers/srm/steamrommanager.ps1"'
      );
    } else if (system !== 'darwin') {
      setStatePage({ ...statePage, modal: modalData });
      ipcChannel.sendMessage(
        'emudeck',
        '"$toolsPath/launchers/srm/steamrommanager.sh"'
      );
    } else {
      modalData = {
        active: true,
        header: (
          <span className="h4">{t('general.launching')} Steam Rom Manager</span>
        ),
        body: (
          <>
            <p>{t('aside.srm.body')}</p>
            <strong>{t('aside.srm.desktopControls')}</strong>
          </>
        ),
        footer: <ProgressBar css="progress--success" infinite max="100" />,
        css: 'emumodal--sm',
      };
      setStatePage({ ...statePage, modal: modalData });
      ipcChannel.sendMessage(
        'emudeck',
        '"$toolsPath/launchers/srm/steamrommanager.sh"'
      );
    }

    let timer;

    if (system === 'win32') {
      timer = 30000;
    } else {
      timer = 10;
    }

    const timerId = setTimeout(() => {
      setStatePage({
        ...statePage,
        modal: {
          active: false,
        },
      });
      clearTimeout(timerId);
    }, timer);
  };

  const selectMode = (value) => {
    setState({ ...state, mode: value });

    const modalData = {
      active: true,
      header: <span className="h4">{t('general.warning')}</span>,
      body: <p>{t('aside.reset.warningBody')}</p>,
      css: 'emumodal--xs',
    };

    setStatePage({ ...statePage, modal: modalData });

    navigate('/rom-storage');
  };

  const showLog = () => {
    if (system === 'win32') {
      ipcChannel.sendMessage('bash-nolog', [
        `start powershell -NoExit -ExecutionPolicy Bypass -command "& { Get-Content $env:APPDATA/emudeck/logs/git.log -Tail 100 -Wait }"`,
      ]);
    } else if (system === 'darwin') {
      ipcChannel.sendMessage('bash-nolog', [
        `osascript -e 'tell app "Terminal" to do script "clear && tail -f $HOME/.config/EmuDeck/logs/git.log"'`,
      ]);
    } else {
      ipcChannel.sendMessage('bash-nolog', [
        `konsole -e tail -f "$HOME/.config/EmuDeck/logs/git.log"`,
      ]);
    }
  };

  const resetToken = () => {
    setState({ ...state, patreonToken: undefined });
    localStorage.setItem('patreon_token', undefined);
    window.location.reload();
  };

  useEffect(() => {
    ipcChannel.sendMessage('check-versions');
    ipcChannel.once('check-versions', (repoVersions) => {
      // Thanks chatGPT lol
      const obj1 = repoVersions;
      const obj2 = stateCurrentConfigs;

      const differences = {};

      for (const key in obj1) {
        if (installEmus[obj1[key].id]) {
          if (
            JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key]) &&
            installEmus[obj1[key].id].status &&
            installEmus[obj1[key].code] !== 'BigPemu'
          ) {
            differences[key] = obj1[key];
          }
        }
      }

      if (Object.keys(differences).length > 0) {
        setStatePage({
          ...statePage,
          updates: true,
        });
      } else {
        setStatePage({
          ...statePage,
          updates: false,
        });
      }
    });
  }, [stateCurrentConfigs, '']);

  const functions = {
    openSRM,
    openCSM,
    getLogs,
    navigate,
    openWiki,
    uninstall,
    resetToken,
    showPortableModal,
  };

  const settingsCards = [
    {
      icon: [iconHelp],
      iconFlat: 'list',
      title: t('aside.cards.manual.title'),
      description: t('aside.android'),
      button: t('aside.buttons.configure'),
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => openWiki(),
    },
    {
      icon: [iconGear],
      iconFlat: 'gear',
      title: t('aside.quickSettings'),
      description: t('aside.cards.quickSettings.description'),
      button: t('aside.buttons.configure'),
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => functions.navigate('/settings'),
    },
    {
      icon: [iconGear],
      iconFlat: 'books',
      title: t('aside.manageEmulators'),
      description: t('aside.cards.manageEmulators.description'),
      button: t('aside.buttons.update'),
      btnCSS: 'btn-simple--1',
      status: true,
      updates,
      function: () => functions.navigate('/emulators'),
    },
    {
      icon: [iconPackage],
      iconFlat: 'package',
      title: t('StoreFrontPage.title'),
      description: t('aside.cards.store.description'),
      button: t('aside.buttons.getFreeGames'),
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => functions.navigate('/store-front'),
    },
    {
      icon: [iconJoystick],
      iconFlat: 'joystick',
      title: 'Steam ROM Manager',
      description: t('aside.cards.srm.description'),
      button: t('aside.buttons.launch'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.openSRM(),
    },
    {
      icon: [iconDisk],
      iconFlat: 'disk',
      title: t('aside.importGames'),
      description: t('aside.cards.importGames.description'),
      button: t('aside.buttons.addMoreGames'),
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => functions.navigate('/copy-games'),
    },
    {
      icon: [iconQuick],
      iconFlat: 'quick',
      title: t('aside.quickReset'),
      description: t('aside.cards.quickReset.description'),
      button: t('aside.buttons.reinstall'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => selectMode('easy'),
    },
    {
      icon: [iconCustom],
      iconFlat: 'custom',
      title: t('aside.customReset'),
      description: t('aside.cards.customReset.description'),
      button: t('aside.buttons.reinstall'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => selectMode('expert'),
    },
    {
      status: system !== 'darwin' ? 'separator' : false,
      title: t('aside.otherSettings'),
    },
    {
      icon: [iconScreen],
      iconFlat: 'migrate',
      title: t('aside.portable'),
      description: t('aside.cards.portable.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: state.storage === 'SD-Cardd',
      function: () => functions.showPortableModal(),
    },
    {
      icon: [iconScreen],
      iconFlat: 'screen',
      title: t('aside.screenResolution'),
      description: t('aside.cards.screenResolution.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system !== 'darwin',
      function: () => functions.navigate('/change-resolution'),
    },
    {
      icon: [iconPrize],
      iconFlat: 'prize',
      title: t('aside.retroAchievements'),
      description: t('aside.cards.retroAchievements.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system !== 'darwin',
      function: () => functions.navigate('/RA-achievements-config'),
    },

    {
      status: 'separator',
      title: t('aside.exclusiveTools'),
    },
    {
      icon: [iconScreen],
      iconFlat: 'disk',
      title: t('aside.importExport'),
      description: t('aside.cards.importExport.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/import-export'),
    },
    {
      icon: [iconScreen],
      iconFlat: 'gamepad',
      title: t('aside.autoMap'),
      description: t('aside.cards.autoMap.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system !== 'win32',
      function: () => functions.navigate('/automap-configuration'),
    },
    {
      icon: [iconCompress],
      iconFlat: 'compress',
      title: t('aside.cards.compressor.title'),
      description: t('aside.cards.compressor.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system !== 'darwin',
      function: () => functions.navigate('/chd-tool'),
    },
    {
      icon: [iconChecker],
      iconFlat: 'checker',
      title: t('aside.biosChecker'),
      description: t('aside.cards.biosChecker.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/check-bios'),
    },
    {
      icon: [iconJoystick],
      iconFlat: 'boot',
      title: t('aside.bootMode'),
      description: t('aside.cards.bootMode.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system === 'win32',
      function: () => functions.navigate('/game-mode/welcome'),
    },
    {
      icon: [iconScreen],
      iconFlat: 'theme',
      title: t('aside.pegasusTheme'),
      description: t('aside.cards.pegasusTheme.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: state.installFrontends.pegasus.status && system !== 'darwin',
      function: () => functions.navigate('/pegasus-theme-choice'),
    },
    {
      icon: [iconCloud],
      iconFlat: 'cloud',
      title: t('aside.cloudSaves'),
      description: t('aside.cards.cloudSaves.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system !== 'darwin',
      function: () => functions.navigate('/cloud-sync/welcome'),
    },

    {
      icon: [iconMigrate],
      iconFlat: 'migrate',
      title: t('aside.migrateInstalation'),
      description: t('aside.cards.migration.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: !(system === 'win32'),
      function: () => functions.navigate('/migration'),
    },

    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'EmuDecky',
      description: t('aside.cards.emuDecky.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: !(system === 'win32'),
      function: () => functions.navigate('/decky-controls'),
    },
    {
      status: system === 'win32' || system === 'darwin' ? false : 'separator',
      title: t('aside.thirdParty'),
    },

    {
      icon: [iconCustom],
      iconFlat: 'custom',
      title: t('aside.cards.onlineMultiplayer.title'),
      description: t('aside.cards.onlineMultiplayer.description'),
      button: t('general.install'),
      btnCSS: 'btn-simple--5',
      status: false,
      function: () => functions.navigate('/remote-play-whatever'),
    },
    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: t('aside.gyro'),
      description: t('aside.cards.gyro.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system === 'SteamOS',
      function: () => functions.navigate('/gyrodsu'),
    },
    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'PowerTools',
      description: t('aside.cards.deckyPerformance.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system === 'SteamOS',
      function: () => functions.navigate('/power-tools'),
    },
    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'PowerControls',
      description: t('aside.cards.deckyPerformance.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: system === 'chimeraos',
      function: () => functions.navigate('/power-controls'),
    },
    {
      status: 'separator',
      title: t('aside.other'),
    },
    {
      icon: [iconPrize],
      iconFlat: 'prize',
      title: t('aside.earlyAccess'),
      description: t('aside.cards.earlyAccess.description'),
      button: t('aside.buttons.donate'),
      btnCSS: 'btn-simple--5',
      status: branch.includes('early') ? false : true,
      function: () => functions.navigate('/early-access'),
    },
    {
      icon: [iconPrize],
      iconFlat: 'prize',
      title: t('aside.cards.resetToken.title'),
      description: t('aside.cards.resetToken.description'),
      button: t('aside.buttons.changeToken'),
      btnCSS: 'btn-simple--5',
      status: branch.includes('early') || branch.includes('dev') ? true : false,
      function: () => functions.resetToken(),
    },
    {
      icon: [iconDoc],
      iconFlat: 'doc',
      title: t('aside.logFiles'),
      description: t('aside.cards.logFiles.description'),
      button: t('aside.buttons.createZip'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.getLogs(),
    },
    {
      icon: [iconList],
      iconFlat: 'list',
      title: t('aside.changelog'),
      description: t('aside.cards.changelog.description'),
      button: t('aside.buttons.read'),
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/change-log'),
    },

    {
      icon: [iconCloud],
      iconFlat: 'cloud',
      title: t('aside.cloudServices'),
      description: t('aside.cards.cloudServices.description'),
      button: t('general.moreInfo'),
      btnCSS: 'btn-simple--5',
      status: !(system === 'win32' || system === 'darwin'),
      function: () => functions.openCSM(),
    },
    {
      icon: [iconUninstall],
      iconFlat: 'uninstall',
      title: t('aside.uninstall'),
      description: t('aside.cards.uninstall.description'),
      button: t('general.uninstall'),
      btnCSS: 'btn-simple--3',
      status: system !== 'darwin',
      function: () => functions.uninstall(),
    },
  ];
  return (
    <aside className={`sidebar ${css}`}>
      <Sprite />
      <ul className="sidebar__elements">
        <li>{system !== 'win32' && <small>{t('aside.featured')}</small>}</li>

        {settingsCards &&
          settingsCards.map((item) => {
            if (item.status === 'separator') {
              return (
                <li key={item.title}>
                  <small>{item.title}</small>
                </li>
              );
            }

            if (system === 'darwin') {
              if (item.iconFlat === 'disk') {
                return;
              }
              if (item.iconFlat === 'screen') {
                return;
              }
            }

            if (item.status === false) {
              return;
            }

            return (
              <li key={item.title}>
                <button type="button" onClick={() => item.function()}>
                  <div className="list--icons list--icons--xs">
                    <div className="text">
                      {/* system !== 'darwin' &&
                        system !== 'win32' &&
                        system !== 'chimeraos' && (
                          <img
                            className="icon icon--xs"
                            src={item.icon}
                            alt={item.title}
                          />
                        ) */}
                      {/* system !== 'SteamOS' && (
                        <Icon name={item.iconFlat} fill="transparent" />
                      ) */}
                      <Icon name={item.iconFlat} fill="transparent" />
                      {item.title}
                      {item.updates && <span className="sidebar__alert" />}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
      </ul>
      {/* <div className="sidebar__announcements"></div> */}
      <EmuModal modal={modal} />
    </aside>
  );
}

Aside.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.any,
};

Aside.defaultProps = {
  active: false,
  data: false,
};

export default Aside;
