import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import { BtnSimple } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card.js';

const Welcome = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { mode } = state;
  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Welcome to" bold="EmuDeck" />
        <Main>
          <p className="lead">
            Please select how do you want EmuDeck to configure your device:
          </p>
          <p>
            <span className="h4"></span>
          </p>

          {downloadComplete === false && (
            <>
              <p>Downloading Files</p>
            </>
          )}
          {downloadComplete === true && (
            <div className="container--grid">
              <div data-col-sm="5">
                <Card
                  css={mode == 'easy' && 'is-selected'}
                  onClick={() => onClick('easy')}
                >
                  <span className="h3">Easy mode</span>
                  <p>
                    This is a 100% automatic mode. We will configure your device
                    with the recommended settings so you can start playing right
                    away.
                  </p>
                  <BtnSimple css="btn-simple--1" type="button" aria="Go Next">
                    Select
                  </BtnSimple>
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
                    configures your system. You will be able to select Aspect
                    Ratios, Bezels, Emulators, etc.
                  </p>
                  <BtnSimple css="btn-simple--1" type="button" aria="Go Next">
                    Select
                  </BtnSimple>
                </Card>
              </div>
            </div>
          )}
        </Main>
        <Footer
          back={back}
          next={next}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default Welcome;
