import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

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
  <>
    {/*  <ExploreContainer name="Tab 1 page" /> */}
    <div className="app">
    <div className="wrapper">
      <Header
      title="Configure "
      bold="Cloud Sync"
      />
      <Main>
      <p className="lead">
        CloudSync is a plugin that allows you to sync your saved games to the cloud.
      </p>
      <SelectorMenu>
        <div className="selector-menu__img">
        <img
          src={cloudSyncOn}
          className={cloudSync == true && 'is-hidden'}
          alt="Background"
        />
        <img
          src={cloudSyncOff}
          className={cloudSync == false && 'is-hidden'}
          alt="Background"
        />
        </div>
        <div className="selector-menu__options selector-menu__options--full">
        <ul>
          <li onClick={() => onClick(true)}>
          <Card css={cloudSync == true && 'is-selected'}>
            <span className="h3">Enable</span>
          </Card>
          </li>
          <li onClick={() => onClick(false)}>
          <Card css={cloudSync == false && 'is-selected'}>
            <span className="h3">Disable</span>
          </Card>
          </li>
        </ul>
        </div>
        <div className="selector-menu__details">
        <p className="lead">Systems</p>
        <ul>
          <li>All the emulators</li>
        </ul>
        </div>
      </SelectorMenu>
      </Main>
      <Footer
      next="end"
      disabledNext={disabledNext}
      disabledBack={disabledBack}
      />
    </div>
    </div>
  </>
  );
};

export default CloudSync;
