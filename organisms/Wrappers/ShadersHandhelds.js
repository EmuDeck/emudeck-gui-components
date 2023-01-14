import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import lcdonH from 'assets/lcdon.png';
import lcdoffH from 'assets/lcdoff.png';

const ShadersHandhelds = ({
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
          <Header title="Configure LCD Shader for" bold="Handheld Systems" />
          <Main>
            <p className="lead">
              The LCD Shader simulates the old LCD Matrix screens of handheld
              systems.
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={lcdoffH}
                  className={shaders.handhelds == true && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={lcdonH}
                  className={shaders.handhelds == false && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick(false)}>
                    <Card css={shaders.handhelds == false && 'is-selected'}>
                      <span className="h4">Off</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick(true)}>
                    <Card css={shaders.handhelds == true && 'is-selected'}>
                      <span className="h4">On</span>
                    </Card>
                  </li>
                </ul>
              </div>
              <div className="selector-menu__details">
                <p className="lead">Systems</p>
                <ul>
                  <li>GameBoy</li>
                  <li>GameBoy Color</li>
                  <li>GameGear</li>
                  <li>NeoGeo Pocket</li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="shaders-classic"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default ShadersHandhelds;
