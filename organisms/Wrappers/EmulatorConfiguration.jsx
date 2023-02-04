import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

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
  const { device, overwriteConfigEmus, second, system } = state;
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
