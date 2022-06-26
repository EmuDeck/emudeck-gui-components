import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";
import Step from "components/molecules/Step/Step.js";
import img552 from "assets/rg552.png";
import imgOdin from "assets/odin.png";
import imgRP2 from "assets/rp2.png";
import imgAndroid from "assets/android.png";
import imgDeck from "assets/deck.png";

const DeviceSelector = ({
  onChange,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Choose your" bold="device" />
          <Main>
            <p className="lead">
              We tailor the experience depending of the selected device, each
              device has its own special configuration, different emulators and
              adjusted bezels.
            </p>

            <div className="steps">
              <input
                type="radio"
                id="rg552"
                name="device"
                onChange={() => onChange("RG552")}
              />

              <label htmlFor="rg552" className="step step--device">
                <div className="step-img">
                  <img src={img552} width="100" alt="Background" />
                </div>
                <figcaption>Anbernic RG552</figcaption>
              </label>
              <input
                type="radio"
                id="odin"
                name="device"
                onChange={() => onChange("Odin")}
              />

              <label htmlFor="odin" className="step step--device">
                <div className="step-img">
                  <img src={imgOdin} width="100" alt="Background" />
                </div>
                <figcaption>AYN Odin</figcaption>
              </label>
              <input
                type="radio"
                id="rp2"
                name="device"
                onChange={() => onChange("RP2")}
              />

              <label htmlFor="rp2" className="step step--device">
                <div className="step-img">
                  <img src={imgRP2} width="100" alt="Background" />
                </div>
                <figcaption>Retroid Pocket 2+</figcaption>
              </label>
              <input
                type="radio"
                id="android"
                name="device"
                onChange={() => onChange("Android")}
              />

              <label htmlFor="android" className="step step--device">
                <div className="step-img">
                  <img src={imgAndroid} width="100" alt="Background" />
                </div>
                <figcaption>Other Android</figcaption>
              </label>

              <input
                type="radio"
                id="deck"
                name="device"
                onChange={() => onChange("Steam Deck")}
              />

              <label htmlFor="deck" className="step step--device">
                <div className="step-img">
                  <img src={imgDeck} width="100" alt="Background" />
                </div>
                <figcaption>Steam Deck</figcaption>
              </label>
            </div>
          </Main>
          <Footer
            back={back}
            next={next}
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default DeviceSelector;
