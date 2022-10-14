import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import EmuTable from 'components/organisms/EmuTable/EmuTable.js';

import Notification from 'components/molecules/Notification/Notification.js';

import imgdefault from 'assets/1x1.png';
import imgra from 'assets/emulators/ra.png';
import imgdolphin from 'assets/emulators/dolphin.png';
import imgprimehacks from 'assets/emulators/primehacks.png';
import imgppsspp from 'assets/emulators/ppsspp.png';
import imgduckstation from 'assets/emulators/duckstation.png';
import imgcitra from 'assets/emulators/citra.png';
import imgpcsx2 from 'assets/emulators/pcsx2.png';
import imgrpcs3 from 'assets/emulators/rpcs3.png';
import imgyuzu from 'assets/emulators/yuzu.png';
import imgryujinx from 'assets/emulators/ryujinx.png';
import imgcemu from 'assets/emulators/cemu.png';
import imgxemu from 'assets/emulators/xemu.png';
import imgmame from 'assets/emulators/mame.png';
import imgvita3k from 'assets/emulators/vita3k.png';
import imgxenia from 'assets/emulators/xenia.png';
import imgscummvm from 'assets/emulators/scummvm.png';
import imgsupermodelista from 'assets/emulators/supermodelista.png';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form, Table, Alert } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

const ipcChannel = window.electron.ipcRenderer;
const EmuGuide = (props) => {
  const {
    disabledNext,
    disabledBack,
    onChange,
    onClick,
    onClickInstall,
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
    disableInstallButton,
    disableResetButton,
  } = props;

  // const imgdefault =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/1x1.png';
  // const imgra =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/ra.png';
  // const imgdolphin =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/dolphin.png';
  // const imgprimehacks =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/primehacks.png';
  // const imgppsspp =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/ppsspp.png';
  // const imgduckstation =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/duckstation.png';
  // const imgcitra =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/citra.png';
  // const imgpcsx2 =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/pcsx2.png';
  // const imgrpcs3 =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/rpcs3.png';
  // const imgyuzu =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/yuzu.png';
  // const imgryujinx =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/ryujinx.png';
  // const imgcemu =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/cemu.png';
  // const imgxemu =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/xemu.png';
  // const imgmame =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/mame.png';
  // const imgvita3k =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/vita3k.png';
  // const imgscummvm =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/scummvm.png';
  // const imgsupermodelista =
  //   'https://raw.githubusercontent.com/EmuDeck/emudeck-electron/main/src/assets/emulators/supermodelista.png';

  const [stateImg, setStateImg] = useState({
    img: imgdefault,
  });
  const { img } = stateImg;

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
      default:
        setStateImg({ img: imgdefault });
        break;
    }
  }, [emuData]);

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
        <Header title={emuData.name} bold="guide" />
        <Notification css={showNotification ? 'is-animated' : 'nope'}>
          {textNotification}
        </Notification>
        <Main>
          {emuData.id && (
            <EmuTable
              img={img}
              emuData={emuData}
              bios={biosHTML}
              onChange={onChange}
              onClick={onClick}
              onClickInstall={onClickInstall}
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
