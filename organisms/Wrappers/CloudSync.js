import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import { BtnSimple } from 'getbasecore/Atoms';

import { Alert } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import cloudSyncOn from 'assets/CloudSync.png';
import cloudSyncOff from 'assets/CloudSync.png';

const CloudSync = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { cloudSync } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Sync your games on the " bold="cloud - Beta" />

        <Main>
          <p className="lead">
            Sync your games to the cloud, start on your PC and keep playing on
            the go on your Deck
          </p>
          <div className="container--grid">
            <div data-col-sm="6">
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Install SaveSync"
                onClick={() => onClick()}
                disabled={disabledNext && 'true'}
              >
                Install SaveSync
              </BtnSimple>
            </div>
            <div data-col-sm="6">
              <img src={cloudSyncOn} alt="bg" />
            </div>
          </div>
        </Main>
        <Footer
          next={false}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default CloudSync;
