import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

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
  onClickPS1,
  onClickPS2,
  onClickSwitch,
  onClickSegaCD,
  onClickSaturn,
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
            If you have issues loading some games, where you only get a black screen for a second maybe it's because you haven't added a proper bios for that system. Click on every system you want to check:
          </p>
          <br />
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => onClickPS1()}
            aria="Go Next"
          >
            Check PlayStation Bios
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => onClickPS2()}
            aria="Go Next"
          >
            Check PlayStation 2 Bios
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => onClickSwitch()}
            aria="Go Next"
          >
            Check Switch Firmware
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => onClickSegaCD()}
            aria="Go Next"
          >
            Check Sega CD Bios
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            onClick={() => onClickSaturn()}
            aria="Go Next"
          >
            Check Saturn
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

export default CheckBiosPage;
