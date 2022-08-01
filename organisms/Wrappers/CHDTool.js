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
        <Header title="CHDTool" bold="Script" />
        <Main>
          <p className="lead">
            CHDTool is a script that compresses all types of BIN, CUE or GDI files to the superior CHD format.

          </p>
          <p>
            This tool searches in all your romns subfolders and reemplaces your files with new CHD files. The CHD format is a lossless compression format that can save you about 65% space.

          </p>
          <p>
          Valid for PSX, PS2, SegaCD and Dreamcast games
          </p>
          <br />
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Install CHDTool"
            onClick={()=> onClick() }
            disabled={disabledNext && 'true'}
          >
            Run CHDTool
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
