import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';

import Step from 'components/molecules/Step/Step';

import {
  BtnSimple,
  BtnGroup,
  BtnSwitch,
  Icon,
  LinkSimple,
  Img,
  Iframe,
  List,
  ProgressBar,
  FormInputSimple,
  FormSelectSimple,
  FormRadioSimple,
  FormCheckboxSimple,
  FormInputRangeSimple,
} from 'getbasecore/Atoms';

const RAConfig = () => {
  const { state, setState } = useContext(GlobalContext);
  const { snes } = state;
  const [statePage, setStatePage] = useState({
    disabledNext: true,
    disabledBack: false,
    overlaysInstalled: false,
  });
  const { disabledNext, disabledBack, overlaysInstalled } = statePage;

  const snesSet = (snesAR) => {
    setState({
      ...state,
      snes: snesAR,
    });
  };
  //Enabling button when changing the global state only if we have a device selected
  useEffect(() => {
    if (snes != '') {
      setStatePage({ ...statePage, disabledNext: false });
    }
  }, [state]); // <-- here put the parameter to listen

  return (
    <>
      <Header title="Configure" bold="RetroArch" />
      <Main>
        {overlaysInstalled === false && (
          <>
            <p>Configuring Overlays</p>
            <ProgressBar type="indeterminate"></ProgressBar>
          </>
        )}

        {overlaysInstalled === true && (
          <>
            <p className="lead">
              Select the Aspect Ratio for the Super Nintendo Entertainment
              System
            </p>

            <div className="steps">
              <input
                type="radio"
                id="43"
                name="snes"
                onChange={() => snesSet(43)}
              />
              <label for="43" className="step step--snes">
                <div className="step-img">
                  <img src="assets/43.png" alt="Background" />
                </div>
                <figcaption>4:3 - Classic TV Resolution </figcaption>
              </label>
              <input
                type="radio"
                id="87"
                name="snes"
                onChange={() => snesSet(87)}
              />
              <label for="87" className="step step--snes">
                <div className="step-img">
                  <img src="assets/87.png" alt="Background" />
                </div>
                <figcaption>8:7 - Real Internal Resolution</figcaption>
              </label>
            </div>
          </>
        )}
      </Main>
      <Footer
        next="pegasus-install"
        disabledNext={disabledNext}
        disabledBack={disabledBack}
      />
    </>
  );
};

export default RAConfig;
