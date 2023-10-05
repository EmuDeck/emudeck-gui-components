import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Notification from 'components/molecules/Notification/Notification';

import {
  ar43,
  ar32,
  ar43s,
  ar87s,
  ar433d,
  ar1693d,
  ar43gc,
  ar169gc,
  imgBezels,
  imgNoBezels,
  lcdon,
  lcdoff,
  lcd3don,
  lcd3doff,
  lcdonH,
  lcdoffH,
  saveon,
  saveoff,
  none,
  sync,
  steamUI,
  winDesktop,
} from 'components/utils/images/images';

function Settings({
  onClickBezel,
  onClickSega,
  onClickSNES,
  onClick3D,
  onClickGC,
  onClickCRT,
  onClickCRT3D,
  onClickLCD,
  onClickAutoSave,
  onClickBoot,
  onClickCloudSync,
  notificationText,
  showNotification,
}) {
  const { state } = useContext(GlobalContext);
  const {
    ar,
    bezels,
    shaders,
    autosave,
    system,
    cloudSyncStatus,
    gamemode,
    branch,
  } = state;

  return (
    <>
      <Notification css={showNotification ? 'is-animated' : 'nope'}>
        {notificationText}
      </Notification>
      <p className="lead">
        Select an option to automatically apply it to your system. You do not
        need to do an EmuDeck Custom Update to apply these settings.
      </p>
      <Main>
        <ul className="list-grid">
          {system === 'win33' && (
            <li>
              <SelectorMenu
                title="Boot Mode"
                css="selector-menu--mini"
                imgs={[
                  [steamUI, gamemode === false ? 'is-hidden' : ''],
                  [winDesktop, gamemode === true ? 'is-hidden' : ''],
                ]}
                options={[
                  [
                    () => onClickBoot(true),
                    gamemode === true ? 'is-selected' : '',
                    'SteamUI',
                    '',
                    true,
                  ],
                  [
                    () => onClickBoot(false),
                    gamemode === false ? 'is-selected' : '',
                    'Desktop',
                    '',
                    true,
                  ],
                ]}
              />
            </li>
          )}
          <li>
            <SelectorMenu
              title="AutoSave"
              css="selector-menu--mini"
              imgs={[
                [saveoff, autosave === true ? 'is-hidden' : ''],
                [saveon, autosave === false ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickAutoSave(false),
                  autosave === false ? 'is-selected' : '',
                  'Off',
                  '',
                  true,
                ],
                [
                  () => onClickAutoSave(true),
                  autosave === true ? 'is-selected' : '',
                  'On',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          {branch.includes('early') && (
            <li>
              <SelectorMenu
                title="CloudSync"
                css="selector-menu--mini"
                imgs={[
                  [sync, cloudSyncStatus === false ? 'is-hidden' : ''],
                  [none, cloudSyncStatus === true ? 'is-hidden' : ''],
                ]}
                options={[
                  [
                    () => onClickCloudSync(false),
                    cloudSyncStatus === false ? 'is-selected' : '',
                    'Off',
                    '',
                    true,
                  ],
                  [
                    () => onClickCloudSync(true),
                    cloudSyncStatus === true ? 'is-selected' : '',
                    'On',
                    '',
                    true,
                  ],
                ]}
              />
            </li>
          )}
          <li>
            <SelectorMenu
              title="Bezels"
              css="selector-menu--mini"
              imgs={[
                [imgBezels, bezels === false ? 'is-hidden' : ''],
                [imgNoBezels, bezels === true ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickBezel(false),
                  bezels === false ? 'is-selected' : '',
                  'Off',
                  '',
                  true,
                ],
                [
                  () => onClickBezel(true),
                  bezels === true ? 'is-selected' : '',
                  'On',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              title="Sega Classic AR"
              css="selector-menu--mini"
              imgs={[
                [ar43, ar.sega !== 43 ? 'is-hidden' : ''],
                [ar32, ar.sega !== 32 ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickSega(43),
                  ar.sega === 43 ? 'is-selected' : '',
                  '4:3',
                  '',
                  true,
                ],
                [
                  () => onClickSega(32),
                  ar.sega === 32 ? 'is-selected' : '',
                  '3:2',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              title="Nintendo Classic AR"
              css="selector-menu--mini"
              imgs={[
                [ar87s, ar.snes !== 87 ? 'is-hidden' : ''],
                [ar43s, ar.snes !== 43 ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickSNES(87),
                  ar.snes === 87 ? 'is-selected' : '',
                  '8:7',
                  '',
                  true,
                ],
                [
                  () => onClickSNES(43),
                  ar.snes === 43 ? 'is-selected' : '',
                  '4:3',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              title="3D Classics AR"
              css="selector-menu--mini"
              imgs={[
                [ar1693d, ar.classic3d !== 169 ? 'is-hidden' : ''],
                [ar433d, ar.classic3d !== 43 ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClick3D(169),
                  ar.classic3d === 169 ? 'is-selected' : '',
                  '16:9',
                  '',
                  true,
                ],
                [
                  () => onClick3D(43),
                  ar.classic3d === 43 ? 'is-selected' : '',
                  '4:3',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          {system !== 'darwin' && (
            <li>
              <SelectorMenu
                title="GameCube AR"
                css="selector-menu--mini"
                imgs={[
                  [ar169gc, ar.dolphin !== 169 ? 'is-hidden' : ''],
                  [ar43gc, ar.dolphin !== 43 ? 'is-hidden' : ''],
                ]}
                options={[
                  [
                    () => onClickGC(169),
                    ar.dolphin === 169 ? 'is-selected' : '',
                    '16:9',
                    '',
                    true,
                  ],
                  [
                    () => onClickGC(43),
                    ar.dolphin === 43 ? 'is-selected' : '',
                    '4:3',
                    '',
                    true,
                  ],
                ]}
              />
            </li>
          )}
          <li>
            <SelectorMenu
              title="LCD Handhelds"
              css="selector-menu--mini"
              imgs={[
                [lcdonH, shaders.handhelds !== true ? 'is-hidden' : ''],
                [lcdoffH, shaders.handhelds !== false ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickLCD(false),
                  shaders.handhelds === false ? 'is-selected' : '',
                  'Off',
                  '',
                  true,
                ],
                [
                  () => onClickLCD(true),
                  shaders.handhelds === true ? 'is-selected' : '',
                  'On',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              title="CRT 2D"
              css="selector-menu--mini"
              imgs={[
                [lcdon, shaders.classic !== true ? 'is-hidden' : ''],
                [lcdoff, shaders.classic !== false ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickCRT(false),
                  shaders.classic === false ? 'is-selected' : '',
                  'Off',
                  '',
                  true,
                ],
                [
                  () => onClickCRT(true),
                  shaders.classic === true ? 'is-selected' : '',
                  'On',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              title="CRT 3D"
              css="selector-menu--mini"
              imgs={[
                [lcd3don, shaders.classic3d !== true ? 'is-hidden' : ''],
                [lcd3doff, shaders.classic3d !== false ? 'is-hidden' : ''],
              ]}
              options={[
                [
                  () => onClickCRT3D(false),
                  shaders.classic3d === false ? 'is-selected' : '',
                  'Off',
                  '',
                  true,
                ],
                [
                  () => onClickCRT3D(true),
                  shaders.classic3d === true ? 'is-selected' : '',
                  'On',
                  '',
                  true,
                ],
              ]}
            />
          </li>
        </ul>
      </Main>
    </>
  );
}

Settings.propTypes = {
  onClickBezel: PropTypes.func,
  onClickSega: PropTypes.func,
  onClickSNES: PropTypes.func,
  onClick3D: PropTypes.func,
  onClickGC: PropTypes.func,
  onClickCRT: PropTypes.func,
  onClickCRT3D: PropTypes.func,
  onClickLCD: PropTypes.func,
  onClickAutoSave: PropTypes.func,
  onClickBoot: PropTypes.func,
  onClickCloudSync: PropTypes.func,
  notificationText: PropTypes.string,
  showNotification: PropTypes.bool,
};

Settings.defaultProps = {
  onClickBezel: '',
  onClickSega: '',
  onClickSNES: '',
  onClick3D: '',
  onClickGC: '',
  onClickCRT: '',
  onClickCRT3D: '',
  onClickLCD: '',
  onClickBoot: '',
  onClickAutoSave: '',
  onClickHomeBrew: '',
  onClickCloudSync: '',
  notificationText: '',
  showNotification: '',
};

export default Settings;
