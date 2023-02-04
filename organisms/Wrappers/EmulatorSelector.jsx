import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

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
  const { device, installEmus, second, system } = state;
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
                if (item.id == 'srm' || item.id == 'xenia') {
                  return;
                }

                if (system == 'win32') {
                  if (
                    item.id == 'primehacks' ||
                    item.id == 'melonds' ||
                    item.id == 'citra' ||
                    item.id == 'rpcs3' ||
                    item.id == 'ryujinx' ||
                    item.id == 'rmg' ||
                    item.id == 'mame' ||
                    item.id == 'vita3k' ||
                    item.id == 'scummvm' ||
                    item.id == 'xemu'
                  ) {
                    return;
                  }
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
