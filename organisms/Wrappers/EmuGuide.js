import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import EmuTable from 'components/organisms/EmuTable/EmuTable.js';

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
  } = props;

  let img;

  switch (emuData.id) {
    case 'ra':
      img = imgra;
      break;
    case 'dolphin':
      img = imgdolphin;
      break;
    case 'primehacks':
      img = imgprimehacks;
      break;
    case 'ppsspp':
      img = imgppsspp;
      break;
    case 'duckstation':
      img = imgduckstation;
      break;
    case 'citra':
      img = imgcitra;
      break;
    case 'pcsx2':
      img = imgpcsx2;
      break;
    case 'rpcs3':
      img = imgrpcs3;
      break;
    case 'yuzu':
      img = imgyuzu;
      break;
    case 'ryujinx':
      img = imgryujinx;
      break;
    case 'cemu':
      img = imgcemu;
      break;
    case 'xemu':
      img = imgxemu;
      break;
    case 'mame':
      img = imgmame;
      break;
    case 'vita3k':
      img = imgvita3k;
      break;
    case 'scummvm':
      img = imgscummvm;
      break;
    case 'supermodelista':
      img = imgsupermodelista;
      break;
    default:
      img = imgdefault;
      break;
  }

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

  let biosHTML;

  if ((emuData.id = 'ra')) {
  }

  let biosName;
  const biosComponents = emuData.bios.map((item, i) => {
    switch (item) {
      case 'ps1':
        biosName = 'Playstation 1';
        break;
      case 'ps2':
        biosName = 'Playstation 1';
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

    biosCSS('ps1');

    return (
      <li>
        <Alert key={i} css={'alert--mini ' + biosCSS(item)}>
          {biosName} Bios {biosText(item)}
        </Alert>
      </li>
    );
  });

  biosHTML = <ul className="list-two-cols">{biosComponents}</ul>;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title={emuData.name} bold="guide" />
        <Main>
          {emuData.id && (
            <EmuTable
              img={img}
              emuData={emuData}
              bios={biosHTML}
              onChange={onChange}
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
