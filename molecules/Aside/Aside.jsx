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
  const { system, systemName, mode, branch, installEmus } = state;
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
    let url;

    system === 'win32'
      ? (url = 'https://emudeck.github.io/known-issues/windows/')
      : (url = 'https://emudeck.github.io/?search=true');

    window.open(url, '_blank');
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

  const openSRM = () => {
    let modalData = {
      active: true,
      header: <span className="h4">{t('launching')} Steam Rom Manager</span>,
      body: (
        <p>
          We will close Steam if its running and then Steam Rom Manager will
          open, this could take a few seconds, please wait.
        </p>
      ),
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
        header: <span className="h4">{t('launching')} Steam Rom Manager</span>,
        body: (
          <>
            <p>
              We will close Steam if its running and then Steam Rom Manager will
              open, this could take a few seconds, please wait.
            </p>
            <strong>
              Desktop controls will temporarily revert to touch/trackpad/L2/R2.
            </strong>
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
    navigate('/rom-storage');
  };

  const showLog = () => {
    if (system === 'win32') {
      ipcChannel.sendMessage('bash-nolog', [
        `start powershell -NoExit -ExecutionPolicy Bypass -command "& { Get-Content $env:USERPROFILE/emudeck/logs/git.log -Tail 100 -Wait }"`,
      ]);
    } else if (system === 'darwin') {
      ipcChannel.sendMessage('bash-nolog', [
        `osascript -e 'tell app "Terminal" to do script "clear && tail -f $HOME/emudeck/logs/git.log"'`,
      ]);
    } else {
      ipcChannel.sendMessage('bash-nolog', [
        `konsole -e tail -f "$HOME/emudeck/logs/git.log"`,
      ]);
    }
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
  };

  const settingsCards = [
    {
      icon: [iconAndroid],
      iconFlat: 'android',
      title: 'Android',
      description: t('aside.android'),
      button: 'Configure',
      btnCSS: 'btn-simple--1',
      status: branch.includes('early') || branch === 'dev',
      function: () => functions.navigate('/android-welcome'),
    },

    {
      icon: [iconGear],
      iconFlat: 'gear',
      title: t('aside.quickSettings'),
      description:
        'Customize bezels, shaders, aspect ratio, auto save, and more',
      button: 'Configure',
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => functions.navigate('/settings'),
    },
    {
      icon: [iconGear],
      iconFlat: 'books',
      title: t('aside.manageEmulators'),
      description: 'Manage and update your Emulators and configurations',
      button: 'Update',
      btnCSS: 'btn-simple--1',
      status: true,
      updates,
      function: () => functions.navigate('/emulators'),
    },
    {
      icon: [iconPackage],
      iconFlat: 'package',
      title: 'EmuDeck Store',
      description: 'Download free non-commercial homebrew games',
      button: 'Get free games',
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => functions.navigate('/store-front'),
    },
    {
      icon: [iconJoystick],
      iconFlat: 'joystick',
      title: 'Steam ROM Manager',
      description: 'Add emulators, tools, or ROMs to your Steam Library',
      button: 'Launch',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.openSRM(),
    },
    {
      icon: [iconDisk],
      iconFlat: 'disk',
      title: t('aside.importGames'),
      description: 'Transfer your games using a USB Drive',
      button: 'Add more games',
      btnCSS: 'btn-simple--1',
      status: true,
      function: () => functions.navigate('/copy-games'),
    },
    {
      icon: [iconQuick],
      iconFlat: 'quick',
      title: t('aside.quickReset'),
      description:
        'Update or reset your installation to the latest EmuDeck version in one easy click',
      button: 'Reinstall',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => selectMode('easy'),
    },
    {
      icon: [iconCustom],
      iconFlat: 'custom',
      title: t('aside.customReset'),
      description:
        'Update or reset your installation to the latest EmuDeck version in custom mode',
      button: 'Reinstall',
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
      iconFlat: 'screen',
      title: t('aside.screenResolution'),
      description: 'Upscale your emulators resolution',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: system !== 'darwin',
      function: () => functions.navigate('/change-resolution'),
    },
    {
      icon: [iconPrize],
      iconFlat: 'prize',
      title: t('aside.retroAchievements'),
      description:
        'Configure RetroAchievements for Duckstation, PCSX2, and RetroArch',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: system !== 'darwin',
      function: () => functions.navigate('/RA-achievements-config'),
    },

    {
      status: 'separator',
      title: t('aside.exclusiveTools'),
    },

    {
      icon: [iconCompress],
      iconFlat: 'compress',
      title: 'EmuDeck Compressor',
      description: 'Compress your ROMs to optimize your storage',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: !(system === 'win32' || system === 'darwin'),
      function: () => functions.navigate('/chd-tool'),
    },
    {
      icon: [iconChecker],
      iconFlat: 'checker',
      title: t('aside.biosChecker'),
      description: 'Use the EmuDeck BIOS Checker to validate your BIOS',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/check-bios'),
    },
    {
      icon: [iconJoystick],
      iconFlat: 'boot',
      title: t('aside.bootMode'),
      description: 'Boot directly on Steam, not Windows',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: system === 'win32',
      function: () => functions.navigate('/game-mode/welcome'),
    },
    {
      icon: [iconScreen],
      iconFlat: 'theme',
      title: t('aside.pegasusTheme'),
      description: 'Pich your Pegasus theme',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: state.installFrontends.pegasus.status,
      function: () => functions.navigate('/pegasus-theme-choice'),
    },
    {
      icon: [iconCloud],
      iconFlat: 'cloud',
      title: t('aside.cloudSaves'),
      description: 'Sync or backup your saves and save states to the cloud',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/cloud-sync/welcome'),
    },

    {
      icon: [iconMigrate],
      iconFlat: 'migrate',
      title: t('aside.migrateInstalation'),
      description:
        'Migrate your EmuDeck installation to your SD Card or vice versa',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status:
        system === 'win32' || system === 'darwin'
          ? false
          : !!(
              systemName === 'SteamOS' ||
              systemName === 'Linux' ||
              systemName === 'Chimera'
            ),
      function: () => functions.navigate('/migration'),
    },

    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'EmuDecky',
      description:
        'Plugin to easily view emulator hotkeys and configure EmuDeck in Gaming Mode',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: !(system === 'win32' || system === 'darwin'),
      function: () => functions.navigate('/decky-controls'),
    },

    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'Retro Library',
      description: 'Plugin to easily add a Retro Library',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: branch.includes('early') || branch.includes('dev'),
      function: () => functions.navigate('/decky-rom-launcher'),
    },

    {
      status: system === 'win32' || system === 'darwin' ? false : 'separator',
      title: t('aside.thirdParty'),
    },

    {
      icon: [iconCustom],
      iconFlat: 'custom',
      title: 'Online Multiplayer',
      description: 'Play your emulators over internet with your friends',
      button: 'Install',
      btnCSS: 'btn-simple--5',
      status: false,
      function: () => functions.navigate('/remote-play-whatever'),
    },
    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: t('aside.gyro'),
      description: 'Enable your Steam Deck gyroscope in emulation',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: system === 'SteamOS',
      function: () => functions.navigate('/gyrodsu'),
    },
    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'PowerTools',
      description:
        'A Decky Loader Plugin to manage performance settings in Game Mode',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: system === 'SteamOS',
      function: () => functions.navigate('/power-tools'),
    },
    {
      icon: [iconPlugin],
      iconFlat: 'plugin',
      title: 'PowerControls',
      description:
        'A Decky Loader Plugin to manage performance settings in Game Mode',
      button: 'More info',
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
      description:
        'Support EmuDeck on Patreon and get early access to our latest features',
      button: 'Donate',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/early-access'),
    },
    {
      icon: [iconDoc],
      iconFlat: 'doc',
      title: t('aside.logFiles'),
      description: 'Send us your logs if you have issues',
      button: 'Create Zip',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.getLogs(),
    },
    {
      icon: [iconList],
      iconFlat: 'list',
      title: t('aside.changelog'),
      description: 'Read about the latest changes to EmuDeck',
      button: 'Read',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/change-log'),
    },

    {
      icon: [iconCloud],
      iconFlat: 'cloud',
      title: t('aside.cloudServices'),
      description: 'Manage your cloud services, Xbox Cloud Gaming, and more!',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: !(system === 'win32' || system === 'darwin'),
      function: () => functions.openCSM(),
    },
    {
      icon: [iconUninstall],
      iconFlat: 'uninstall',
      title: t('aside.uninstall'),
      description: 'Uninstall EmuDeck from your system',
      button: 'Uninstall',
      btnCSS: 'btn-simple--3',
      status: system !== 'darwin',
      function: () => functions.uninstall(),
    },
  ];
  return (
    <aside className={`sidebar ${css}`}>
      <Sprite />
      <ul className="sidebar__elements">
        <li>{system !== 'win32' && <small>Featured</small>}</li>

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
