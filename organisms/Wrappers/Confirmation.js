import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import { Img } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import imgYES from 'assets/HomebrewGamesYES.png';
import imgNO from 'assets/HomebrewGamesNO.png';
import { iconSuccess, iconDanger } from 'components/utils/images/images.js';
const Confirmation = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const {
    mode,
    storagePath,
    installEmus,
    overwriteConfigEmus,
    autosave,
    achievements,
    bezels,
    ar,
    shaders,
    theme,
    homebrewGames,
  } = state;
  const installEmusArray = Object.values(installEmus);
  const overwriteConfigEmusArray = Object.values(overwriteConfigEmus);
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Here's what we'll do" />
          <Main>
            <div className="container--grid">
              <div data-col-sm="3">
                <span class="h5">We will install:</span>
                <ul>
                  {installEmusArray.map((item) => {
                    return (
                      <li>
                        {item.status ? (
                          <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                        ) : (
                          <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                        )}{' '}
                        - {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div data-col-sm="3">
                <span class="h5">We will configure:</span>
                <ul>
                  {overwriteConfigEmusArray.map((item) => {
                    return (
                      <li>
                        {item.status ? (
                          <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                        ) : (
                          <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                        )}{' '}
                        - {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div data-col-sm="3">
                <span class="h5">Customization:</span>
                {/*
                achievements,
                bezels,
                ar,
                shaders,
                theme,
                homebrewGames,

                */}
                <ul>
                  <li>
                    {autosave ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - AutoSave{' '}
                  </li>
                  <li>
                    {achievements.name ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - RetroAchievements
                  </li>
                  <li>
                    {bezels ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - Bezels
                  </li>
                  <li>
                    {shaders.handhelds ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - Handhelds Shader:
                  </li>
                  <li>
                    {shaders.classic ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - Classic 2D Shader
                  </li>
                  <li>
                    {shaders.classic3d ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - Classic 3D Shader
                  </li>
                  <li>
                    {homebrewGames ? (
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    ) : (
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    )}{' '}
                    - HomeBrew Games
                  </li>
                  <li>EmulationStation DE Theme: {theme}</li>
                  <li>
                    Sega Classic AR: <strong>{ar.sega}</strong>
                  </li>
                  <li>
                    Nintendo Classic AR: <strong>{ar.snes}</strong>
                  </li>
                  <li>
                    Classic 3D Games AR: <strong>{ar.classic3d}</strong>
                  </li>
                  <li>
                    Gamecube AR: <strong>{ar.dolphin}</strong>
                  </li>
                </ul>
              </div>
              <div data-col-sm="3">
                <span class="h5">Installation Path:</span>
                <ul>
                  <li>
                    {storagePath == '$HOME' ? 'User Home Folder' : storagePath}
                  </li>
                </ul>
              </div>
            </div>
          </Main>
          <Footer
            next="confirmation"
            nextText="Finish"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default Confirmation;
