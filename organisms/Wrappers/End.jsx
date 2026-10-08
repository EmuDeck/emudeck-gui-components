import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Video from 'components/atoms/Video/Video';
import Card from 'components/molecules/Card/Card';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';
import Sonic from 'components/organisms/Sonic/Sonic';
import MetroCop from 'components/organisms/MetroCop/MetroCop';
import EmuModal from 'components/molecules/EmuModal/EmuModal';
import Notification from 'components/molecules/Notification/Notification';
import { Img, ProgressBar, BtnSimple, Iframe } from 'getbasecore/Atoms';
import { iconSuccess, iconDanger } from 'components/utils/images/icons';
const ipcChannel = window.electron.ipcRenderer;
function End({ message, percentage, step, disabledNext, onNext }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { installEmus, system, device } = state;

  const [statePage, setStatePage] = useState({
    emusInstalledStatus: undefined,
    showNotification: false,
  });

  const { emusInstalledStatus, showNotification, notificationText } = statePage;
  const [power, setPower] = useState(false);

  const notificationShow = (text) => {
    setStatePage((prev) => ({
      ...prev,
      notificationText: text,
      showNotification: true,
    }));

    setTimeout(() => {
      setStatePage((prev) => ({
        ...prev,
        showNotification: false,
      }));
    }, 2000);
  };

  const checkInstallation = () => {
    const installEmusArray = Object.values(installEmus);

    const onlySelectedEmus = installEmusArray.filter(
      (item) => item.status === true,
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
      setStatePage((prev) => ({
        ...prev,
        emusInstalledStatus: JSON.parse(messageInstallStatus.stdout),
      }));
    });
  };

  // We check if everything installed
  useEffect(() => {
    if (disabledNext === false) {
      if (power) {
        notificationShow(`🎉`);
      } else {
        onNext();
      }
    }

    // if (system !== 'win32') {
    //   checkInstallation();
    // }
  }, [disabledNext]);

  const showLog = () => {
    if (system === 'win32') {
      ipcChannel.sendMessage('bash-nolog', [
        `start powershell -NoExit -ExecutionPolicy Bypass -command "& { Get-Content $env:APPDATA/emudeck/logs/emudeckSetup.log -Tail 100 -Wait }"`,
      ]);
    } else if (system === 'darwin') {
      ipcChannel.sendMessage('bash-nolog', [
        `osascript -e 'tell app "Terminal" to do script "clear && tail -f $HOME/.config/EmuDeck/logs/emudeckSetup.log"'`,
      ]);
    } else {
      ipcChannel.sendMessage('bash-nolog', [
        `konsole -e tail -f "$HOME/.config/EmuDeck/logs/emudeckSetup.log"`,
      ]);
    }
  };

  return (
    <>
      <Main css="main--fill">
        {disabledNext === false && (
          <div className="tips">
            {/*system == 'win32' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <span data-col-sm="12" className="h2">
                    {t('EndPage.postInstallStatus')}
                  </span>
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{
                      __html: t('EndPage.postInstallDescription'),
                    }}
                  />
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
            )*/}
            {system !== 'win32' && device == 'Steam Frame' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <div data-col-sm="7">
                    <span className="h3">{t('EndPage.readBefore')}</span>
                    <p
                      className="lead"
                      dangerouslySetInnerHTML={{
                        __html: t('EndPage.readBeforeDescriptionFrame'),
                      }}
                    />
                  </div>
                </div>
              </Card>
            )}
            {system === 'win32' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <div data-col-sm="7">
                    <span className="h3">{t('EndPage.readBefore')}</span>
                    <p
                      className="lead"
                      dangerouslySetInnerHTML={{
                        __html: t('EndPage.readBeforeDescription'),
                      }}
                    />
                  </div>
                  <div data-col-sm="5">
                    <Video src="https://f005.backblazeb2.com/file/emudeck-assets/videos/ra_B1axeFqU-SteamControllerConfig.mp4" />
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}
        <MetroCop
          message={`${message}...`}
          buttonText={disabledNext ? t('EndPage.openLog') : t('general.next')}
          onButtonClick={disabledNext ? showLog : onNext}
          onPowerChange={setPower}
        />
      </Main>
      <Notification css={showNotification ? 'is-animated' : 'nope'}>
        {notificationText}
      </Notification>
    </>
  );
}

End.propTypes = {
  message: PropTypes.string,
  percentage: PropTypes.any,
  step: PropTypes.string,
  disabledNext: PropTypes.bool,
  onNext: PropTypes.func,
};

End.defaultProps = {
  message: '',
  percentage: '',
  step: '',
  disabledNext: true,
  onNext: () => {},
};

export default End;
