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

import box from 'assets/cloud/box.png';
import dropbox from 'assets/cloud/dropbox.png';
import gdrive from 'assets/cloud/gdrive.png';
import nextcloud from 'assets/cloud/nextcloud.png';
import onedrive from 'assets/cloud/onedrive.png';

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
            <div data-col-sm="7">
              <p>Select one of the following providers:</p>

              <div className="cards cards--mini">
                <Card
                  css={cloudSync == 'box' && 'is-selected'}
                  onClick={() => onClick('box')}
                >
                  <img src={box} alt="Box" />
                  <span className="h6">Box</span>
                </Card>
                <Card
                  css={cloudSync == 'dropbox' && 'is-selected'}
                  onClick={() => onClick('dropbox')}
                >
                  <img src={dropbox} alt="dropbox" />
                  <span className="h6">DropBox</span>
                </Card>
                <Card
                  css={cloudSync == 'gdrive' && 'is-selected'}
                  onClick={() => onClick('gdrive')}
                >
                  <img src={gdrive} alt="gdrive" />
                  <span className="h6">Google Drive</span>
                </Card>
                <Card
                  css={cloudSync == 'nextcloud' && 'is-selected'}
                  onClick={() => onClick('nextcloud')}
                >
                  <img src={nextcloud} alt="nextcloud" />
                  <span className="h6">NextCloud</span>
                </Card>
                <Card
                  css={cloudSync == 'onedrive' && 'is-selected'}
                  onClick={() => onClick('onedrive')}
                >
                  <img src={onedrive} alt="onedrive" />
                  <span className="h6">OneDrive</span>
                </Card>
              </div>
              {cloudSync !== '' && cloudSync !== false && (
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria="Install SaveSync"
                  onClick={() => onClick()}
                  disabled={disabledNext && 'true'}
                >
                  Install SaveSync
                </BtnSimple>
              )}
            </div>
            <div data-col-sm="5">
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
