import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';

const EmulatorConfiguration = ({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
  data,
  images,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device, overwriteConfigEmus, second } = state;
  const overwriteConfigEmusArray = Object.values(overwriteConfigEmus);

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Update emulator's" bold="configuration" />
          {second && (
            <p className="lead">
              EmuDeck will optimize and configure emulators during this install.
              Selected emulators will have their configurations reset and
              updated to EmuDeck's defaults. De-selected emulators will not be
              touched and EmuDeck will respect your configurations (Not
              Recommended).
            </p>
          )}
          {!second && (
            <p className="lead">
              EmuDeck will optimize and configure emulators during this install.
              Selected emulators will have their configurations reset and
              updated to EmuDeck's defaults. De-selected emulators will not be
              touched and EmuDeck will respect your configurations (Not
              Recommended).
            </p>
          )}
          <Main>
            <div className="cards cards--mini">
              {overwriteConfigEmusArray.map((item, i) => {
                if (overwriteConfigEmusArray.id == 'srm') {
                  return;
                }
                const img = images[item.id];
                return (
                  <Card
                    css={item.status == true && 'is-selected'}
                    key={item.id}
                    onClick={() => onClick(item.id)}
                  >
                    <img src={img} alt="RetroArch" />
                    <span className="h6">{item.name}</span>
                  </Card>
                );
              })}
            </div>
          </Main>
          <Footer
            next={next}
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default EmulatorConfiguration;
