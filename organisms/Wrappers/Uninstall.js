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

import Uninstall from 'assets/Uninstall.png';

const Uninstall = ({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, Uninstall } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Uninstall" bold="Emudeck" />
        <Main>
          <p className="lead">
            Do you really want to uninstall Emudek? If you are having issues, installing EmuDeck a second time usually solves them, if you are still having issues please go to our Discord or Reddit so we can help you.
          </p>
          <br />
          <div>

          <a href="https://discord.gg/b9F7GpXtFP" aria-label="Go Next" class="btn-simple btn-simple--1" target="_blank">Go to Discord</a>
          <a href="https://www.reddit.com/r/EmuDeck/" aria-label="Go Next" class="btn-simple btn-simple--1" target="_blank">Go to Reddit</a>

          </div>
          <p className="lead">
            Thanks, but I don't need help, I want to uninstall.
          </p>
          <BtnSimple
            css="btn-simple--3"
            type="button"
            onClick={() => onClick()}
            aria="Go Next"
          >
            Uninstall EmuDeck
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

export default Uninstall;
