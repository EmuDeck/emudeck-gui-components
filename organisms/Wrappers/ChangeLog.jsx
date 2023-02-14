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

const ChangeLog = ({
  disabledNext,
  disabledBack,
  next,
  back,
  nextText,
  children,
}) => {
  const { state, setState } = useContext(GlobalContext);

  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default ChangeLog;
