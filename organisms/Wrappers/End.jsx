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
} from 'components/utils/images/images';

const ipcChannel = window.electron.ipcRenderer;
function End({ message, percentage, onClickWin32Config, step, disabledNext }) {
  const { state } = useContext(GlobalContext);
  const { installEmus, system } = state;

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
            {system === 'win32' && step === undefined && (
              <>
                <Header title="Controller configuration" />
                <p className="lead">
                  You need to manually configure your controller in both some
                  emulators and Steam. If you have done this already you can
                  ignore this step.
                </p>
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria="Star manual configuration"
                  onClick={() => onClickWin32Config()}
                >
                  Start controller configuration
                  <svg
                    className="rightarrow"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M16.4091 8.48003L21.5024 13.5734L1.98242 13.5734L1.98242 18.0178H21.5024L16.4091 23.1111L19.5558 26.2578L30.018 15.7956L19.5558 5.33337L16.4091 8.48003Z"
                    />
                  </svg>
                </BtnSimple>
              </>
            )}
            {system === 'win32' && step === 'yuzu' && (
              <>
                <Header title="Yuzu configuration" />
                <p className="lead">
                  Click on the menu Emulation, Configure, Controls and select
                  your controller in the Input Device dropdown.
                  <br />
                  Close Yuzu and continue so we can continue to configure the
                  next emulator
                </p>
                <Iframe src="https://www.youtube-nocookie.com/embed/JvwdXTAmNWU?autoplay=1&playlist=JvwdXTAmNWU&loop=1&controls=0&mute=1&rel=0&modestbranding=1" />
              </>
            )}
            {system === 'win32' && step === 'citra' && (
              <>
                <Header title="Citra configuration" />
                <p className="lead">
                  Click on the menu Emulation, Configure, Controls, click on
                  Auto Map and follow the instructions.
                  <br />
                  Close Yuzu and continue so we can continue to configure the
                  next emulator
                </p>
                <Iframe src="https://www.youtube-nocookie.com/embed/DRrjrR17wEs?autoplay=1&playlist=DRrjrR17wEs&loop=1&controls=0&mute=1&rel=0&modestbranding=1" />
              </>
            )}
            {system === 'win32' && step === 'ryujinx' && (
              <>
                <Header title="Ryujinx configuration" />
                <p className="lead">
                  Click on the menu Options, Settings, Input, Player 1
                  Configure, and select your controller in the Input Device
                  dropdown
                  <br />
                  Close Ryujinx and continue so we can continue to configure the
                  next emulator
                </p>
                <Iframe src="https://www.youtube-nocookie.com/embed/-THpQnpA1y8?autoplay=1&playlist=-THpQnpA1y8&loop=1&controls=0&mute=1&rel=0&modestbranding=1" />
              </>
            )}
            {system === 'win32' && step === 'steam' && (
              <>
                <Header title="Steam configuration" />
                <p className="lead">
                  Open Steam by yourself, go to Settings, Controller, make sure
                  Steam Input is enabled for your controller, scroll down to
                  Desktop Layout, click on the current layout and then go to
                  Templates and select the EmuDeck WE Template for your
                  controller.
                  <br />
                  When you finish this step you can continue to the next page.
                </p>
                <Iframe src="https://www.youtube-nocookie.com/embed/ra_B1axeFqU?autoplay=1&playlist=ra_B1axeFqU&loop=1&controls=0&mute=1&rel=0&modestbranding=1" />
              </>
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
