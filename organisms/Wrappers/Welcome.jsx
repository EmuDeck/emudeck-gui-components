import React, { useContext } from "react";
import { GlobalContext } from "context/globalContext";
import Main from "components/organisms/Main/Main";

import { Alert } from "getbasecore/Molecules";
import Card from "components/molecules/Card/Card";
import CardSettings from "components/molecules/CardSettings/CardSettings";
import {
  iconSuccess,
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
  iconBooks,
  iconJoystick,
  iconPackage,
} from "components/utils/images/images";

const Welcome = ({ onClick, alert, alertCSS, functions, settingsCards }) => {
  const { state } = useContext(GlobalContext);
  const { mode, second, system } = state;
  const pendingUpdate = localStorage.getItem('pending_update');

  const settingsCards = [
    {
      icon: [iconQuick],
      title: 'Quick Reset',
      description: 'Update or reset your installation to the latest EmuDeck version in one easy click',
      button: 'Reinstall',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate === 'true' ? false : true,
      function: () => onClick('easy'),
    },
    {
      icon: [iconCustom],
      title: 'Custom Reset',
      description: 'Update or reset your installation to the latest EmuDeck version in custom mode',
      button: 'Reinstall',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate === 'true' ? false : true,
      function: () => onClick('expert'),
    },
    {
      icon: [iconJoystick],
      title: 'Steam ROM Manager',
      description: 'Launch Steam ROM Manager to add emulators, tools, and ROMs to your Steam Library',
      button: 'Launch',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate === 'true' ? true : false,
      function: () => functions.openSRM(),
    },
    {
      icon: [iconPlugin],
      title: 'Power Tools',
      description: 'A Decky Loader Plugin to tweak performance in Game Mode',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/power-tools'),
    },
    {
      icon: [iconPlugin],
      title: 'DeckyControls',
      description:
        'An EmuDeck Decky Loader Plugin to easily view emulator hotkeys in Game Mode',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/decky-controls'),
    },
    {
      icon: [iconPlugin],
      title: 'Gyroscope',
      description: 'Enable your Steam Deck gyroscope in emulation',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/gyrodsu'),
    },
    {
      icon: [iconCompress],
      title: 'EmuDeck Compression Tool',
      description: 'Compress your ROMs to optimize your storage',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/chd-tool'),
    },
    {
      icon: [iconPackage],
      title: 'Update Emulators',
      description: 'Update all of your emulators and tools in one nifty package',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate === 'true' ? true : false,
      function: () => functions.navigate('/update-emulators'),
    },
    {
      icon: [iconGear],
      title: 'Quick Settings',
      description: 'Customize bezels, shaders, aspect ratio, and more',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: pendingUpdate === 'true' ? true : false,
      function: () => functions.navigate('/settings'),
    },
    {
      icon: [iconSuccess],
      title: 'BIOS Checker',
      description: 'Check if you have the correct BIOS using EmuDeck\'s BIOS Checker',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/check-bios'),
    },
    {
      icon: [iconCloud],
      title: 'Cloud Backup',
      description: 'Backup your saves and save states to the cloud',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/cloud-sync'),
    },
    {
      icon: [iconCloud],
      title: 'Cloud Services Manager',
      description: 'Manage your cloud services, Netflix, Spotify, Xbox Cloud Gaming, and more!',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.openCSM(),
    },
    {
      icon: [iconPrize],
      title: 'RetroAchievements',
      description:
        'Configure RetroAchievements for RetroArch, Duckstation, and PCSX2',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/RA-achievements-config'),
    },
    {
      icon: [iconMigrate],
      title: 'Migrate Installation',
      description: 'Migrate your EmuDeck installation to your SD Card or vice versa',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/migration'),
    },
    {
      icon: [iconBooks],
      title: 'Emulator Guides',
      description: 'Reset emulator configurations or view EmuDeck\'s emulator guides',
      button: 'More Info',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/emulator-guide'),
    },
    {
      icon: [iconDoc],
      title: 'EmuDeck Log',
      description: 'Troubleshoot your EmuDeck install by reading the log',
      button: 'Retrieve Log',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.sprunge(),
    },
    {
      icon: [iconList],
      title: 'Changelog',
      description:
        'Read about the latest changes to EmuDeck',
      button: 'Read',
      btnCSS: 'btn-simple--5',
      status: true,
      function: () => functions.navigate('/change-log'),
    },
    {
      icon: [iconUninstall],
      title: 'Uninstall',
      description: 'Uninstall EmuDeck from your system',
      button: 'Uninstall',
      btnCSS: 'btn-simple--3',
      status: true,
      function: () => functions.navigate('/uninstall'),
    },
    {
      icon: [iconPrize],
      title: 'Become a Patreon',
      description: 'Consider supporting EmuDeck on Patreon',
      button: 'Donate',
      btnCSS: 'btn-simple--3',
      status: true,
      type: 'link',
      href: 'https://www.patreon.com/bePatron?u=29065992',
      function: () => {},
    },
  ];

  return (
    <>
      {second === false && <p className="lead">Select how you want to set up your device:</p>}

      {pendingUpdate === "true" && second === true && (
        <p className="lead">
          There is an update available! Update to receive the latest EmuDeck configuration and optimizations for your emulators and tools.
        </p>
      )}
      {pendingUpdate === "false" && second === true && <p className="lead">Quick actions:</p>}

      <Main>
        {/*
            Second install screen
          */}
        {second === true && (
          <>
            <div className="container--grid">
              {pendingUpdate === "true" && (
                <>
                  <div data-col-sm="4">
                    <CardSettings
                      css="is-highlighted"
                      btnCSS="btn-simple--1"
                      icon={iconQuick}
                      iconSize="md"
                      title="Quick Update"
                      onClick={() => onClick("easy")}
                      description="This option automatically updates your emulators & settings in one click. Chose this option if you haven't customized your emulator outside of EmuDeck's options"
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
                      onClick={() => onClick("expert")}
                      description="This option allows you to customize your emulators & settings. Chose this one if you have customized your emulators outside of EmuDeck's options and want to preserve them"
                      button="Update and let me keep my configuration"
                    />
                  </div>
                </>
              )}

              {pendingUpdate === "false" && (
                <>
                  <div data-col-sm="3">
                    <CardSettings
                      css="is-highlighted"
                      btnCSS="btn-simple--1"
                      icon={iconJoystick}
                      iconSize="md"
                      title="Steam Rom Manager"
                      onClick={() => functions.openSRM()}
                      description="Launch Steam ROM Manager to add emulators, tools, and ROMs to your Steam Library"
                      button="Add more games"
                    />
                  </div>
                  <div data-col-sm="3">
                    <CardSettings
                      css="is-highlighted"
                      btnCSS="btn-simple--1"
                      icon={iconGear}
                      iconSize="md"
                      title="Quick Settings"
                      onClick={() => functions.navigate("/settings")}
                      description="Customize bezels, shaders, aspect ratio, auto save and more"
                      button="Configure"
                    />
                  </div>
                  {/* <div data-col-sm="3">
                        <CardSettings
                          css="is-highlighted"
                          btnCSS="btn-simple--1"
                          icon={iconGear}
                          iconSize="md"
                          title="EmuDeck Store"
                          onClick={() => functions.navigate('/store-front')}
                          description="Download free non-commercial homebrew games"
                          button="Configure"
                        />
                      </div> */}
                  {system != "win32" && (
                    <div data-col-sm="3">
                      <CardSettings
                        css="is-highlighted"
                        btnCSS="btn-simple--1"
                        icon={iconPackage}
                        iconSize="md"
                        title="Update Emulators"
                        onClick={() => functions.navigate('/update-emulators')}
                        description="Update all of your emulators and tools in one nifty package"
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
                if (item.status === false) {
                  return;
                }
                if (system === "win32" && item.title != "Custom Reset") {
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
                      type={item.type}
                      href={item.href}
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
              <Card css={mode === "easy" && "is-selected"} onClick={() => onClick("easy")}>
                <span className="h3">
                  {second === false && "Easy Mode"}
                  {second === true && "Quick Update"}
                </span>
                <p>
                  {second === false &&
                    "This mode automatically installs and configures your device with our recommended settings so you can start playing right away."}
                  {second === true &&
                    "This mode automatically updates EmuDeck in one click. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten."}
                </p>
              </Card>
            </div>

            <div data-col-sm="5">
              <Card css={mode === "expert" && "is-selected"} onClick={() => onClick("expert")}>
                <span className="h3">
                  {second === false && "Custom Mode"}
                  {second === true && "Custom Update"}
                </span>
                <p>
                  {second === false &&
                    "This mode allows you to customize how EmuDeck installs to your system. Configure Aspect Ratios, Bezels, Filters, RetroAchievments, Emulators, EmulationStation-DE themes, and Cloud Saves."}
                  {second === true &&
                    "This mode allows you to customize how EmuDeck updates. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten."}
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
                  <div dangerouslySetInnerHTML={{ __html: alert }} />
                </Alert>
              </div>
            </div>
          </>
        )}
      </Main>
    </>
  );
};

export default Welcome;
