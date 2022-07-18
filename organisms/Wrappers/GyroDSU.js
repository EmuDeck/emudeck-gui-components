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
  hasSudo,
  nextText,
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
                This tool requires you to use a Linux sudo (SuperUser) password.
              </p>
              {hasSudo === false && (
                <>
                  <p>
                    Click on "Create Password" to launch a new Terminal window
                    where you will be able to create one.
                    <br />
                    <strong>
                      Never share the sudo password, if you forget the sudo
                      password you'll need to reset your Steam Deck.
                    </strong>
                  </p>
                  <BtnSimple
                    type="button"
                    onClick={onClick}
                    css="btn-simple--1"
                  >
                    Create Password
                  </BtnSimple>
                </>
              )}
              {hasSudo === true && (
                <p>
                  We've detected you already have set your sudo password, type
                  it on the next input to install this tool or leave it empty to
                  skip its installation.
                </p>
              )}
              {hasSudo === false && (
                <p>
                  If you want to skip this installation just leave the next
                  input empty an continue.
                </p>
              )}
              <Form>
                <FormInputSimple
                  label="Sudo Password"
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={onChange}
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
          next="end"
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default GyroDSU;
