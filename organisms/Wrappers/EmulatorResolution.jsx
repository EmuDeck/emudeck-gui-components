import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';

import { Img } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import imgYES from 'assets/HomebrewGamesYES.png';
import imgNO from 'assets/HomebrewGamesNO.png';
import { iconSuccess, iconDanger } from 'components/utils/images/images';
const EmulatorResolution = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const {
    mode,
    storagePath,
    installEmus,
    overwriteConfigEmus,
    autosave,
    achievements,
    bezels,
    ar,
    shaders,
    theme,
    homebrewGames,
    resolutions,
  } = state;
  const resolutionsArray = Object.values(resolutions);
  return (
    <>
      

      <Header title="Emulator Resolution" />
      <p className="lead">
        Choose the resolution you want for your emulator. Keep in mind the
        bigger the resolution, the beefer computer you'll need
      </p>
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            <div className="dolphin">
              <span className="h5">GameCube and Wii Games</span>
              <div className="cards">
                <Card css={resolutions.dolphin == '720P' ? 'is-selected' : ''}>
                  <span
                    className="h6"
                    onClick={() => onClick('dolphin', '720P')}
                  >
                    720P
                  </span>
                </Card>
                <Card css={resolutions.dolphin == '1080P' ? 'is-selected' : ''}>
                  <span
                    className="h6"
                    onClick={() => onClick('dolphin', '1080P')}
                  >
                    1080P
                  </span>
                </Card>
                <Card css={resolutions.dolphin == '1440P' ? 'is-selected' : ''}>
                  <span
                    className="h6"
                    onClick={() => onClick('dolphin', '1440P')}
                  >
                    1440P
                  </span>
                </Card>
                <Card css={resolutions.dolphin == '4K' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('dolphin', '4K')}>
                    4K
                  </span>
                </Card>
              </div>
            </div>
            <hr />
            <div className="duckstation">
              <span className="h5">PlayStation 1 Games</span>
              <div className="cards">
                <Card
                  css={resolutions.duckstation == '720P' ? 'is-selected' : ''}
                >
                  <span
                    className="h6"
                    onClick={() => onClick('duckstation', '720P')}
                  >
                    720P
                  </span>
                </Card>
                <Card
                  css={resolutions.duckstation == '1080P' ? 'is-selected' : ''}
                >
                  <span
                    className="h6"
                    onClick={() => onClick('duckstation', '1080P')}
                  >
                    1080P
                  </span>
                </Card>
                <Card
                  css={resolutions.duckstation == '1440P' ? 'is-selected' : ''}
                >
                  <span
                    className="h6"
                    onClick={() => onClick('duckstation', '1440P')}
                  >
                    1440P
                  </span>
                </Card>
                <Card
                  css={resolutions.duckstation == '4K' ? 'is-selected' : ''}
                >
                  <span
                    className="h6"
                    onClick={() => onClick('duckstation', '4K')}
                  >
                    4K
                  </span>
                </Card>
              </div>
            </div>
          </div>
          <div data-col-sm="6">
            <div className="pcsx2">
              <span className="h5">PlayStation 2 Games</span>
              <div className="cards">
                <Card css={resolutions.pcsx2 == '720P' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('pcsx2', '720P')}>
                    720P
                  </span>
                </Card>
                <Card css={resolutions.pcsx2 == '1080P' ? 'is-selected' : ''}>
                  <span
                    className="h6"
                    onClick={() => onClick('pcsx2', '1080P')}
                  >
                    1080P
                  </span>
                </Card>
                <Card css={resolutions.pcsx2 == '1440P' ? 'is-selected' : ''}>
                  <span
                    className="h6"
                    onClick={() => onClick('pcsx2', '1440P')}
                  >
                    1440P
                  </span>
                </Card>
                <Card css={resolutions.pcsx2 == '4K' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('pcsx2', '4K')}>
                    4K
                  </span>
                </Card>
              </div>
            </div>
            <hr />
            <div className="yuzu">
              <span className="h5">Switch Games</span>
              <div className="cards">
                <Card css={resolutions.yuzu == '720P' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('yuzu', '720P')}>
                    720P
                  </span>
                </Card>
                <Card css={resolutions.yuzu == '1080P' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('yuzu', '1080P')}>
                    1080P
                  </span>
                </Card>
                <Card css={resolutions.yuzu == '1440P' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('yuzu', '1440P')}>
                    1440P
                  </span>
                </Card>
                <Card css={resolutions.yuzu == '4K' ? 'is-selected' : ''}>
                  <span className="h6" onClick={() => onClick('yuzu', '4K')}>
                    4K
                  </span>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer
        next="confirmation"
        nextText="Next"
        disabledNext={disabledNext}
        disabledBack={disabledBack}
      />
    </>
  );
};

export default EmulatorResolution;
