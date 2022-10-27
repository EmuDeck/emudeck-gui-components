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
  saveCommand,
  runCommand,
  data,
  counter,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { mode, debug, command, version, second, system, language } = state;

  return (
    <>
      {update == 'up-to-date' && (
        <div className="app">
          <Aside />
          <div className="wrapper">
            {second === true && (
              <Header title="Welcome back to" bold={`EmuDeck`} />
            )}
            {second === false && <Header title="Welcome to" bold={`EmuDeck`} />}
            <Main>
              {downloadComplete === null && (
                <>
                  <p className="h5">
                    Downloading Files. If this progress bar does not disappear
                    shortly, please restart the application.
                  </p>
                  <ProgressBar
                    css="progress--success"
                    value={counter}
                    max="100"
                  />
                </>
              )}
              {downloadComplete === true && (
                <>
                  {second === true && (
                    <p className="lead">
                      Select how you want to update your current
                      EmuDeck installation:
                    </p>
                  )}
                  {second === false && (
                    <p className="lead">
                      Select how you want to set up your device:
                    </p>
                  )}
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
                </>
              )}
              {alert && update == 'up-to-date' && downloadComplete && (
                <>
                  <br />
                  <div className="container--grid">
                    <div data-col-sm="10">
                      <Alert css="alert--warning">
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
              disabledNext={disabledNext}
              disabledBack={disabledBack}
            />
          </div>
        </div>
      )}

      {update == null && (
        <div className="app">
          <Aside />
          <div className="wrapper">
            <Header title="Checking for updates..." />
            <p className="h5">
              Please stand by while we check if there is a new version
              available.
              <br />
              If this message does not disappear shortly, please restart the
              application.
            </p>
            <ProgressBar css="progress--success" value={counter} max="100" />
          </div>
        </div>
      )}

      {update == 'updating' && (
        <div className="app">
          <Aside />
          <div className="wrapper">
            <Header title="🎉 Update found! 🎉" />
            <p className="h5">
              We found an update! EmuDeck will restart as soon as it
              finishes installing the latest update. Hold on tight. 
            </p>
            <ProgressBar css="progress--success" value={counter} max="100" />
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
