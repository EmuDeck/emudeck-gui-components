import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import ar43 from 'assets/ar43snes.png';
import ar87 from 'assets/ar87snes.png';
import ar32 from 'assets/ar32snes.png';

const AspectRatioSNES = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure Aspect Ratio for" bold="Super NES" />
          <Main>
            <p className="lead">
              Chose your aspect ratio for Super Nintendo games.
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={ar87}
                  className={ar.snes != '87' && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={ar43}
                  className={ar.snes != '43' && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={ar32}
                  className={ar.snes != '32' && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick('87')}>
                    <Card css={ar.snes == 87 && 'is-selected'}>
                      <span className="h3">8:7</span>
                      <p>The real SNES Resolution</p>
                    </Card>
                  </li>
                  <li onClick={() => onClick('43')}>
                    <Card css={ar.snes == 43 && 'is-selected'}>
                      <span className="h3">4:3</span>
                      <p>Default Original</p>
                    </Card>
                  </li>
                  <li onClick={() => onClick('32')}>
                    <Card css={ar.snes == 32 && 'is-selected'}>
                      <span className="h3">3:2</span>
                      <p>Not recommended, a lot of distortion</p>
                    </Card>
                  </li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="aspect-ratio-3d"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default AspectRatioSNES;
