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
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import gyroDsu from 'assets/gyroDsu.png';

const GyroDSU = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { achievements } = state;

  return (
    <div className="app">
      <div className="wrapper">
        <Header title="Configure" bold="GyroDSU" />
        <Main>
          <p className="lead">
            GyroDSU is a plugin that allows you to use your Steam Deck Gyroscope
            in Cemu For Wii U games. More info about this tool{' '}
            <LinkSimple
              css="link-simple--1"
              href="https://github.com/kmicki/SteamDeckGyroDSU"
              target="_blank"
            >
              here
            </LinkSimple>
          </p>
          <br />
          <div className="container--grid">
            <div data-col-sm="6">
              <p>
                GyroDSU requires you to have set a Linux sudo (SuperUser)
                password.
              </p>

              <p>
                If you don't have a sudo password, type your desired password
                here and click on "Create Password". If you already have sudo
                access, just type the password and continue the installation.
              </p>
              <p>
                <strong>Never share this password</strong>.
              </p>
              <p>Leave this input empty to skip GyroDSU installation</p>

              <Form>
                <FormInputSimple
                  label="Sudo Password"
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={onChange}
                  addon="right"
                  addonText="Create Password"
                  onClick={onClick}
                />
              </Form>
            </div>
            <div data-col-sm="1"></div>
            <div data-col-sm="5">
              <img src={gyroDsu} alt="RetroAchievements" />
            </div>
          </div>
        </Main>
        <Footer
          next="ra-bezels"
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default GyroDSU;
