import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import { BtnSimple, ProgressBar } from 'getbasecore/Atoms';
import { Alert } from 'getbasecore/Molecules';
import {
  iconSuccess,
  iconDanger,
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
  iconHelp,
} from 'components/utils/images/images.js';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  List,
  Img,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';
import CardSettings from 'components/molecules/CardSettings/CardSettings.js';

const Welcome = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  update,
  next,
  back,
  third,
  thirdText,
  fourthText,
  backText,
  alert,
  alertCSS,
  saveCommand,
  runCommand,
  data,
  counter,
  functions,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { mode, debug, command, version, second, system, language, gamemode } =
    state;
  const pendingUpdate = localStorage.getItem('pending_update');
  console.log({ pendingUpdate });
  const navigate = useNavigate();
  const settingsCards = [
    {
      icon: [iconQuick],
      title: 'Quick Reset',
      description: 'Reset settings with our defaults in one click',
      button: 'Reinstall',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate == 'true' ? false : true,
      function: () => onClick('easy'),
    },
    {
      icon: [iconCustom],
      title: 'Custom Reset',
      description: 'Chose what emulators do you want to reset',
      button: 'Reinstall',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate == 'true' ? false : true,
      function: () => onClick('expert'),
    },
    {
      icon: [iconList],
      title: 'Steam Rom Manager',
      description: 'Launch SRM to add more games to your Steam Library',
      button: 'Launch',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate == 'true' ? true : false,
      function: () => functions.openSRM(),
    },
    {
      icon: [iconPlugin],
      title: 'PowerTools',
      description: 'Decky plugin to improve performance in some emulators',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/power-tools'),
    },
    {
      icon: [iconPlugin],
      title: 'DeckyControls',
      description:
        'EmuDeck decky plugin to access emulator hotkeys in Gaming Mode',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/decky-controls'),
    },
    {
      icon: [iconPlugin],
      title: 'Gyroscope',
      description: 'Use your SteamDeck gyroscope with Wii and Switch games',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/gyrodsu'),
    },
    {
      icon: [iconCompress],
      title: 'EmuDeck Compressor',
      description: 'Lossless compression of ISO and Nintendo games',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/chd-tool'),
    },
    {
      icon: [iconGear],
      title: 'Update Emulators',
      description: 'Update your emulators right from EmuDeck',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate == 'true' ? true : false,
      function: () => navigate('/update-emulators'),
    },
    {
      icon: [iconGear],
      title: 'Quick Settings',
      description: 'Customize bezels, shaders, aspect ratio and more',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate == 'true' ? true : false,
      function: () => navigate('/settings'),
    },
    {
      icon: [iconSuccess],
      title: 'Bios Checker',
      description: 'Check if you have your correct bios installed',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/check-bios'),
    },
    {
      icon: [iconCloud],
      title: 'Cloud Backup',
      description: 'Backup your states and saved games to the cloud',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/cloud-sync'),
    },
    {
      icon: [iconPrize],
      title: 'RetroAchievements',
      description:
        'Configure RetroAchivments for RetroArch, PCSX2 and DuckStation',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/RA-achievements-config'),
    },
    {
      icon: [iconMigrate],
      title: 'Migrate installation',
      description: 'Move your installation to your SD Card or viceversa',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/migration'),
    },
    {
      icon: [iconHelp],
      title: 'Emulator guides',
      description: 'Check our hotkeys, read our wiki and more help',
      button: 'More info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/emulator-guide'),
    },
    {
      icon: [iconDoc],
      title: 'Upload Log',
      description: 'Having issues installing? Send us your log',
      button: 'Upload',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.sprunge(),
    },
    {
      icon: [iconList],
      title: 'ChangeLog',
      description:
        'Read all about the improvements done in this current version',
      button: 'Read',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => navigate('/change-log'),
    },
    {
      icon: [iconUninstall],
      title: 'Uninstall',
      description: 'Uninstall EmuDeck from your system from here',
      button: 'Uninstall',
      btnCSS: 'btn-simple--3',
      status: true,
      function: () => navigate('/uninstall'),
    },
  ];

  return (
    <>
      <div className="app">
        <Aside />
        <div className="wrapper">
          {second === false && <Header title="Welcome to" bold={`EmuDeck`} />}
          {second === false && (
            <p className="lead">Select how you want to set up your device:</p>
          )}

          {second === true && (
            <Header title="Welcome back to" bold={`EmuDeck`} />
          )}
          {pendingUpdate === 'true' && second === true && (
            <p className="lead">
              You have a pending update, its recommended to update so you have
              the latest version of EmuDeck's configuration and optimization for
              your emulators.
            </p>
          )}
          {pendingUpdate === 'false' && second === true && (
            <p className="lead">Quick actions:</p>
          )}

          <Main>
            {/*
            Second install screen
          */}
            {second === true && (
              <>
                <div className="container--grid">
                  {pendingUpdate == 'true' && (
                    <>
                      <div data-col-sm="4">
                        <CardSettings
                          css="is-highlighted"
                          btnCSS="btn-simple--1"
                          icon={iconQuick}
                          iconSize="md"
                          title="Quick Update"
                          onClick={() => onClick('easy')}
                          description="This mode automatically updates your emulators & settings in one click."
                          button="Update and overwrite my configuration"
                        />
                      </div>
                      <div data-col-sm="4">
                        <CardSettings
                          css="is-highlighted"
                          btnCSS="btn-simple--1"
                          icon={iconCustom}
                          iconSize="md"
                          title="Custom Update"
                          onClick={() => onClick('expert')}
                          description="This mode allows you to customize your emulators & settings."
                          button="Update and let me keep my configuration"
                        />
                      </div>
                    </>
                  )}

                  {pendingUpdate == 'false' && (
                    <>
                      <div data-col-sm="3">
                        <CardSettings
                          css="is-highlighted"
                          btnCSS="btn-simple--1"
                          icon={iconList}
                          iconSize="md"
                          title="Steam Rom Manager"
                          onClick={() => functions.openSRM()}
                          description="Launch SRM to add more games to your Steam Library"
                          button="Add more games"
                        />
                      </div>
                      <div data-col-sm="3">
                        <CardSettings
                          css="is-highlighted"
                          btnCSS="btn-simple--1"
                          icon={iconList}
                          iconSize="md"
                          title="Quick Settings"
                          onClick={() => functions.openSRM()}
                          description="Customize bezels, shaders, aspect ratio, auto save and more"
                          button="Configure"
                        />
                      </div>
                      {system != 'win32' && (
                        <div data-col-sm="3">
                          <CardSettings
                            css="is-highlighted"
                            btnCSS="btn-simple--1"
                            icon={iconList}
                            iconSize="md"
                            title="Update Emulators"
                            onClick={() => functions.openSRM()}
                            description="Update all your installed emulators right from EmuDeck"
                            button="Update"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>

                <hr />
                <p className="lead">Tools & Stuff:</p>

                <div className="container--grid">
                  {settingsCards.map((item) => {
                    if (item.status == false) {
                      return;
                    }
                    if (system == 'win32' && item.title != 'Custom Reset') {
                      return;
                    }

                    return (
                      <div data-col-sm="3" key={item.title}>
                        <CardSettings
                          icon={item.icon[0]}
                          iconSize="sm"
                          title={item.title}
                          button={item.button}
                          btnCSS={item.btnCSS}
                          onClick={item.function}
                          description={item.description}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/*
              First install screen
            */}
            {second === false && (
              <div className="container--grid">
                <div data-col-sm="5">
                  <Card
                    css={mode == 'easy' && 'is-selected'}
                    onClick={() => onClick('easy')}
                  >
                    <span className="h3">
                      {second === false && 'Easy Mode'}
                      {second === true && 'Quick Update'}
                    </span>
                    <p>
                      {second === false &&
                        'This mode automatically installs and configures your device with our recommended settings so you can start playing right away.'}
                      {second === true &&
                        'This mode automatically updates EmuDeck in one click. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten.'}
                    </p>
                  </Card>
                </div>

                <div data-col-sm="5">
                  <Card
                    css={mode == 'expert' && 'is-selected'}
                    onClick={() => onClick('expert')}
                  >
                    <span className="h3">
                      {second === false && 'Custom Mode'}
                      {second === true && 'Custom Update'}
                    </span>
                    <p>
                      {second === false &&
                        'This mode allows you to customize how EmuDeck installs to your system. Configure Aspect Ratios, Bezels, Filters, RetroAchievments, Emulators, EmulationStation-DE themes, and Cloud Saves.'}
                      {second === true &&
                        'This mode allows you to customize how EmuDeck updates. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten.'}
                    </p>
                  </Card>
                </div>
              </div>
            )}

            {alert && (
              <>
                <br />
                <div className="container--grid">
                  <div data-col-sm="10">
                    <Alert css={alertCSS}>
                      <div dangerouslySetInnerHTML={{ __html: alert }}></div>
                    </Alert>
                  </div>
                </div>
              </>
            )}
          </Main>
          {second === false && (
            <Footer
              back={back}
              backText={backText}
              third={third}
              thirdText={thirdText}
              fourthText={fourthText}
              next={next}
              exit={gamemode}
              disabledNext={disabledNext}
              disabledBack={disabledBack}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Welcome;
