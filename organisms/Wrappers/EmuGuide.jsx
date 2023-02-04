import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';
import EmuTable from 'components/organisms/EmuTable/EmuTable';

import Notification from 'components/molecules/Notification/Notification';

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
  imgmgba,
  imgsrm,
  imgesde,
  imgrmg,
  imgscummvm,
  imgsupermodelista,
  imgmelonds,
} from 'components/utils/images/images';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form, Table, Alert } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

const ipcChannel = window.electron.ipcRenderer;
const EmuGuide = (props) => {
  const {
    disabledNext,
    disabledBack,
    onChange,
    onClick,
    onClickInstall,
    onClickUninstall,
    next,
    back,
    emuData,
    ps1,
    ps2,
    nswitch,
    segacd,
    saturn,
    dreamcast,
    nds,
    showNotification,
    textNotification,
    installEmus,
    disableResetButton,
    mode,
  } = props;
  const [stateImg, setStateImg] = useState({
    img: imgdefault,
  });
  const { img } = stateImg;

  const [statePage, setStatePage] = useState({
    disableInstallButton: false,
  });

  const { disableInstallButton } = statePage;

  useEffect(() => {
    switch (emuData.id) {
      case 'ra':
        setStateImg({ img: imgra });
        break;
      case 'dolphin':
        setStateImg({ img: imgdolphin });
        break;
      case 'primehacks':
        setStateImg({ img: imgprimehacks });
        break;
      case 'ppsspp':
        setStateImg({ img: imgppsspp });
        break;
      case 'duckstation':
        setStateImg({ img: imgduckstation });
        break;
      case 'melonds':
        setStateImg({ img: imgmelonds });
        break;
      case 'citra':
        setStateImg({ img: imgcitra });
        break;
      case 'pcsx2':
        setStateImg({ img: imgpcsx2 });
        break;
      case 'rpcs3':
        setStateImg({ img: imgrpcs3 });
        break;
      case 'yuzu':
        setStateImg({ img: imgyuzu });
        break;
      case 'ryujinx':
        setStateImg({ img: imgryujinx });
        break;
      case 'cemu':
        setStateImg({ img: imgcemu });
        break;
      case 'xemu':
        setStateImg({ img: imgxemu });
        break;
      case 'mame':
        setStateImg({ img: imgmame });
        break;
      case 'vita3k':
        setStateImg({ img: imgvita3k });
        break;
      case 'scummvm':
        setStateImg({ img: imgscummvm });
        break;
      case 'supermodelista':
        setStateImg({ img: imgsupermodelista });
        break;
      case 'xenia':
        setStateImg({ img: imgxenia });
        break;
      case 'mgba':
        setStateImg({ img: imgmgba });
        break;
      case 'srm':
        setStateImg({ img: imgsrm });
        break;
      case 'esde':
        setStateImg({ img: imgesde });
        break;
      case 'rmg':
        setStateImg({ img: imgrmg });
        break;
      default:
        setStateImg({ img: imgdefault });
        break;
    }
  }, [emuData]);

  useEffect(() => {
    checkInstallation(installEmus);
  }, [installEmus]);

  const checkInstallation = (emulator) => {
    console.log(`Checking ${emulator.name} status`);
    const name = emulator.name;

    ipcChannel.sendMessage('emudeck', [
      `${name}_IsInstalled|||${name}_IsInstalled`,
    ]);
    ipcChannel.once(`${name}_IsInstalled`, (status) => {
      console.log(`${name}_IsInstalled`);
      status = status.stdout;
      console.log({ status });
      status = status.replace('\n', '');

      if (status.includes('true')) {
        setStatePage({
          ...statePage,
          disableInstallButton: true,
        });
      } else {
        setStatePage({
          ...statePage,
          disableInstallButton: false,
        });
      }
    });
  };

  const biosText = (name) => {
    name = props[`${name}`];
    switch (name) {
      case true:
        return 'detected!';
        break;
      case false:
        return 'missing!';
        break;
      case null:
        return '...searching...';
        break;
      default:
        return '...searching...';
        break;
    }
  };

  const biosCSS = (name) => {
    name = props[`${name}`];
    //console.log({ name });
    switch (name) {
      case true:
        return 'alert--success ';
        break;
      case false:
        return 'alert--danger ';
        break;
      case null:
        return ' null';
        break;
      default:
        return ' nothing';
        break;
    }
  };

  let biosName;
  const biosComponents = emuData.bios.map((item, i) => {
    switch (item) {
      case 'ps1':
        biosName = 'Playstation 1';
        break;
      case 'ps2':
        biosName = 'Playstation 2';
        break;
      case 'segacd':
        biosName = 'SegaCD';
        break;
      case 'saturn':
        biosName = 'Saturn';
        break;
      case 'dreamcast':
        biosName = 'Dreamcast';
        break;
      case 'nds':
        biosName = 'Nintendo DS';
        break;
      case 'nswitch':
        biosName = 'Nintendo Switch';
        break;
      default:
        biosName = 'System';
        break;
    }

    return (
      <li key={i}>
        <Alert css={'alert--mini ' + biosCSS(item)}>
          {biosName} Bios {item} {biosText(item)}
        </Alert>
      </li>
    );
  });

  let biosHTML;
  biosHTML = <ul className="list-two-cols">{biosComponents}</ul>;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title={emuData.name} />
        <Notification css={showNotification ? 'is-animated' : 'nope'}>
          {textNotification}
        </Notification>
        <Main>
          {emuData.id && (
            <EmuTable
              mode={mode}
              img={img}
              emuData={emuData}
              bios={biosHTML}
              onChange={onChange}
              onClick={onClick}
              onClickInstall={onClickInstall}
              onClickUninstall={onClickUninstall}
              disableInstallButton={disableInstallButton}
              disableResetButton={disableResetButton}
              installEmus={Object.values(installEmus)}
            />
          )}
        </Main>
        <Footer
          next={false}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default EmuGuide;
