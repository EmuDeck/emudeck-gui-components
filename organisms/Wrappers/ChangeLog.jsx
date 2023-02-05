import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
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
      <Header title="Latest" bold="changes" />
      <Main>{children}</Main>
      <Footer
        next={false}
        backText="Back to Home"
        disabledNext={disabledNext}
        disabledBack={disabledBack}
      />
    </>
  );
};

export default ChangeLog;