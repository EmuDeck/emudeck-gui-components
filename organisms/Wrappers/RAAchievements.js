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
  BtnSwitch,
  LinkSimple,
  nextText,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import raLogo from 'assets/RetroAchievements.png';

const RAAchievements = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onToggle,
  next,
  back,
  data,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { achievements } = state;

  return (
    <div className="app">
      <div className="wrapper">
        <Header title="Configure" bold="RetroAchievements" />
        <Main>
          <p className="lead">
            RetroAchievements.org is a community who collaborate and compete to
            earn custom-made achievements in classic games through emulation.
            You can use them on all the systems emulated on RetroArch
          </p>
          <br />
          <div className="container--grid">
            <div data-col-sm="6">
              <p>
                If you dont have an account you can register now on
                RetroAchievements.org by clicking{' '}
                <LinkSimple
                  css="link-simple--1"
                  target="_blank"
                  href="https://www.retroAchievements.org"
                >
                  here
                </LinkSimple>
              </p>

              <Form>
                <FormInputSimple
                  label="Username"
                  type="text"
                  name="user"
                  id="user"
                  value={achievements.user}
                  onChange={onChange}
                />
                <FormInputSimple
                  label="Password"
                  type="password"
                  name="pass"
                  id="pass"
                  value={achievements.pass}
                  onChange={onChange}
                />
                HardCore mode
                <BtnSwitch
                  label="hardcore"
                  name="hardcore"
                  id="hardcore"
                  value={achievements.hardcore}
                  onChange={onToggle}
                />
              </Form>
            </div>
            <div data-col-sm="1"></div>
            <div data-col-sm="5">
              <img src={raLogo} alt="RetroAchievements" />
            </div>
          </div>
        </Main>
        <Footer
          next="ra-bezels"
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default RAAchievements;
