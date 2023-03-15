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
      bashArray.push(item.name);
    });

    const emuList = bashArray.join(' ');

    ipcChannel.sendMessage('emudeck', [
      `getEmuInstallStatus|||getEmuInstallStatus ${emuList}`,
    ]);
    ipcChannel.once('getEmuInstallStatus', (message) => {
      console.log(message);
      console.log(JSON.parse(message.stdout));
      setStatePage({
        ...statePage,
        emusInstalledStatus: JSON.parse(message.stdout),
      });
    });

    //     ipcChannel.sendMessage('emudeck', [
    //       `getEmuInstallStatus|||getEmuInstallStatus`,
    //     ]);
    //
    //     ipcChannel.once(`getEmuInstallStatus`, (status) => {
    //       console.log({ status });
    //       setStatePage({
    //         ...statePage,
    //         getEmuInstallStatus: status.stdout,
    //       });
    //     });
    //
    //     console.log({ emulator });
    //     console.log(`Checking ${emulator.name} status`);
    //     const name = emulator.name;
    //
    //     ipcChannel.sendMessage('emudeck', [
    //       `${name}_IsInstalled|||${name}_IsInstalled`,
    //     ]);
    //     ipcChannel.once(`${name}_IsInstalled`, (status) => {
    //       console.log(`${name}_IsInstalled`);
    //       status = status.stdout;
    //       //console.log({ status });
    //       status = status.replace('\n', '');
    //       //console.log({ status });
    //       //console.log({ installEmusUpdate });
    //       if (status.includes('true')) {
    //         installEmusUpdate = {
    //           ...installEmusUpdate,
    //           [emulator.id]: {
    //             id: emulator.id,
    //             status: emulator.status,
    //             installed: true,
    //             name: emulator.name,
    //           },
    //         };
    //         //return true;
    //       } else {
    //         installEmusUpdate = {
    //           ...installEmusUpdate,
    //           [emulator.id]: {
    //             id: emulator.id,
    //             status: emulator.status,
    //             installed: null,
    //             name: emulator.name,
    //           },
    //         };
    //         // return true;
    //       }
    //       setStatePage({
    //         ...statePage,
    //         installEmusPage: installEmusUpdate,
    //       });
    //       console.log({ installEmusUpdate });
    //       console.log({ installEmusPage });
    //       i++;
    //     });
  };

  // We create the Cards everytime we check if a emu was created
  // useEffect(() => {
  //   //console.log('installEmusUpdate updated');
  //   setStatePage({
  //     ...statePage,
  //     statusSlide: [
  //       <CardSettings css="is-highlighted">
  //         <div className="container--grid">
  //           <span data-col-sm="12" className="h2">
  //             Post Installation Statuss
  //           </span>
  //           <p className="lead">
  //             Please check that all your selected emulators got installed
  //             properly
  //           </p>
  //           {installEmusPageArray.map((item, i) => {
  //             if (item.status == false) {
  //               return;
  //             }
  //             if (item.id == 'srm') {
  //               return;
  //             }
  //             return (
  //               <div data-col-sm="4" className="h5">
  //                 {item.name} -
  //                 {item.installed ? (
  //                   <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
  //                 ) : (
  //                   <Img src={iconDanger} css="icon icon--xs" alt="KO" />
  //                 )}{' '}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </CardSettings>,
  //     ],
  //   });
  // }, [installEmusPage]);

  //We check if everything installed
  useEffect(() => {
    checkInstallation();
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
                    Please check if all your selected emulators got installed
                    properly
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
            <Card css="is-selected">
              <div className="container--grid">
                <div data-col-sm="6">
                  <span className="h2">Steam Input Profiles </span>
                  <p className="lead">
                    You can use Steam Deck's L4, L5, R4, R5 triggers to control
                    some emulators hotkeys. Just select the right EmuDeck
                    template for the system you want. <br />
                    <strong>
                      Do this for every 3DS, WiiU or Playstation 1 & 2 game.
                    </strong>
                  </p>
                </div>
                <div data-col-sm="6">
                  <img src="https://www.emudeck.com/img/citra1.png" alt="bg" />
                </div>
              </div>
            </Card>
          </div>
        )}
        <br />
        {disabledNext == true && (
          <>
            <ProgressBar css="progress--success" value={percentage} max={100} />
            <span className="h5">
              EmuDeck wouldn't be possible without all these open-source
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
