import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import { Iframe } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import lcdon from 'assets/classic-shader-on.png';
import lcdoff from 'assets/classic-shader-off.png';

const AutoSave = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { autosave } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure Auto Save" />
          <Main>
            <p className="lead">
              If enabled, your game state will be saved on exit and automaticaly
              loaded when opened again.
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <div
                  className={`simple-carousel ${
                    autosave == true && 'is-hidden'
                  }`}
                >
                  <Iframe
                    src={`https://www.youtube-nocookie.com/embed/kpIJnIBEq9o?autoplay=1&playlist=kpIJnIBEq9o&loop=1&controls=0&mute=1&rel=0&modestbranding=1`}
                  />
                </div>
                <div
                  className={`simple-carousel ${
                    autosave == false && 'is-hidden'
                  }`}
                >
                  <Iframe
                    src={`https://www.youtube-nocookie.com/embed/2EV_zU-tNv4?autoplay=1&playlist=2EV_zU-tNv4&loop=1&controls=0&mute=1&rel=0&modestbranding=1`}
                  />
                </div>
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick(false)}>
                    <Card css={autosave == false && 'is-selected'}>
                      <span className="h3">Off</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick(true)}>
                    <Card css={autosave == true && 'is-selected'}>
                      <span className="h3">On</span>
                    </Card>
                  </li>
                </ul>
              </div>
              <div className="selector-menu__details">
                <p className="lead">Affected Systems</p>
                <ul>
                  <li>Atari</li>
                  <li>GameBoy & GameBoy Color</li>
                  <li>GameBoy Advance</li>
                  <li>Super Nintendo</li>
                  <li>Nintendo NES</li>
                  <li>Master System</li>
                  <li>Genesis</li>
                  <li>SegaCD</li>
                  <li>Sega32x</li>
                  <li>GameGear</li>
                  <li>NeoGeo Pocket</li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="ra-achievements"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default AutoSave;
