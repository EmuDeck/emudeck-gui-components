import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';

const EmulatorSelector = ({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
  data,
  images,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device, installEmus, second } = state;
  const installEmusArray = Object.values(installEmus);

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Emulators for" bold={`${device}`} />
          <p className="lead">
            These are the emulators EmuDeck installs to your system. Selected
            emulators will be installed and updated to the latest version.
            De-selected emulators will not be installed or updated.
          </p>
          <Main>
            <div className="cards cards--mini">
              {installEmusArray.map((item, i) => {
                if (item.id == 'srm') {
                  return;
                }
                if (item.id == 'xenia') {
                  return;
                }
                const img = images[item.id];
                return (
                  <Card
                    css={item.status == true && 'is-selected'}
                    key={item.id}
                    onClick={() => onClick(item.id)}
                  >
                    <img src={img} alt={item.name} />
                    <span className="h6">{item.name}</span>
                  </Card>
                );
              })}
            </div>
          </Main>
          <Footer
            next="emulator-configuration"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default EmulatorSelector;
