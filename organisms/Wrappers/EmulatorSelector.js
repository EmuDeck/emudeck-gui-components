import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';

import imgra from 'assets/emulators/ra.png';
import imgdolphin from 'assets/emulators/dolphin.png';
import imgprimehacks from 'assets/emulators/primehacks.png';
import imgppsspp from 'assets/emulators/ppsspp.png';
import imgduckstation from 'assets/emulators/duckstation.png';
import imgcitra from 'assets/emulators/citra.png';
import imgpcsx2 from 'assets/emulators/pcsx2.png';
import imgrpcs3 from 'assets/emulators/rpcs3.png';
import imgyuzu from 'assets/emulators/yuzu.png';
import imgryujinx from 'assets/emulators/ryujinx.png';
import imgcemu from 'assets/emulators/cemu.png';
import imgxemu from 'assets/emulators/xemu.png';
import imgmame from 'assets/emulators/mame.png';
import imgvita3k from 'assets/emulators/vita3k.png';
import imgscummvm from 'assets/emulators/scummvm.png';
import imgsupermodelista from 'assets/emulators/supermodelista.png';

const images = {
  ra: { imgra },
  dolphin: { imgdolphin },
  primehacks: { imgprimehacks },
  ppsspp: { imgppsspp },
  duckstation: { imgduckstation },
  citra: { imgcitra },
  pcsx2: { imgpcsx2 },
  rpcs3: { imgrpcs3 },
  yuzu: { imgyuzu },
  ryujinx: { imgryujinx },
  cemu: { imgcemu },
  xemu: { imgxemu },
  mame: { imgmame },
  vita3k: { imgvita3k },
  scummvm: { imgscummvm },
  supermodelista: { imgsupermodelista },
  supermodelista: { imgsupermodelista },
};

const EmulatorSelector = ({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
  data,
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
          <Main>
            <p className="lead">
              These are the emulators EmuDeck recommends for your device. You
              can disable any emulator icon to avoid installing / updating it on
              your installation.
            </p>

            <div className="cards cards--mini">
              {installEmusArray.map((item, i) => {
                if (item.id == 'srm') {
                  return;
                }
                const img = images[item.id][`img${item.id}`];
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
