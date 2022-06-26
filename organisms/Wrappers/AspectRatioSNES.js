import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";

import ar43 from "assets/ar43snes.png";
import ar87 from "assets/ar87snes.png";
import ar32 from "assets/ar32snes.png";

const AspectRatioSNES = () => {
  const { state, setState } = useContext(GlobalContext);
  const { bezels } = state;
  const [statePage, setStatePage] = useState({
    disabledNext: true,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;
  const copyDir = () => {
    console.log("nah");
  };
  const bezelsSet = (bezelStatus) => {
    copyDir();
    setState({
      ...state,
      bezels: bezelStatus,
    });
  };
  //Enabling button when changing the global state only if we have a device selected
  useEffect(() => {
    if (bezels != "") {
      setStatePage({ ...statePage, disabledNext: false });
    }
  }, [state]); // <-- here put the parameter to listen

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure Aspect Ratio for" bold="Super NES" />
          <Main>
            <p className="lead">
              Chose your aspect ratio for Super Nintendo games.
            </p>
            <div className="steps steps--nowrap">
              <input
                type="radio"
                id="87"
                name="device"
                onChange={() => bezelsSet(true)}
              />
              <label for="87" className="step step--bezel">
                <div className="step-img">
                  <img src={ar87} alt="Background" />
                </div>
                <figcaption>8:7 - Internal Original</figcaption>
              </label>
              <input
                type="radio"
                id="43"
                name="device"
                onChange={() => bezelsSet(false)}
              />
              <label for="43" className="step step--bezel">
                <div className="step-img">
                  <img src={ar43} alt="Background" />
                </div>
                <figcaption>4:3 - Default Original</figcaption>
              </label>
              <input
                type="radio"
                id="32"
                name="device"
                onChange={() => bezelsSet(false)}
              />
              <label for="32" className="step step--bezel">
                <div className="step-img">
                  <img src={ar32} alt="Background" />
                </div>
                <figcaption>3:2 - Not recommended</figcaption>
              </label>
            </div>
          </Main>
          <Footer
            next="aspect-ratio-3d"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default AspectRatioSNES;
