import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Notification from 'components/molecules/Notification/Notification';

import {
  ar43,
  ar32,
  ar43s,
  ar87s,
  ar32s,
  ar433d,
  ar323d,
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
  noir1,
  noir2,
  modern1,
  modern2,
  rbsimple1,
  rbsimple2,
  modern,
  imgYES,
  imgNO,
  none,
  backup,
  sync,
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
  onClickHomeBrew,
  onClickCloudSync,
  notificationText,
  showNotification,
}) {
  const { state, setState } = useContext(GlobalContext);
  const {
    ar,
    bezels,
    shaders,
    theme,
    autosave,
    homebrewGames,
    system,
    cloudSync,
    cloudSyncStatus,
    cloudSyncType,
  } = state;
  const ipcChannel = window.electron.ipcRenderer;
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
          <li>
            <div css="selector-menu--mini">
              <div className="selector-menu__img">
                <img
                  src={sync}
                  className={cloudSyncStatus === false && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={none}
                  className={cloudSyncStatus === true && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options">
                <p>CloudSync</p>
                <ul>
                  <li onClick={() => onClickCloudSync(false)}>
                    <Card css={cloudSyncStatus === false && 'is-selected'}>
                      <span className="h3">Off</span>
                    </Card>
                  </li>
                  <li onClick={() => onClickCloudSync(true)}>
                    <Card css={cloudSyncStatus === true && 'is-selected'}>
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
            </div>
          </li>
          <li>
            <SelectorMenu
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
  onClickHomeBrew: PropTypes.func,
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
  onClickAutoSave: '',
  onClickHomeBrew: '',
  onClickCloudSync: '',
  notificationText: '',
  showNotification: '',
};

export default Settings;
