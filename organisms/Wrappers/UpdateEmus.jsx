import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

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
    <>
      <p className="lead">
        Emulators and tools can be installed a multitude of ways. EmuDeck
        installs some emulators and tools as Flatpaks from the Discover Store.
        Others are downloaded for you directly from the developer's website as
        AppImages or Binaries. A few are Windows Executables, downloaded and run
        through Proton.
      </p>
      <Main>
        <p>Select which batch you want to update:</p>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Update Emulators from the Discover Store"
          onClick={() => onClickFlatpak()}
          disabled={disabledNext && 'true'}
        >
          Update Flatpaks
        </BtnSimple>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Update AppImages, Binaries, and Windows Executables"
          onClick={() => onClickAppImage()}
          disabled={disabledNext && 'true'}
        >
          Update AppImages and Binaries
        </BtnSimple>
      </Main>
    </>
  );
};

export default UpdateEmus;
