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
  next,
  back,
  backText,
  alert,
  saveCommand,
  runCommand,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { mode, debug, command, version } = state;

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
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Welcome to" bold={`Emudeck`} />
        <Main>
          {downloadComplete === false && (
            <>
              <p className="h5">Downloading Files. If this progress bar won't disappear after a couple of minutes please restart the app</p>
              <ProgressBar css="progress--success" value={counter} max="100" />
            </>
          )}
          {downloadComplete === true && (
            <>

              <p className="lead">
                Please select how do you want EmuDeck to configure your device:
              </p>

              <div className="container--grid">
                <div data-col-sm="5">
                  <Card
                    css={mode == 'easy' && 'is-selected'}
                    onClick={() => onClick('easy')}
                  >
                    <span className="h3">Easy mode</span>
                    <p>
                      This is a 100% automatic mode. We will configure your
                      device with the recommended settings so you can start
                      playing right away.
                    </p>
                  </Card>
                </div>

                <div data-col-sm="5">
                  <Card
                    css={mode == 'expert' && 'is-selected'}
                    onClick={() => onClick('expert')}
                  >
                    <span className="h3">Custom mode</span>
                    <p>
                      This mode gives you a bit more of control on how EmuDeck
                      configures your system. You will be able to configure Aspect
                      Ratios, Bezels, Filters, RetroAchievments, Emulators, ESDE themes and Cloud Game Saving.
                    </p>
                  </Card>
                </div>
              </div>
            </>
          )}
          {alert && (
            <>
              <br/>
              <div className="container--grid">
                <div data-col-sm="10">
                  <Alert css="alert--warning">{alert}</Alert>
                </div>
              </div>
            </>
          )}

        </Main>
        <Footer
          back={back}
          backText={backText}
          next={next}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default Welcome;
