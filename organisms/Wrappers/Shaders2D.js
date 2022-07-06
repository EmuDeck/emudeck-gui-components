import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import lcdon from 'assets/classic-shader-on.png';
import lcdoff from 'assets/classic-shader-off.png';

const Shaders2D = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure LCD Shader for" bold="Classic 2d Games" />
          <Main>
            <p className="lead">
              The LCD Shader gives the handheld systems like MasterSystem,
              Genesis SuperNintendo, etc a faux retro CRT vibe.
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={lcdoff}
                  className={shaders.classic == true && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={lcdon}
                  className={shaders.classic == false && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick(false)}>
                    <Card css={shaders.classic == false && 'is-selected'}>
                      <span className="h3">Off</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick(true)}>
                    <Card css={shaders.classic == true && 'is-selected'}>
                      <span className="h3">On</span>
                    </Card>
                  </li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="pegasus-theme"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default Shaders2D;
