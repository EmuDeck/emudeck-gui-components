import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

const ChangeLog = ({ disabledNext, disabledBack, next, back, nextText }) => {
  const { state, setState } = useContext(GlobalContext);

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Latest" bold="changes" />
        <Main>
          <p className="lead">
            See all the news and fixes on the latest version.
          </p>
          <ul className="list-two-cols">
            <li>- NEW: Brand New UI</li>
            <li>- NEW: Tools & Stuff page with a lot of extra goodies</li>
            <li>
              - NEW: Settings page, configure some settings of your emulators
              within EmuDeck without the need of reinstall everything
            </li>
            <li>- NEW: Reset page, EmuDeck back to default settings</li>
            <li>- NEW: Guides, learn more about your Emulators</li>
            <li>- NEW: Default images for SRM to try and speed up downloads</li>
            <li>- NEW: SaveSync. Backup your saved games to the cloud</li>
            <li>- NEW: DooM SRM Parser</li>
            <li>- NEW: BiosChecker</li>
            <li>- NEW: RetroAchievements HardCore mode</li>
            <li>- NEW: SwanStation Core</li>
            <li>- FIX: Updated config files for Duckstation</li>
            <li>- FIX: RetroArch Analog Stick for GB & GBC</li>
            <li>- FIX: Uninstaller fixes</li>
            <li>- FIX: PCSX2-QT Config Changes</li>
            <li>- FIX: Yuzu Config Changes</li>
            <li>- NEW: Vita3K and ScummVM Emulators</li>
            <li>
              - IMPROVEMENT: Cheats folder for RetroArch on Emulation to avoid
              RA save bug
            </li>
            <li>- IMPROVEMENT: PS1 bios automatic renaming to lowercase</li>
            <li>- IMPROVEMENT: No more cluttered icons on desktop mode</li>
            <li>- IMPROVEMENT: New emulator's hotkeys</li>
            <li>- IMPROVEMENT: Performance optimizations for all systems</li>
            <li>
              - IMPROVEMENT: Better Dolphin Performance on Anbernic Win600
            </li>
            <li>- IMPROVEMENT: Better Steam Input definitions</li>
            <li>- IMPROVEMENT: Better Saturn Performance using Beetle Core</li>

            <li>
              <strong>- And several small bug fixes</strong>
            </li>
          </ul>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default ChangeLog;
