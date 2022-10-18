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
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { mode, debug, command, version, second, system, language } = state;

  //const content = require(`renderer/translations/${language}.json`);

  const debugMode = (debug) => {
    setState({ ...state, debug: debug });
  };

  //Download files
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 110) {
          prevCounter = -10;
        }
        return prevCounter + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
                    Downloading Files. If this progress bar won't disappear
                    after a couple of minutes please restart the app
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
                      Please select how do you want to update your current
                      EmuDeck's installation:
                    </p>
                  )}
                  {second === false && (
                    <p className="lead">
                      Please select how do you want to set up your device:
                    </p>
                  )}
                  <div className="container--grid">
                    <div data-col-sm="5">
                      <Card
                        css={mode == 'easy' && 'is-selected'}
                        onClick={() => onClick('easy')}
                      >
                        <span className="h3">
                          {second === false && 'Easy mode'}
                          {second === true && 'Quick Update'}
                        </span>
                        <p>
                          {second === false &&
                            'This is a 100% automatic mode. We will configure your device with the recommended settings so you can start playing right away.'}
                          {second === true &&
                            "This mode will update EmuDeck in one click, you will retain your EmuDeck's customization if any where made by you at any time. If you made any customizations outside of EmuDeck those will be overwritten. Any new settings or emulators will be applied by default."}
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
                            'This mode gives you a bit more of control on how EmuDeck configures your system. You will be able to configure Aspect Ratios, Bezels, Filters, RetroAchievments, Emulators, ESDE themes and Cloud Game Saving.'}
                          {second === true &&
                            'This mode will allow you to update your EmuDeck installation, and keep any customizations made outside of EmuDeck and customize new settings or emulators if available.'}
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
              If this message doesn't disappear after a while please restart the
              app.
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
              We are downloading the update, EmuDeck will restart as soon as it
              finishes
            </p>
            <ProgressBar css="progress--success" value={counter} max="100" />
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
