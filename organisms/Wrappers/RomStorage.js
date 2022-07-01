import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';
import imgSD from 'assets/sdcard.png';
import imgInternal from 'assets/internal.png';

const RomStorage = ({
  onClick,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage, SDID } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Choose your" bold="ROMs Storage" />
          <Main>
            <p className="lead">Where do you want to store your roms?</p>
            <div className="cards">
              <Card
                css={storage == 'SD-Card' && 'is-selected'}
                onClick={() => onClick('SD-Card')}
              >
                <img src={imgSD} width="100" alt="Background" />
                <span className="h6">SD Card</span>
              </Card>

              <Card
                css={storage == 'Internal Storage' && 'is-selected'}
                onClick={() => onClick('Internal Storage')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h6">Internal Storage</span>
              </Card>
            </div>
          </Main>
          <Footer
            next={next}
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default RomStorage;
