import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import { Alert } from 'getbasecore/Molecules';

import Notification from 'components/molecules/Notification/Notification.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

const CheckBiosPage = ({
  disabledNext,
  disabledBack,
  ps1Bios,
  ps2Bios,
  switchBios,
  segaCDBios,
  saturnBios,
  dreamcastBios,
  DSBios,
  next,
  back,
  nextText,
  showNotification,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, Uninstall } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Bios files" bold="checker" />
        <Main>
          <p className="lead">
            If you have issues loading some games, where you only get a black
            screen for a second maybe it's because you haven't added a proper
            bios for that system. These are the only systems that need you to
            dump and copy your bios to the Emulation/bios directory
          </p>
          <div className="container--grid">
            <div data-col-sm="6">
              <Alert
                css={
                  ps1Bios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--danger'
                }
              >
                Playstation 1 Bios {ps1Bios ? 'detected!' : 'missing!'}
              </Alert>
              <Alert
                css={
                  ps2Bios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--danger'
                }
              >
                Playstation 2 Bios {ps2Bios ? 'detected!' : ' missing!'}
              </Alert>
              <Alert
                css={
                  switchBios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--danger'
                }
              >
                Nintendo Switch Firmware
                {switchBios ? 'detected!' : ' missing!'}
              </Alert>
              <Alert
                css={
                  segaCDBios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--danger'
                }
              >
                Sega CD Bios {segaCDBios ? 'detected!' : ' missing!'}
              </Alert>
              <Alert
                css={
                  saturnBios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--danger'
                }
              >
                Saturn Bios {saturnBios ? 'detected!' : ' missing!'}
              </Alert>
              <Alert
                css={
                  DSBios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--danger'
                }
              >
                Nintendo DS Bios {DSBios ? 'detected!' : ' missing!'}
              </Alert>
              <Alert
                css={
                  dreamcastBios
                    ? 'alert--mini alert--success'
                    : 'alert--mini alert--warning'
                }
              >
                Dreamcast Bios{' '}
                {dreamcastBios
                  ? 'detected!'
                  : ' missing! It is not mandatory, but recommended'}
              </Alert>
            </div>
            <div data-col-sm="1"></div>

            <div data-col-sm="5">
              <Alert css="alert--info">
                <ul class="list">
                  <li>
                    <strong>Tips regarding bios:</strong>
                  </li>
                  <li>
                    Not all systems needs bios. There are the more commons,
                    there are other systems like MSX2 that need bios but are not
                    listed here
                  </li>
                  <li>
                    Make sure you have the bios for the same region your games
                    are. ie: United States, Japan, Europe, etc.
                  </li>
                  <li>
                    Even if your bios is detected make sure you are using
                    lowercase for Playstation 1 and Playstation 2
                  </li>
                  <li>
                    You can check{' '}
                    <a
                      href="https://emulation.gametechwiki.com/index.php/File_hashes"
                      target="_blank"
                    >
                      here
                    </a>{' '}
                    how your bios are supposed to be named.
                  </li>
                </ul>
              </Alert>
            </div>
          </div>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default CheckBiosPage;
