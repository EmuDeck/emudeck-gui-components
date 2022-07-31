import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import ToolsAndStuffImg from 'assets/powertools.png';

const ToolsAndStuff = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  hasSudo,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { achievements } = state;
  const navigate = useNavigate();
  const goTo = (href) => {
    navigate('/' + href);
  };
  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Tools &" bold="Stuff" />
        <Main>
          <p className="lead">
            In this section you'll find Tools that will allow you to get the most of your Steam Deck
          </p>

          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => goTo('power-tools')}
            aria="Go Next"
            disabled={disabledNext && 'true'}
          >
            Install PowerTools
          </BtnSimple>

          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => goTo('gyrodsu')}
            aria="Go Next"
            disabled={disabledNext && 'true'}
          >
            Install Gyro for Cemu
          </BtnSimple>

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

export default ToolsAndStuff;
