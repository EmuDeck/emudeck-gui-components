import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import { BtnSimple, ProgressBar } from 'getbasecore/Atoms';
import { Alert } from 'getbasecore/Molecules';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

const Welcome = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  update,
  next,
  back,
  third,
  thirdText,
  fourthText,
  backText,
  alert,
  alertCSS,
  saveCommand,
  runCommand,
  data,
  counter,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { mode, debug, command, version, second, system, language, gamemode } =
    state;

  return (
    <>
      <div className="app">
        <Aside />
        <div className="wrapper">
          {second === true && (
            <Header title="Welcome back to" bold={`EmuDeck`} />
          )}
          {second === false && <Header title="Welcome to" bold={`EmuDeck`} />}
          {second === true && (
            <p className="lead">
              Select how you want to update your current EmuDeck installation:
            </p>
          )}
          {second === false && (
            <p className="lead">Select how you want to set up your device:</p>
          )}
          <Main>
            <div className="container--grid">
              <div data-col-sm="5">
                <Card
                  css={mode == 'easy' && 'is-selected'}
                  onClick={() => onClick('easy')}
                >
                  <span className="h3">
                    {second === false && 'Easy Mode'}
                    {second === true && 'Quick Update'}
                  </span>
                  <p>
                    {second === false &&
                      'This mode automatically installs and configures your device with our recommended settings so you can start playing right away.'}
                    {second === true &&
                      'This mode automatically updates EmuDeck in one click. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten.'}
                  </p>
                </Card>
              </div>

              <div data-col-sm="5">
                <Card
                  css={mode == 'expert' && 'is-selected'}
                  onClick={() => onClick('expert')}
                >
                  <span className="h3">
                    {second === false && 'Custom Mode'}
                    {second === true && 'Custom Update'}
                  </span>
                  <p>
                    {second === false &&
                      'This mode allows you to customize how EmuDeck installs to your system. Configure Aspect Ratios, Bezels, Filters, RetroAchievments, Emulators, EmulationStation-DE themes, and Cloud Saves.'}
                    {second === true &&
                      'This mode allows you to customize how EmuDeck updates. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten.'}
                  </p>
                </Card>
              </div>
            </div>

            {alert && (
              <>
                <br />
                <div className="container--grid">
                  <div data-col-sm="10">
                    <Alert css={alertCSS}>
                      <div dangerouslySetInnerHTML={{ __html: alert }}></div>
                    </Alert>
                  </div>
                </div>
              </>
            )}
          </Main>
          <Footer
            back={back}
            backText={backText}
            third={third}
            thirdText={thirdText}
            fourthText={fourthText}
            next={next}
            exit={gamemode}
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
