import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';
import Step from 'components/molecules/Step/Step';

const DeviceSelector = ({
  onClick,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  data,
  children,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device } = state;

  return (
    <>
      <Header title="Select your" bold="device" />
      <p className="lead">
        We tailor the install for different hardware. Each device will have its
        own configuration, emulators and pre-configured bezels.
      </p>
      <Main>
        <div className="cards">{children}</div>
      </Main>
      <Footer
        back={back}
        next={next}
        disabledNext={disabledNext}
        disabledBack={disabledBack}
      />
    </>
  );
};

export default DeviceSelector;