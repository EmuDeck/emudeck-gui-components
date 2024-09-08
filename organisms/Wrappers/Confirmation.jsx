import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';
import { Img } from 'getbasecore/Atoms';

import { iconSuccess, iconDanger } from 'components/utils/images/icons';

function Confirmation() {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const {
    storagePath,
    installEmus,
    overwriteConfigEmus,
    autosave,
    achievements,
    bezels,
    ar,
    shaders,
    theme,
    system,
    resolutions,
  } = state;
  const installEmusArray = Object.values(installEmus);
  const overwriteConfigEmusArray = Object.values(overwriteConfigEmus);
  return (
    <Main>
      <div className="container--grid">
        <div data-col-sm="6">
          <p>
            Your installation path:{' '}
            {storagePath === '$HOME' ? 'User Home Folder' : storagePath}
          </p>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <span className="h5">EmuDeck will install:</span>
              <ul>
                {installEmusArray.map((item) => {
                  if (!item.status) {
                    return;
                  }
                  if (
                    item.id === 'ares' ||
                    item.id === 'pegasus' ||
                    item.id === 'srm'
                  ) {
                    return;
                  }
                  if (system === 'win32') {
                    if (item.id === 'rmg') {
                      return;
                    }
                    if (item.id === 'model2') {
                      return;
                    }
                    if (item.id === 'supermodel') {
                      return;
                    }
                  }
                  // eslint-disable-next-line consistent-return
                  return <li>{item.name}</li>;
                })}
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <span className="h5">EmuDeck will configure:</span>
              <ul>
                {installEmusArray.map((item) => {
                  if (!item.status) {
                    return;
                  }
                  if (
                    item.id === 'ares' ||
                    item.id === 'pegasus' ||
                    item.id === 'srm'
                  ) {
                    return;
                  }
                  if (system === 'win32') {
                    if (item.id === 'rmg') {
                      return;
                    }
                    if (item.id === 'model2') {
                      return;
                    }
                    if (item.id === 'supermodel') {
                      return;
                    }
                  }
                  // eslint-disable-next-line consistent-return
                  return <li>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div data-col-sm="6">
          <Card>
            <span class="h5">Your customizations</span>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <ul className="list list--customization aspect-ratio">
                <li>
                  <strong>Aspect Ratio</strong>
                </li>
                <li>
                  Sega Classic{' '}
                  <strong className="list--customization__pill">
                    {ar.sega}
                  </strong>
                </li>
                <li>
                  Nintendo Classic{' '}
                  <strong className="list--customization__pill">
                    {ar.snes}
                  </strong>
                </li>
                <li>
                  Classic 3D Games{' '}
                  <strong className="list--customization__pill">
                    {ar.classic3d}
                  </strong>
                </li>
                <li>
                  Gamecube{' '}
                  <strong className="list--customization__pill">
                    {ar.dolphin}
                  </strong>
                </li>
              </ul>
              <ul className="list list--customization other">
                <li>
                  <strong>Other</strong>
                </li>
                <li>
                  AutoSave
                  {autosave ? (
                    <div className="list--customization__pill">
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    </div>
                  ) : (
                    <div className="list--customization__pill">
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    </div>
                  )}{' '}
                </li>
                <li>
                  RetroAchievements
                  {achievements.token ? (
                    <div className="list--customization__pill">
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    </div>
                  ) : (
                    <div className="list--customization__pill">
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    </div>
                  )}{' '}
                </li>
                <li>
                  Bezels
                  {bezels ? (
                    <div className="list--customization__pill">
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    </div>
                  ) : (
                    <div className="list--customization__pill">
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    </div>
                  )}{' '}
                </li>
                <li>
                  Handhelds Shader
                  {shaders.handhelds ? (
                    <div className="list--customization__pill">
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    </div>
                  ) : (
                    <div className="list--customization__pill">
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    </div>
                  )}{' '}
                </li>
                <li>
                  Classic 2D Shader
                  {shaders.classic ? (
                    <div className="list--customization__pill">
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    </div>
                  ) : (
                    <div className="list--customization__pill">
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    </div>
                  )}{' '}
                </li>
                <li>
                  Classic 3D Shader
                  {shaders.classic3d ? (
                    <div className="list--customization__pill">
                      <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                    </div>
                  ) : (
                    <div className="list--customization__pill">
                      <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                    </div>
                  )}{' '}
                </li>
              </ul>
              <ul className="list list--customization resolutions">
                <li>
                  <strong>Resolutions</strong>
                </li>
                <li>
                  GameCube + Wii:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.dolphin}
                  </strong>
                </li>
                <li>
                  PlayStation 1:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.duckstation}
                  </strong>
                </li>
                <li>
                  PlayStation 2:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.pcsx2}
                  </strong>
                </li>
                <li>
                  PlayStation32:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.rpcs3}
                  </strong>
                </li>
                <li>
                  Switch:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.yuzu}
                  </strong>
                </li>
                <li>
                  Nintendo DS:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.melonds}
                  </strong>
                </li>
                <li>
                  Nintendo 3DS:{' '}
                  <strong className="list--customization__pill">
                    {resolutions.lime3ds}
                  </strong>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </Main>
  );
}

export default Confirmation;
