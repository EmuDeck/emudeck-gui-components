import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import CardSettings from 'components/molecules/CardSettings/CardSettings';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';
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
  imgmgba,
  imgsrm,
  imgrmg,
  imgscummvm,
  imgsupermodelista,
  imgesde,
  imgmelonds,
} from 'components/utils/images/images';

function UpdateConfigs({
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  hasSudo,
  nextText,
  updates,
  onClick,
}) {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, UpdateConfigs } = state;

  return (
    <>
      <p className="lead">
        You can update your configurations with just a click without
        reinstalling EmuDeck.
      </p>
      <Main>
        {updates && (
          <div className="container--grid">
            {Object.keys(updates).map((item) => {
              let img;
              let name;
              let code;
              switch (item) {
                case 'ra':
                  img = imgra;
                  name = 'RetroArch';
                  code = 'RetroArch';
                  break;
                case 'dolphin':
                  img = imgdolphin;
                  name = 'Dolphin';
                  code = 'Dolphin';
                  break;
                case 'primehack':
                  img = imgprimehack;
                  name = 'Primehack';
                  code = 'Primehack';
                  break;
                case 'ppsspp':
                  img = imgppsspp;
                  name = 'PPSSPP';
                  code = 'PPSSPP';
                  break;
                case 'duckstation':
                  img = imgduckstation;
                  name = 'Duckstation';
                  code = 'Duckstation';
                  break;
                case 'melonds':
                  img = imgmelonds;
                  name = 'melonDS';
                  code = 'melonDS';
                  break;
                case 'citra':
                  img = imgcitra;
                  name = 'Citra';
                  code = 'Citra';
                  break;
                case 'pcsx2':
                  img = imgpcsx2;
                  name = 'PCSX2';
                  code = 'PCSX2QC';
                  break;
                case 'rpcs3':
                  img = imgrpcs3;
                  name = 'RPCS3';
                  code = 'RPCS3';
                  break;
                case 'yuzu':
                  img = imgyuzu;
                  name = 'Yuzu';
                  code = 'Yuzu';
                  break;
                case 'ryujinx':
                  img = imgryujinx;
                  name = 'Ryujinx';
                  code = 'Ryujinx';
                  break;
                case 'xemu':
                  img = imgxemu;
                  name = 'Xemu';
                  code = 'Xemu';
                  break;
                case 'cemu':
                  img = imgcemu;
                  name = 'Cemu';
                  code = 'Cemu';
                  break;
                case 'srm':
                  img = imgsrm;
                  name = 'Steam Rom Manager';
                  code = 'SRM';
                  break;
                case 'rmg':
                  img = imgrmg;
                  name = 'RMG';
                  code = 'RMG';
                  break;
                case 'esde':
                  img = imgesde;
                  name = 'Emulation Station DE';
                  code = 'ESDE';
                  break;
                case 'mame':
                  img = imgmame;
                  name = 'MAME';
                  code = 'MAME';
                  break;
                case 'vita3k':
                  img = imgvita3k;
                  name = 'Vita3k';
                  code = 'Vita3k';
                  break;
                case 'scummvm':
                  img = imgscummvm;
                  name = 'ScummVM';
                  code = 'ScummVM';
                  break;
                case 'xenia':
                  img = imgxenia;
                  name = 'Xenia';
                  code = 'Xenia';
                  break;
                case 'mgba':
                  img = imgmgba;
                  name = 'mGBA';
                  code = 'mGBA';
                  break;

                default:
                  img = imgdefault;
                  name = 'Undefined';
              }

              return (
                <div data-col-sm="2">
                  <CardSettings
                    key={name}
                    icon={img}
                    css="is-highlighted"
                    btnCSS="btn-simple--1"
                    iconSize="md"
                    title={`${name}`}
                    button="Update"
                    onClick={() => onClick(code, name, item)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Main>
    </>
  );
}

export default UpdateConfigs;
