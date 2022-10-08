import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import VideoGuideImg from 'assets/powertools.png';
const ipcChannel = window.electron.ipcRenderer;
const VideoGuide = ({
  disabledNext,
  disabledBack,
  onChange,
  onClick,
  next,
  back,
  minute,
}) => {
  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Emulation Showcase" />
        <Main>
          <p className="lead">
            Russ from RetroGameCorps will show you what you play with EmuDeck
          </p>
          <div className="container--grid">
            <div data-col-sm="7">
              <Iframe
                src={`https://www.youtube-nocookie.com/embed/BBf15Z2xoiY?start=${minute}&autoplay=1&modestbranding=1&rel=0&showinfo=0`}
              />
            </div>
            <div data-col-sm="5">
              <span className="h4">Sections</span>
              <ol class="list">
                <li className="h6">
                  <a href="#" onClick={() => onClick(76)}>
                    My setup
                  </a>
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(159)}>
                    RetroSystems
                  </a>
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(229)}>
                    GameCube
                  </a>{' '}
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(402)}>
                    3DS, PS2, Xbox
                  </a>{' '}
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(553)}>
                    WiiU And PS3
                  </a>{' '}
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(657)}>
                    Switch
                  </a>
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(810)}>
                    Summary
                  </a>
                </li>
              </ol>
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

export default VideoGuide;
