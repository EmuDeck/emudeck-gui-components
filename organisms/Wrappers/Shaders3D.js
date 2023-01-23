import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import lcdon from 'assets/classic-3d-shader-on.png';
import lcdoff from 'assets/classic-3d-shader-off.png';

const Shaders3D = ({
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
          <Header title="Configure CRT Shader for" bold="Classic 3D Games" />
          <p className="lead">
            The CRT Shader gives your classic systems a faux retro CRT vibe.
          </p>
          <Main>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={lcdoff}
                  className={shaders.classic3d == true && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={lcdon}
                  className={shaders.classic3d == false && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick(false)}>
                    <Card css={shaders.classic3d == false && 'is-selected'}>
                      <span className="h4">Off</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick(true)}>
                    <Card css={shaders.classic3d == true && 'is-selected'}>
                      <span className="h4">On</span>
                    </Card>
                  </li>
                </ul>
              </div>
              <div className="selector-menu__details">
                <p className="lead">Affected Systems</p>
                <ul>
                  <li>Playstation 1</li>
                  <li>Dreamcast</li>
                  <li>Saturn</li>
                  <li>Nintendo 64</li>
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

export default Shaders3D;
