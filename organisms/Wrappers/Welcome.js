import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";

const Welcome = ({ disabledNext, disabledBack, downloadComplete }) => {
  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Welcome to" bold="EmuDeck" />
        <Main>
          <p className="lead">
            This installer will guide you throught the installation of your emulators and it will configurate them for your Steam Deck.
            <br/><strong>All Emulators will be installed from the Discover App Store or from the Emulator official source.</strong>
          </p>

          {downloadComplete === false && (
            <>
              <p>Downloading Files</p>
            </>
          )}
          {downloadComplete === true && (
            <div className="steps">
              <div className="step">
                <img
                  className="screenshot lozad"
                  alt="RP Switch Theme Screenshot"
                  src="https://www.pegasus-installer.com/img/1.png"
                />
              </div>
              <div className="step">
                <img
                  className="screenshot lozad"
                  alt="RP Switch Theme Screenshot"
                  src="https://www.pegasus-installer.com/img/4.png"
                />
              </div>
              <div className="step">
                <img
                  className="screenshot lozad"
                  alt="RP Switch Theme Screenshot"
                  src="https://www.pegasus-installer.com/img/ss/Screenshot_20220212-004757.png"
                />
              </div>
            </div>
          )}
        </Main>
        <Footer
          back=""
          next="device-selector"
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default Welcome;
