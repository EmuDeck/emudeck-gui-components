import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import CHDToolImg from 'assets/powertools.png';
const ipcChannel = window.electron.ipcRenderer;
const CHDTool = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  hasSudo,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, CHDTool } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="EmuDeck" bold="Compression Tool" />
        <Main>
          <p className="lead">
            The compression Tool is a script that looks through certain rom
            folders and can compress games by up to 70% of their original size
            using CHD and RVZ formats.
          </p>
          <p>
            Once a disc is successfully converted, the original will be deleted from disk. 
            Please run Steam Rom Manager again afterwards to update
            Steam with your new files.
          </p>
          <p>
            The tool will find .iso, .gdi, .cue/bin, .gcm roms and will convert
            them to either CHD or RVZ files.
          </p>
          <p>
            Important: CHD made from cue / bin will NOT work for Dreamcast. GDI is required.
            if you have both CUE and GDI for your Dreamcast games, please remove any left
            over cue files after parsing, or Steam Rom Manager will pick non-existant games.
          </p>

          <p>
            <strong>CHD format:</strong>
            <br />
            Used to compress Dreamcast, PSX, PS2, Sega/MegaCD, 3DO, Saturn, 
            TurboGraphix/PCEngineCD, pcfx, Amigacd32, NeoGeoCD
          </p>

          <p>
            <strong>RVZ format:</strong>
            <br />
            For your GameCube and Wii Games.
          </p>

          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Install CHDTool"
            onClick={() => onClick()}
            disabled={disabledNext && 'true'}
          >
            Run the Compression Tool
          </BtnSimple>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default CHDTool;
