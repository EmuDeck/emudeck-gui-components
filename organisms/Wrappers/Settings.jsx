import { useTranslation } from 'react-i18next';
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
  abxy,
  bayx,
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
  onClickControllerLayoutSet,
}) {
  const { t, i18n } = useTranslation();
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
    controllerLayout,
  } = state;

  return (
    <>
      <Notification css={showNotification ? 'is-animated' : 'nope'}>
        {notificationText}
      </Notification>
      <Main>
        <ul className="list-grid">
          <li>
            <SelectorMenu
              toggle
              title="AutoSave"
              css="selector-menu--mini"
              imgs={[
                [saveoff, autosave === true ? 'is-hidden' : ''],
                [saveon, autosave === false ? 'is-hidden' : ''],
              ]}
              enabled={autosave === false ? false : true}
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
          {system !== 'win32' && (
            <li>
              <SelectorMenu
                toggle
                title="Controller Layout"
                css="selector-menu--mini"
                imgs={[
                  [abxy, controllerLayout === 'baxy' ? 'is-hidden' : ''],
                  [bayx, controllerLayout === 'abxy' ? 'is-hidden' : ''],
                ]}
                enabled={controllerLayout === 'baxy' ? false : true}
                options={[
                  [
                    () => onClickControllerLayoutSet('baxy'),
                    controllerLayout === 'baxy' ? 'is-selected' : '',
                    'Off',
                    '',
                    true,
                  ],
                  [
                    () => onClickControllerLayoutSet('abxy'),
                    controllerLayout === 'abxy' ? 'is-selected' : '',
                    'On',
                    '',
                    true,
                  ],
                ]}
              />
            </li>
          )}
          {(branch.includes('early') || branch === 'dev') && (
            <li>
              <SelectorMenu
                toggle
                title="CloudSync"
                css="selector-menu--mini"
                imgs={[
                  [sync, cloudSyncStatus === false ? 'is-hidden' : ''],
                  [none, cloudSyncStatus === true ? 'is-hidden' : ''],
                ]}
                enabled={cloudSyncStatus === false ? false : true}
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
              toggle
              title="Bezels"
              css="selector-menu--mini"
              imgs={[
                [imgBezels, bezels === false ? 'is-hidden' : ''],
                [imgNoBezels, bezels === true ? 'is-hidden' : ''],
              ]}
              enabled={bezels === false ? false : true}
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
              toggle
              title="Sega Classic AR"
              css="selector-menu--mini"
              imgs={[
                [ar43, ar.sega !== 43 ? 'is-hidden' : ''],
                [ar32, ar.sega !== 32 ? 'is-hidden' : ''],
              ]}
              enabled={ar.sega === 43 ? false : true}
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
              toggle
              title="Nintendo Classic AR"
              css="selector-menu--mini"
              imgs={[
                [ar87s, ar.snes !== 87 ? 'is-hidden' : ''],
                [ar43s, ar.snes !== 43 ? 'is-hidden' : ''],
              ]}
              enabled={ar.snes === 43 ? false : true}
              options={[
                [
                  () => onClickSNES(43),
                  ar.snes === 43 ? 'is-selected' : '',
                  '4:3',
                  '',
                  true,
                ],
                [
                  () => onClickSNES(87),
                  ar.snes === 87 ? 'is-selected' : '',
                  '8:7',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              toggle
              title="3D Classics AR"
              css="selector-menu--mini"
              imgs={[
                [ar1693d, ar.classic3d !== 169 ? 'is-hidden' : ''],
                [ar433d, ar.classic3d !== 43 ? 'is-hidden' : ''],
              ]}
              enabled={ar.classic3d === 43 ? false : true}
              options={[
                [
                  () => onClick3D(43),
                  ar.classic3d === 43 ? 'is-selected' : '',
                  '4:3',
                  '',
                  true,
                ],
                [
                  () => onClick3D(169),
                  ar.classic3d === 169 ? 'is-selected' : '',
                  '16:9',
                  '',
                  true,
                ],
                ,
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              toggle
              title="GameCube AR"
              css="selector-menu--mini"
              imgs={[
                [ar169gc, ar.dolphin !== 169 ? 'is-hidden' : ''],
                [ar43gc, ar.dolphin !== 43 ? 'is-hidden' : ''],
              ]}
              enabled={ar.dolphin === 43 ? false : true}
              options={[
                [
                  () => onClickGC(43),
                  ar.dolphin === 43 ? 'is-selected' : '',
                  '4:3',
                  '',
                  true,
                ],
                [
                  () => onClickGC(169),
                  ar.dolphin === 169 ? 'is-selected' : '',
                  '16:9',
                  '',
                  true,
                ],
              ]}
            />
          </li>
          <li>
            <SelectorMenu
              toggle
              title="LCD Handhelds"
              css="selector-menu--mini"
              imgs={[
                [lcdonH, shaders.handhelds !== true ? 'is-hidden' : ''],
                [lcdoffH, shaders.handhelds !== false ? 'is-hidden' : ''],
              ]}
              enabled={shaders.handhelds === false ? false : true}
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
              toggle
              title="CRT 2D"
              css="selector-menu--mini"
              imgs={[
                [lcdon, shaders.classic !== true ? 'is-hidden' : ''],
                [lcdoff, shaders.classic !== false ? 'is-hidden' : ''],
              ]}
              enabled={shaders.classic === false ? false : true}
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
              toggle
              title="CRT 3D"
              css="selector-menu--mini"
              imgs={[
                [lcd3don, shaders.classic3d !== true ? 'is-hidden' : ''],
                [lcd3doff, shaders.classic3d !== false ? 'is-hidden' : ''],
              ]}
              enabled={shaders.classic3d === false ? false : true}
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
          <li />
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
  onClickControllerLayoutSet: PropTypes.func,
  onClickBoot: PropTypes.func,
  onClickCloudSync: PropTypes.func,
  notificationText: PropTypes.string,
  showNotification: PropTypes.bool,
};

export default Settings;
