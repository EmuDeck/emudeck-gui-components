import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Card from 'components/molecules/Card/Card';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';

import { Img, ProgressBar, BtnSimple, Iframe } from 'getbasecore/Atoms';
import {
  iconSuccess,
  iconDanger,
  imgra,
  imgdolphin,
  imgprimehack,
  imgppsspp,
  imgduckstation,
  imgcitra,
  imgpcsx2,
  imgrpcs3,
  imgyuzu,
  imgryujinx,
  imgcemu,
  imgxemu,
  imgmame,
  imgvita3k,
  imgsrm,
  imgscummvm,
  imgesde,
  imgmelonds,
  allyCrate,
} from 'components/utils/images/images';

const ipcChannel = window.electron.ipcRenderer;
function End({ message, percentage, onClickWin32Config, step, disabledNext }) {
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
      // console.log(item.name);
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

  return (
    <>
      {disabledNext === true && <p className="lead">{message}...</p>}

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
                    an emulator or tool failed to install, run a{' '}
                    <strong>Custom Reset</strong>
                    or install the emulator on the{' '}
                    <strong>Manage Emulators</strong> page.
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
            {device !== 'Asus Rog Ally' && system === 'win32' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <div data-col-sm="6">
                    <span className="h2">3 easy steps</span>
                    <p className="lead">
                      EmuDeck is designed to work using Steam input, you need to
                      launch the games using Steam after adding them with Steam
                      Rom Manager, same with the Emulators or EmulationStation,
                      otherwise the controls won't work.
                    </p>
                  </div>
                  <img src={allyCrate} alt="alt" data-col-sm="6" />
                </div>
              </Card>
            )}
            {device === 'Asus Rog Ally' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <div data-col-sm="6">
                    <span className="h2">3 easy steps</span>
                    <ol className="list">
                      <li>
                        Set the Ally's Control Mode as GamePad like in the
                        picture. Auto won't work.
                      </li>
                      <li>
                        EmuDeck is designed to work using Steam input, you need
                        to launch the games using Steam after adding them with
                        Steam Rom Manager, same with the Emulators or
                        EmulationStation, otherwise the controls won't work.
                      </li>
                      <li>Enjoy your retro games!</li>
                    </ol>
                  </div>
                  <img src={allyCrate} alt="alt" data-col-sm="6" />
                </div>
              </Card>
            )}
          </div>
        )}
        <br />
        {disabledNext === true && (
          <>
            <ProgressBar css="progress--success" value={percentage} max={100} />
            <span className="h5">
              EmuDeck would not be possible without all these open-source
              projects. We want to give them all a big shout out for their hard
              work!
            </span>
            <div className="cards cards--mini cards--center">
              <Card css="is-selected">
                <img src={imgra} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgdolphin} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgprimehack} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgppsspp} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgduckstation} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgmelonds} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgcitra} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgpcsx2} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgrpcs3} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgyuzu} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgryujinx} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgcemu} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgxemu} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgmame} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgvita3k} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgscummvm} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgsrm} alt="alt" />
              </Card>
              <Card css="is-selected">
                <img src={imgesde} alt="alt" />
              </Card>
            </div>
          </>
        )}
      </Main>
    </>
  );
}

End.propTypes = {
  message: PropTypes.string,
  percentage: PropTypes.string,
  onClickWin32Config: PropTypes.string,
  step: PropTypes.string,
  disabledNext: PropTypes.bool,
};

End.defaultProps = {
  message: '',
  percentage: '',
  onClickWin32Config: '',
  step: '',
  disabledNext: true,
};

export default End;
