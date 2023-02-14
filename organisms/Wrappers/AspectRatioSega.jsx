import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import ar43 from 'assets/ar43.png';
import ar32 from 'assets/ar32.png';

const AspectRatioSega = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      <p className="lead">
        Select the aspect ratio for the Classic Sega Systems.
      </p>
      <Main>
        <SelectorMenu>
          <div className="selector-menu__img">
            <img
              src={ar43}
              className={ar.sega == '32' && 'is-hidden'}
              alt="Background"
            />
            <img
              src={ar32}
              className={ar.sega == '43' && 'is-hidden'}
              alt="Background"
            />
          </div>
          <div className="selector-menu__options selector-menu__options--full">
            <ul>
              <li onClick={() => onClick('43')}>
                <Card css={ar.sega == 43 && 'is-selected'}>
                  <span className="h4">4:3</span>
                  <p>Original Aspect Ratio</p>
                </Card>
              </li>
              <li onClick={() => onClick('32')}>
                <Card css={ar.sega == 32 && 'is-selected'}>
                  <span className="h4">3:2</span>
                  <p>Smaller black bars, slight horizontal distortion</p>
                </Card>
              </li>
            </ul>
          </div>
          <div className="selector-menu__details">
            <p className="lead">Systems</p>
            <ul>
              <li>Master System</li>
              <li>Genesis</li>
              <li>Sega CD</li>
              <li>Sega 32X</li>
            </ul>
          </div>
        </SelectorMenu>
      </Main>
    </>
  );
};

export default AspectRatioSega;
