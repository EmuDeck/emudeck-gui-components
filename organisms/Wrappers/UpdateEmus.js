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

import UpdateEmusImg from 'assets/powertools.png';

const UpdateEmus = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClickFlatpak,
  onClickAppImage,
  next,
  back,
  hasSudo,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, UpdateEmus } = state;

  return (
    <div className="app">
    <Aside />
      <div className="wrapper">
        <Header title="Update your" bold="Emulators" />
        <Main>
          <p className="lead">
            We use two types of emulators. Some are installed from the Discover Store ( Flatpaks ), and others downloaded directly from the developer's website ( AppImages ).
          </p>
          <p>Choose what do you want to update</p>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Update Emulators from the Discover Store"
            onClick={()=> onClickFlatpak() }
            disabled={disabledNext && 'true'}
          >
            Update Flatpak Emulators
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Update appImages"
            onClick={()=> onClickAppImage() }
            disabled={disabledNext && 'true'}
          >
           Update AppImages Emulators
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

export default UpdateEmus;
