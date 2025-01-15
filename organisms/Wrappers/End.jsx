import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Card from 'components/molecules/Card/Card';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';
import Sonic from 'components/organisms/Sonic/Sonic';
import EmuModal from 'components/molecules/EmuModal/EmuModal';
import { Img, ProgressBar, BtnSimple, Iframe } from 'getbasecore/Atoms';
import { iconSuccess, iconDanger } from 'components/utils/images/icons';

const ipcChannel = window.electron.ipcRenderer;
function End({ message, percentage, step, disabledNext }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { installEmus, system, device } = state;

  const [statePage, setStatePage] = useState({
    emusInstalledStatus: undefined,
  });

  const { emusInstalledStatus } = statePage;

  const checkInstallation = () => {
    const installEmusArray = Object.values(installEmus);

    const onlySelectedEmus = installEmusArray.filter(
      (item) => item.status === true
    );

    const bashArray = [];
    onlySelectedEmus.forEach((item) => {
      if (item.name === 'EmulationStation-DE') {
        item.name = 'ESDE';
      }

      if (item.name === 'PCSX2') {
        item.name = 'PCSX2QT';
      }

      if (item.name === "Rosalie's Mupen Gui") {
        item.name = 'RMG';
      }

      if (item.name === 'Steam Rom Manager') {
        return;
      }

      bashArray.push(item.name);
    });

    let emuList = bashArray.join('" "');

    emuList = emuList.replace(/(\r\n|\n|\r)/gm, '');

    ipcChannel.sendMessage('emudeck', [
      `getEmuInstallStatus|||getEmuInstallStatus "${emuList}"`,
    ]);
    ipcChannel.once('getEmuInstallStatus', (messageInstallStatus) => {
      setStatePage({
        ...statePage,
        emusInstalledStatus: JSON.parse(messageInstallStatus.stdout),
      });
    });
  };

  // We check if everything installed
  useEffect(() => {
    if (system !== 'win32') {
      checkInstallation();
    }
  }, [disabledNext]);

  const showLog = () => {
    if (system === 'win32') {
      ipcChannel.sendMessage('bash-nolog', [
        `start powershell -NoExit -ExecutionPolicy Bypass -command "& { Get-Content $env:APPDATA/emudeck/logs/emudeckSetup.log -Tail 100 -Wait }"`,
      ]);
    } else if (system === 'darwin') {
      ipcChannel.sendMessage('bash-nolog', [
        `osascript -e 'tell app "Terminal" to do script "clear && tail -f $HOME/emudeck/logs/emudeckSetup.log"'`,
      ]);
    } else {
      ipcChannel.sendMessage('bash-nolog', [
        `konsole -e tail -f "$HOME/emudeck/logs/emudeckSetup.log"`,
      ]);
    }
  };

  return (
    <>
      <Main>
        {disabledNext === false && (
          <div className="tips">
            {system !== 'win32' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <span data-col-sm="12" className="h2">
                    Post Installation Status
                  </span>
                  <p className="lead">
                    Please check that all your emulators has been installed. If
                    an emulator or tool failed to install, run a
                    <strong>Custom Reset</strong> or install the emulator using
                    the <strong>Manage Emulators</strong> page.
                  </p>
                  {emusInstalledStatus !== undefined &&
                    Object.values(emusInstalledStatus.Emulators).map((item) => {
                      return (
                        <div data-col-sm="4" className="h5">
                          {item.Name} -
                          {item.Installed === 'true' && (
                            <Img
                              src={iconSuccess}
                              css="icon icon--xs"
                              alt="OK"
                            />
                          )}
                          {item.Installed === 'false' && (
                            <Img
                              src={iconDanger}
                              css="icon icon--xs"
                              alt="OK"
                            />
                          )}
                        </div>
                      );
                    })}
                </div>
              </Card>
            )}
            {system === 'win32' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <div data-col-sm="7">
                    <span className="h3">⚠️ Read before continuing ⚠️</span>
                    <p className="lead">
                      EmuDeck is designed to work using
                      <strong>Steam input</strong>, you need to launch the games
                      using Steam after adding them with Steam Rom Manager, same
                      thing with the Emulators, EmulationStation or Pegasus,
                      otherwise the
                      <strong>controls and hotkeys won't work</strong>.
                      <br />
                      Apps like DeckTools or Handheld Companion might break
                      controls too in some cases.
                      <br />
                      Make sure your handheld is on GamePad mode at all times,
                      not on Desktop or Auto.
                      <br />
                      <strong>
                        If you want to use other Frontends like Playnite you
                        will need to activate Steam Input on the Desktop as
                        shown on the video and keep Steam open in the background
                        at all times.
                      </strong>
                    </p>
                  </div>
                  <div data-col-sm="5">
                    <Iframe src="https://www.youtube-nocookie.com/embed/ra_B1axeFqU?autoplay=1&playlist=ra_B1axeFqU&loop=1&controls=0&mute=1&rel=0&modestbranding=1" />
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}
        <br />
        {disabledNext === true && <Sonic />}
      </Main>
      {disabledNext && (
        <EmuModal
          modalActiveValue={disabledNext === true}
          modalHeaderValue={<span className="h4">Installing EmuDeck...</span>}
          modalBodyValue={<p>{message}...</p>}
          modalFooterValue={
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Show log"
              disabled={false}
              onClick={() => showLog()}
            >
              Open detailed log
            </BtnSimple>
          }
          modalCSSValue="emumodal--xs emumodal--loading"
        />
      )}
    </>
  );
}

End.propTypes = {
  message: PropTypes.string,
  percentage: PropTypes.any,
  step: PropTypes.string,
  disabledNext: PropTypes.bool,
};

End.defaultProps = {
  message: '',
  percentage: '',
  step: '',
  disabledNext: true,
};

export default End;
