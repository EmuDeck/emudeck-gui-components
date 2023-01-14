import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import ar43gc from 'assets/ar43gc.png';
import ar169gc from 'assets/ar169gc.png';

const AspectRatioDolphin = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { ar, overwriteConfigEmus } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure Aspect Ratio for the" bold="GameCube" />
          <Main>
            <p className="lead">
              Select the aspect ratio for the GameCube. You can change this
              setting in game anytime by pressing Start and DPad Right.
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={ar169gc}
                  className={ar.dolphin != '169' && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={ar43gc}
                  className={ar.dolphin != '43' && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick('43')}>
                    <Card css={ar.dolphin == 43 && 'is-selected'}>
                      <span className="h4">4:3</span>
                      <p>Original Aspect Ratio</p>
                    </Card>
                  </li>
                  <li onClick={() => onClick('169')}>
                    <Card css={ar.dolphin == 169 && 'is-selected'}>
                      <span className="h4">16:9</span>
                      <p>
                        Widescreen using Widescreen hacks
                        <br />
                        (Expect some graphical glitches.)
                      </p>
                    </Card>
                  </li>
                </ul>
              </div>
              <div className="selector-menu__details">
                <p className="lead">Systems</p>
                <ul>
                  <li>Gamecube</li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next={
              overwriteConfigEmus.ra.status == true
                ? 'shaders-handhelds'
                : 'pegasus-theme'
            }
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default AspectRatioDolphin;
