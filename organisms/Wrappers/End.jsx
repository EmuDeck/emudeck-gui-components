import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
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
  imgprimehacks,
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
const End = ({
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
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage, installEmus } = state;

  const [statePage, setStatePage] = useState({
    installEmusStart: installEmus,
    installEmusPage: installEmus,
    statusSlide: [],
  });

  const { statusSlide, installEmusPage, installEmusStart } = statePage;

  const installEmusPageArray = Object.values(installEmusPage);
  const installEmusStartArray = Object.values(installEmusStart);
  let installEmusUpdate;

  const checkInstallation = (emulator) => {
    //console.log({ emulator });
    //console.log(`Checking ${emulator.name} status`);
    const name = emulator.name;

    ipcChannel.sendMessage('emudeck', [
      `${name}_IsInstalled|||${name}_IsInstalled`,
    ]);
    ipcChannel.once(`${name}_IsInstalled`, (status) => {
      console.log(`${name}_IsInstalled`);
      status = status.stdout;
      //console.log({ status });
      status = status.replace('\n', '');
      //console.log({ status });
      //console.log({ installEmusUpdate });
      if (status.includes('true')) {
        installEmusUpdate = {
          ...installEmusUpdate,
          [emulator.id]: {
            id: emulator.id,
            status: emulator.status,
            installed: true,
            name: emulator.name,
          },
        };
        //return true;
      } else {
        installEmusUpdate = {
          ...installEmusUpdate,
          [emulator.id]: {
            id: emulator.id,
            status: emulator.status,
            installed: false,
            name: emulator.name,
          },
        };
        // return true;
      }
      setStatePage({
        ...statePage,
        installEmusPage: installEmusUpdate,
      });
      console.log({ installEmusUpdate });
      console.log({ installEmusPage });
    });
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
  //           <p class="lead">
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
    installEmusStartArray.forEach((item) => {
      checkInstallation(installEmus[item.id]);
    });
  }, [disabledNext]);

  return (
    <>
      
      {disabledNext == true && (
        <>
          <Header title="We are completing your" bold="installation..." />
          <p className="lead">{message}...</p>
        </>
      )}
      {disabledNext == false && (
        <Header title="Installation" bold="complete!" />
      )}

      <Main>
        {disabledNext == false && (
          <div className="tips">
            <Card css="is-selected">
              <div className="container--grid">
                <span data-col-sm="12" className="h2">
                  Post Installation Status
                </span>
                <p class="lead">
                  Please check if all your selected emulators got installed
                  properly
                </p>
                {installEmusPageArray.map((item, i) => {
                  if (item.status == false) {
                    return;
                  }
                  if (item.id == 'srm') {
                    return;
                  }
                  return (
                    <div data-col-sm="4" className="h5">
                      {item.name} -
                      {item.installed ? (
                        <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                      ) : (
                        <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                      )}{' '}
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card css="is-selected">
              <div className="container--grid">
                <div data-col-sm="6">
                  <span className="h2">Adding games</span>
                  <p className="lead">
                    Copy your roms to your {storage}, you'll see a folder for
                    each system on the Emulation/roms folder.
                    <br />
                    Once you've copied your games click on the "Launch Steam Rom
                    Manager" button
                  </p>
                </div>
                <div data-col-sm="6">
                  <img src="https://www.emudeck.com/img/ss1.png" alt="bg" />
                </div>
              </div>
            </Card>
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
            <Card css="is-selected">
              <div className="container--grid">
                <div data-col-sm="6">
                  <span className="h2">Two Frontends </span>
                  <p className="lead">
                    You can either use Steam Rom Manager to add yor games or use
                    EmulationStation DE <br />
                    If you have a small library we recomend using Steam Rom
                    Manager, if you have thousands of games EmulationStation DE
                    will work better.
                    <br />
                    If you only want to use EmulationStation DE, disable all the
                    other parsers when you launch Steam Rom Manager
                  </p>
                </div>
                <div data-col-sm="6">
                  <img src="https://www.emudeck.com/img/ss1.png" alt="bg" />
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
                <img src={imgprimehacks} alt="alt" />
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
      <footer className="footer">
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Go Back"
          disabled={false}
          onClick={onClickLog}
        >
          Watch Log
        </BtnSimple>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Go Back"
          disabled={disabledNext && 'true'}
          onClick={onClose}
        >
          Exit
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
            ></path>
          </svg>
        </BtnSimple>

        {isGameMode == false && (
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Go Next"
            disabled={disabledNext && 'true'}
            onClick={onClick}
          >
            Launch Steam Rom Manager
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
              ></path>
            </svg>
          </BtnSimple>
        )}
      </footer>
    </>
  );
};

export default End;
