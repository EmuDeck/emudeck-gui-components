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

import powerToolsImg from 'assets/powertools.png';

const PowerTools = ({
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
        <Header title="Configure" bold="PowerTools" />
        <Main>
          <p className="lead">
            PowerTools is a plugin that allows you to tweak your CPU & GPU to
            get maximum performance for the more demanding systems. You can read
            more about this great tool{' '}
            <LinkSimple
              css="link-simple--1"
              href="https://github.com/NGnius/PowerTools"
              target="_blank"
            >
              here
            </LinkSimple>
          </p>
          <br />
          <div className="container--grid">
            <div data-col-sm="6">
              <p>
                PowerTools require you to have set a Linux sudo (SuperUser)
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
              <p>Leave this input empty to skip PowerTools installation</p>

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
              <img src={powerToolsImg} alt="RetroAchievements" />
            </div>
          </div>
        </Main>
        <Footer
          next="gyrodsu"
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default PowerTools;
