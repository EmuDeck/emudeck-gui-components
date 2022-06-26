import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";

import darkNoir from "assets/darkNoir.jpg";
import rbsimple from "assets/ES-DE_01.png";
import modern from "assets/ES-DE_01.png";

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
} from "getbasecore/Atoms";

const PegasusTheme = () => {
  const { state, setState } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;
  const bezelsSet = (bezelStatus) => {
    console.log("hi");
  };
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header
            title="Choose your default EmulationStation DE"
            bold="Theme"
          />
          <Main>
            <div className="steps steps--nowrap">
              <input
                type="radio"
                id="43"
                name="device"
                onChange={() => bezelsSet(true)}
              />
              <label for="43" className="step step--bezel">
                <div className="step-img">
                  <img src={darkNoir} alt="Background" />
                </div>
                <figcaption>Epic Noir</figcaption>
              </label>
              <input
                type="radio"
                id="32"
                name="device"
                onChange={() => bezelsSet(false)}
              />
              <label for="32" className="step step--bezel">
                <div className="step-img">
                  <img src={rbsimple} alt="Background" />
                </div>
                <figcaption>RB Simple </figcaption>
              </label>
              <input
                type="radio"
                id="169"
                name="device"
                onChange={() => bezelsSet(false)}
              />
              <label for="169" className="step step--bezel">
                <div className="step-img">
                  <img src={modern} alt="Background" />
                </div>
                <figcaption>Modern </figcaption>
              </label>
            </div>
          </Main>
          <Footer
            next="end"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default PegasusTheme;
