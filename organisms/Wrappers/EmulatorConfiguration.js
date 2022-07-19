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
import imgcemu from 'assets/emulators/cemu.png';
import imgxemu from 'assets/emulators/xemu.png';
import imgsrm from 'assets/emulators/srm.png';

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
  cemu: { imgcemu },
  xemu: { imgxemu },
  srm: { imgsrm },
};

const EmulatorConfiguration = ({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device, keepConfigEmus, second } = state;
  const keepConfigEmusArray = Object.values(keepConfigEmus);
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Keep emulator's" bold="configuration" />
          <Main>
            <p className="lead">
              By default we will overwrite all configuration of this emulators,
              disable those you want to keep you current configuration ( Not
              recommended ).
            </p>

            <div className="cards cards--mini">
              {keepConfigEmusArray.map((item, i) => {
                if (keepConfigEmusArray.id == 'srm') {
                  return;
                }
                const img = images[item.id][`img${item.id}`];
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
            next="ra-achievements"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default EmulatorConfiguration;
