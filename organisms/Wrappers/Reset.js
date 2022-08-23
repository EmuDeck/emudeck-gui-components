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

const Reset = ({
  disabledNext,
  disabledBack,
  onClick,
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
        <Header title="Reset" bold="Emudeck" />
        <Notification css={showNotification ? 'is-animated' : 'nope'}>
          EmuDeck has been reset! Redirecting...
        </Notification>
        <Main>
          <p className="lead">
            If you somehow messed your configuration you can always go back to
            our safe defaults. Just press the reset button and go back to the
            main screen to select Easy or Custom mode to start over
          </p>
          <br />
          <BtnSimple
            css="btn-simple--3"
            type="button"
            onClick={() => onClick()}
            aria="Go Next"
          >
            Reset EmuDeck
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

export default Reset;
