import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';
import SimpleCarousel from 'components/molecules/SimpleCarousel/SimpleCarousel.js';

import noir1 from 'assets/esdethemes/epicnoir/1.png';
import noir2 from 'assets/esdethemes/epicnoir/2.png';
import noir3 from 'assets/esdethemes/epicnoir/3.png';
import rbsimple from 'assets/ES-DE_01.png';
import modern from 'assets/ES-DE_01.png';

const noirPics = [
  <img src={noir1} alt="Background" />,
  <img src={noir2} alt="Background" />,
  <img src={noir3} alt="Background" />,
];
const rbsimplePics = [<img src={rbsimple} alt="Background" />];
const modernPics = [<img src={modern} alt="Background" />];

const PegasusTheme = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { theme } = state;
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="EmulationStation DE " bold="Theme" />
          <Main>
            <p className="lead">Chose your theme for EmulationStation DE</p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <SimpleCarousel
                  nav={false}
                  img={noirPics}
                  css={theme != 'EPICNOIR' && 'is-hidden'}
                />
                <SimpleCarousel
                  nav={false}
                  img={rbsimplePics}
                  css={theme != 'RBSIMPLE-DE' && 'is-hidden'}
                />
                <SimpleCarousel
                  nav={false}
                  img={modernPics}
                  css={theme != 'MODERN-DE' && 'is-hidden'}
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick('EPICNOIR')}>
                    <Card css={theme == 'EPICNOIR' && 'is-selected'}>
                      <span className="h3">Dark Noir</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick('RBSIMPLE-DE')}>
                    <Card css={theme == 'RBSIMPLE-DE' && 'is-selected'}>
                      <span className="h3">RBSimple</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick('MODERN-DE')}>
                    <Card css={theme == 'MODERN-DE' && 'is-selected'}>
                      <span className="h3">Modern</span>
                    </Card>
                  </li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            back="aspect-ratio-dolphin"
            next="end"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default PegasusTheme;
