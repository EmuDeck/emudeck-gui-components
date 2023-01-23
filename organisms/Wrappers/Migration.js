import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import imgSD from 'assets/sdcard.png';
import imgInternal from 'assets/internal.png';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

const ipcChannel = window.electron.ipcRenderer;
const Migration = ({
  disabledNext,
  disabledBack,
  onChange,
  onClick,
  onClickStart,
  next,
  back,
  minute,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  customPath,
  storage,
  storagePath,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { SDID, mode, system } = state;
  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Migrate your installation" />
        <p className="lead">
          This will move all your roms to the selected destination aswell as
          update your Steam Library paths.
        </p>
        <Main>
          <div className="container--grid">
            <div data-col-sm="6">
              <span className="h4">Current installation:</span>
              <div className="cards cards--half">
                {storage == 'SD-Card' && (
                  <Card css={storage == 'SD-Card' && 'is-selected'}>
                    <img src={imgSD} width="100" alt="Background" />
                    <span className="h5">SD Card</span>
                    {sdCardName != null && (
                      <span className="h6">{sdCardName}</span>
                    )}
                    {sdCardName == null ||
                      (sdCardValid == false && (
                        <span className="h6">Not detected</span>
                      ))}
                  </Card>
                )}

                {storage == 'Internal Storage' && (
                  <Card css={storage == 'Internal Storage' && 'is-selected'}>
                    <img src={imgInternal} width="100" alt="Background" />
                    <span className="h6">Internal Storage</span>
                  </Card>
                )}
                {storage == 'Custom' && (
                  <Card css={storage == 'Custom' && 'is-selected'}>
                    <img src={imgInternal} width="100" alt="Background" />
                    <span className="h6">Custom Directory</span>
                    {customPath && storage == 'Custom' && (
                      <span className="h6">{customPath}</span>
                    )}
                  </Card>
                )}
              </div>
            </div>
            <div data-col-sm="6">
              <span className="h4">Pick your destination</span>
              <div className="cards cards--half">
                <Card
                  css={storage == 'SD-Card' && 'is-selected'}
                  onClick={() =>
                    sdCardValid == true ? onClick('SD-Card') : reloadSDcard()
                  }
                >
                  <img src={imgSD} width="100" alt="Background" />
                  <span className="h5">SD Card</span>
                  {sdCardName != null && (
                    <span className="h6">{sdCardName}</span>
                  )}
                  {sdCardName == null ||
                    (sdCardValid == false && (
                      <span className="h6">Not detected</span>
                    ))}
                </Card>

                <Card
                  css={storage == 'Internal Storage' && 'is-selected'}
                  onClick={() => onClick('Internal Storage')}
                >
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">Internal Storage</span>
                </Card>

                <Card
                  css={storage == 'Custom' && 'is-selected'}
                  onClick={() => onClick('Custom')}
                >
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">Custom Directory</span>
                  {customPath && storage == 'Custom' && (
                    <span className="h6">{customPath}</span>
                  )}
                </Card>
              </div>
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Start Migration"
                onClick={() => onClickStart()}
              >
                Start Migration
              </BtnSimple>
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

export default Migration;
