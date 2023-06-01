import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';
import CardSettings from 'components/molecules/CardSettings/CardSettings';

import SimpleCarousel from 'components/molecules/SimpleCarousel/SimpleCarousel';
import { Img } from 'getbasecore/Atoms';
import { ProgressBar, BtnSimple } from 'getbasecore/Atoms';
import { iconSuccess, iconDanger } from 'components/utils/images/images';
import {
  imgdefault,
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
  imgxenia,
  imgsrm,
  imgrmg,
  imgscummvm,
  imgsupermodelista,
  imgesde,
  imgmelonds,
} from 'components/utils/images/images';

import sdlogo from 'assets/sdlogo.png';
import remotelogo from 'assets/remotelogo.png';
import amberlogo from 'assets/amberelec.jpg';
const ipcChannel = window.electron.ipcRenderer;
function End({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  onClose,
  next,
  back,
  data,
  isGameMode,
  message,
  percentage,
  onClickLog,
}) {
  const { state, setState } = useContext(GlobalContext);
  const { storage, installEmus, system } = state;

  const [statePage, setStatePage] = useState({
    emusInstalledStatus: undefined,
  });

  const { emusInstalledStatus } = statePage;

  const checkInstallation = () => {
    const installEmusArray = Object.values(installEmus);

    const onlySelectedEmus = installEmusArray.filter(
      (item) => item.status === true
    );

    let bashArray = [];
    onlySelectedEmus.forEach((item) => {
      console.log(item.name);
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
    ipcChannel.once('getEmuInstallStatus', (message) => {
      const emusChecked = message;

      console.log(JSON.parse(message.stdout));
      setStatePage({
        ...statePage,
        emusInstalledStatus: JSON.parse(message.stdout),
      });
    });
  };

  //We check if everything installed
  useEffect(() => {
    if (system !== 'win32') {
      checkInstallation();
    }
  }, [disabledNext]);

  return (
    <>
      {disabledNext == true && <p className="lead">{message}...</p>}

      <Main>
        {disabledNext == false && (
          <div className="tips">
            {system !== 'win32' && (
              <Card css="is-selected">
                <div className="container--grid">
                  <span data-col-sm="12" className="h2">
                    Post Installation Status
                  </span>
                  <p className="lead">
                    Please check that all your emulators have been installed. If
                    an emulator or tool failed to install, run a "Custom Reset"
                    or install the emulator on the "Manage Emulators" page.
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
          </div>
        )}
        <br />
        {disabledNext == true && (
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

export default End;
