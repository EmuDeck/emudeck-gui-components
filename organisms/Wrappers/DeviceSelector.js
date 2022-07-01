import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Step from 'components/molecules/Step/Step.js';
import Card from 'components/molecules/Card/Card.js';

import img552 from 'assets/rg552.png';
import imgOdin from 'assets/odin.png';
import imgRP2 from 'assets/rp2.png';
import imgAndroid from 'assets/android.png';
import imgDeck from 'assets/deck.png';

const DeviceSelector = ({
  onClick,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  data,
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

            <div className="cards">
              <Card
                css={device == 'RG552' && 'is-selected'}
                onClick={() => onClick('RG552')}
              >
                <img src={img552} width="100" alt="Background" />
                <span className="h6">Anbernic RG552</span>
              </Card>

              <Card
                css={device == 'Odin Base/Pro' && 'is-selected'}
                onClick={() => onClick('Odin Base/Pro')}
              >
                <img src={imgOdin} width="100" alt="Background" />
                <span className="h6">AYN Odin Base/Pro</span>
              </Card>

              <Card
                css={device == 'Odin Lite' && 'is-selected'}
                onClick={() => onClick('Odin Lite')}
              >
                <img src={imgOdin} width="100" alt="Background" />
                <span className="h6">AYN Odin Lite</span>
              </Card>
              <Card
                css={device == 'RP2+' && 'is-selected'}
                onClick={() => onClick('RP2+')}
              >
                <img src={imgRP2} width="100" alt="Background" />
                <span className="h6">Retroid Pocket 2+</span>
              </Card>

              <Card
                css={device == 'Android' && 'is-selected'}
                onClick={() => onClick('Android')}
              >
                <img src={imgAndroid} width="100" alt="Background" />
                <span className="h6">Android Phone</span>
              </Card>
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
