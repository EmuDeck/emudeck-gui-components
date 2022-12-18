import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';
import SimpleCarousel from 'components/molecules/SimpleCarousel/SimpleCarousel.js';
import Notification from 'components/molecules/Notification/Notification.js';
import { Iframe } from 'getbasecore/Atoms';
import ar43 from 'assets/ar43.png';
import ar32 from 'assets/ar32.png';

import ar43s from 'assets/ar43snes.png';
import ar87s from 'assets/ar87snes.png';
import ar32s from 'assets/ar32snes.png';

import ar433d from 'assets/ar433d.png';
import ar323d from 'assets/ar323d.png';
import ar1693d from 'assets/ar1693d.png';

import ar43gc from 'assets/ar43gc.png';
import ar169gc from 'assets/ar169gc.png';

import imgBezels from 'assets/bezels.png';
import imgNoBezels from 'assets/no-bezels.png';

import lcdon from 'assets/classic-shader-on.png';
import lcdoff from 'assets/classic-shader-off.png';

import lcd3don from 'assets/classic-3d-shader-on.png';
import lcd3doff from 'assets/classic-3d-shader-off.png';

import lcdonH from 'assets/lcdon.png';
import lcdoffH from 'assets/lcdoff.png';

import saveon from 'assets/saveon.png';
import saveoff from 'assets/saveoff.png';

import noir1 from 'assets/esdethemes/es-de_epicnoir_01.png';
import noir2 from 'assets/esdethemes/es-de_epicnoir_02.png';
import modern1 from 'assets/esdethemes/es-de_modern_01.png';
import modern2 from 'assets/esdethemes/es-de_modern_02.png';
import rbsimple1 from 'assets/esdethemes/es-de_rbsimple_01.png';
import rbsimple2 from 'assets/esdethemes/es-de_rbsimple_02.png';

import modern from 'assets/ES-DE_01.png';

import imgYES from 'assets/HomebrewGamesYES.png';
import imgNO from 'assets/HomebrewGamesNO.png';

const noirPics = [
  <img src={noir1} alt="Background" />,
  <img src={noir2} alt="Background" />,
];
const rbsimplePics = [
  <img src={rbsimple1} alt="Background" />,
  <img src={rbsimple2} alt="Background" />,
];
const modernPics = [
  <img src={modern1} alt="Background" />,
  <img src={modern2} alt="Background" />,
];

const Settings = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClickBezel,
  onClickSega,
  onClickSNES,
  onClick3D,
  onClickGC,
  onClickCRT,
  onClickCRT3D,
  onClickLCD,
  onClickAutoSave,
  onClickHomeBrew,
  next,
  back,
  notificationText,
  showNotification,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { ar, bezels, shaders, theme, autosave, homebrewGames } = state;
  const ipcChannel = window.electron.ipcRenderer;
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure your" bold="Settings" />
          <Notification css={showNotification ? 'is-animated' : 'nope'}>
            {notificationText}
          </Notification>
          <Main>
            <p className="lead">
              Select an option to automatically apply it to your system. You do not need to do an EmuDeck Custom Update to apply these settings. 
            </p>
            <ul class="list-grid">
              <li>
                <SelectorMenu>
                  <div className="selector-menu__img">
                    <img
                      src={imgYES}
                      className={homebrewGames == false && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={imgNO}
                      className={homebrewGames == true && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options">
                    <p>Homebrew Games</p>
                    <ul>
                      <li onClick={() => onClickHomeBrew(false)}>
                        <Card css={homebrewGames == false && 'is-selected'}>
                          <span className="h3">NO</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickHomeBrew(true)}>
                        <Card css={homebrewGames == true && 'is-selected'}>
                          <span className="h3">YES</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>GameBoy</li>
                      <li>GameBoy Color</li>
                      <li>Super Nintendo</li>
                      <li>Nintendo NES</li>
                      <li>Master System</li>
                      <li>Genesis</li>
                      <li>GameGear</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={imgBezels}
                      className={bezels == false && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={imgNoBezels}
                      className={bezels == true && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options">
                    <p>Bezels</p>
                    <ul>
                      <li onClick={() => onClickBezel(false)}>
                        <Card css={bezels == false && 'is-selected'}>
                          <span className="h3">Off</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickBezel(true)}>
                        <Card css={bezels == true && 'is-selected'}>
                          <span className="h3">On</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>GameBoy</li>
                      <li>GameBoy Color</li>
                      <li>Super Nintendo</li>
                      <li>Nintendo NES</li>
                      <li>Atari</li>
                      <li>Master System</li>
                      <li>Genesis</li>
                      <li>SegaCD</li>
                      <li>Sega32x</li>
                      <li>GameGear</li>
                      <li>NeoGeo Pocket</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
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
                  <div className="selector-menu__options">
                    <p>Sega Aspect Ratio</p>
                    <ul>
                      <li onClick={() => onClickSega('43')}>
                        <Card css={ar.sega == 43 && 'is-selected'}>
                          <span className="h6">4:3</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickSega('32')}>
                        <Card css={ar.sega == 32 && 'is-selected'}>
                          <span className="h6">3:2</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={ar87s}
                      className={ar.snes != '87' && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={ar43s}
                      className={ar.snes != '43' && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={ar32s}
                      className={ar.snes != '32' && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options">
                    <p>NES & SNES Aspect Ratio</p>
                    <ul>
                      <li onClick={() => onClickSNES('87')}>
                        <Card css={ar.snes == 87 && 'is-selected'}>
                          <span className="h3">8:7</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickSNES('43')}>
                        <Card css={ar.snes == 43 && 'is-selected'}>
                          <span className="h3">4:3</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickSNES('32')}>
                        <Card css={ar.snes == 32 && 'is-selected'}>
                          <span className="h3">3:2</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>Super Nintendo</li>
                      <li>Nintendo NES</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={ar1693d}
                      className={ar.classic3d != '169' && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={ar433d}
                      className={ar.classic3d != '43' && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options selector-menu__options--full">
                    <p>3D Aspect Ratio</p>
                    <ul>
                      <li onClick={() => onClick3D('43')}>
                        <Card css={ar.classic3d == 43 && 'is-selected'}>
                          <span className="h3">4:3</span>
                        </Card>
                      </li>
                      <li onClick={() => onClick3D('169')}>
                        <Card css={ar.classic3d == 169 && 'is-selected'}>
                          <span className="h3">16:9</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>Dreamcast</li>
                      <li>Nintendo 64</li>
                      <li>Sega Saturn</li>
                      <li>Xbox</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={ar169gc}
                      className={ar.dolphin != '169' && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={ar43gc}
                      className={ar.dolphin != '43' && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options selector-menu__options--full">
                    <p>Dolphin Aspect Ratio</p>
                    <ul>
                      <li onClick={() => onClickGC('43')}>
                        <Card css={ar.dolphin == 43 && 'is-selected'}>
                          <span className="h3">4:3</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickGC('169')}>
                        <Card css={ar.dolphin == 169 && 'is-selected'}>
                          <span className="h3">16:9</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>Gamecube</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={lcdoff}
                      className={shaders.classic == true && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={lcdon}
                      className={shaders.classic == false && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options selector-menu__options--full">
                    <p>CRT Shader 2D</p>
                    <ul>
                      <li onClick={() => onClickCRT(false)}>
                        <Card css={shaders.classic == false && 'is-selected'}>
                          <span className="h3">Off</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickCRT(true)}>
                        <Card css={shaders.classic == true && 'is-selected'}>
                          <span className="h3">On</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Affected Systems</p>
                    <ul>
                      <li>Atari</li>
                      <li>Master System</li>
                      <li>Genesis</li>
                      <li>SegaCD</li>
                      <li>Sega32x</li>
                      <li>Nes</li>
                      <li>SuperNes</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={lcd3doff}
                      className={shaders.classic3d == true && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={lcd3don}
                      className={shaders.classic3d == false && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options selector-menu__options--full">
                    <p>CRT Shader 3D</p>
                    <ul>
                      <li onClick={() => onClickCRT3D(false)}>
                        <Card css={shaders.classic3d == false && 'is-selected'}>
                          <span className="h3">Off</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickCRT3D(true)}>
                        <Card css={shaders.classic3d == true && 'is-selected'}>
                          <span className="h3">On</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Affected Systems</p>
                    <ul>
                      <li>Atari</li>
                      <li>Master System</li>
                      <li>Genesis</li>
                      <li>SegaCD</li>
                      <li>Sega32x</li>
                      <li>Nes</li>
                      <li>SuperNes</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={lcdoffH}
                      className={shaders.handhelds == true && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={lcdonH}
                      className={shaders.handhelds == false && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options selector-menu__options--full">
                    <p>LCD Shader Handhelds</p>
                    <ul>
                      <li onClick={() => onClickLCD(false)}>
                        <Card css={shaders.handhelds == false && 'is-selected'}>
                          <span className="h3">Off</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickLCD(true)}>
                        <Card css={shaders.handhelds == true && 'is-selected'}>
                          <span className="h3">On</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>GameBoy</li>
                      <li>GameBoy Color</li>
                      <li>GameGear</li>
                      <li>NeoGeo Pocket</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
              <li>
                <SelectorMenu css="selector-menu--mini">
                  <div className="selector-menu__img">
                    <img
                      src={saveoff}
                      className={autosave == true && 'is-hidden'}
                      alt="Background"
                    />
                    <img
                      src={saveon}
                      className={autosave == false && 'is-hidden'}
                      alt="Background"
                    />
                  </div>
                  <div className="selector-menu__options selector-menu__options--full">
                    <p>AutoSave</p>
                    <ul>
                      <li onClick={() => onClickAutoSave(false)}>
                        <Card css={autosave == false && 'is-selected'}>
                          <span className="h3">Off</span>
                        </Card>
                      </li>
                      <li onClick={() => onClickAutoSave(true)}>
                        <Card css={autosave == true && 'is-selected'}>
                          <span className="h3">On</span>
                        </Card>
                      </li>
                    </ul>
                  </div>
                  <div className="selector-menu__details">
                    <p className="lead">Systems</p>
                    <ul>
                      <li>GameBoy</li>
                      <li>GameBoy Color</li>
                      <li>GameGear</li>
                      <li>NeoGeo Pocket</li>
                    </ul>
                  </div>
                </SelectorMenu>
              </li>
            </ul>
          </Main>
          <Footer disabledNext={disabledNext} disabledBack={disabledBack} />
        </div>
      </div>
    </>
  );
};

export default Settings;
