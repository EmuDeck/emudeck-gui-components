import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

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
    <>
      <p className="lead">
        Uninstalling EmuDeck should only be used if you are intending on
        removing EmuDeck from your system. If you are having issues, run a
        Custom Reset, troubleshoot the specific tool or emulator, or visit EmuDeck's Discord or Reddit for additional support.
      </p>
      <Main>
        <br />
        <div>
          <a
            href="https://discord.gg/b9F7GpXtFP"
            aria-label="Go Next"
            className="btn-simple btn-simple--1"
            target="_blank"
          >
            Our Discord
          </a>
          <a
            href="https://www.reddit.com/r/EmuDeck/"
            aria-label="Go Next"
            className="btn-simple btn-simple--1"
            target="_blank"
          >
            Our Reddit
          </a>
        </div>
        <p className="lead">
          I know what I am doing, I would like to uninstall EmuDeck.
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
    </>
  );
};

export default Uninstall;
