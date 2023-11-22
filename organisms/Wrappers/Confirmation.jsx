import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import { Img } from 'getbasecore/Atoms';

import { iconSuccess, iconDanger } from 'components/utils/images/images';

function Confirmation() {
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
        <div data-col-sm="3">
          <span className="h5">EmuDeck will install:</span>
          <ul>
            {installEmusArray.map((item) => {
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
              }
              // eslint-disable-next-line consistent-return
              return (
                <li>
                  {item.status ? (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                  )}{' '}
                  - {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div data-col-sm="3">
          <span className="h5">EmuDeck will configure:</span>
          <ul>
            {overwriteConfigEmusArray.map((item) => {
              if (item.id === 'ares' || item.id === 'pegasus') {
                return;
              }
              if (system === 'win32') {
                if (item.id === 'rmg') {
                  return;
                }
              }

              if (item.id === 'pegasus' || item.id === 'ares') {
                return;
              }
              // eslint-disable-next-line consistent-return
              return (
                <li>
                  {item.status ? (
                    <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                  ) : (
                    <Img src={iconDanger} css="icon icon--xs" alt="KO" />
                  )}{' '}
                  - {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div data-col-sm="3">
          <span className="h5">Your Customizations:</span>

          <ul>
            <li>
              {autosave ? (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconDanger} css="icon icon--xs" alt="KO" />
              )}{' '}
              - AutoSave{' '}
            </li>
            <li>
              {achievements.token ? (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconDanger} css="icon icon--xs" alt="KO" />
              )}{' '}
              - RetroAchievements
            </li>
            <li>
              {bezels ? (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconDanger} css="icon icon--xs" alt="KO" />
              )}{' '}
              - Bezels
            </li>
            <li>
              {shaders.handhelds ? (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconDanger} css="icon icon--xs" alt="KO" />
              )}{' '}
              - Handhelds Shader
            </li>
            <li>
              {shaders.classic ? (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconDanger} css="icon icon--xs" alt="KO" />
              )}{' '}
              - Classic 2D Shader
            </li>
            <li>
              {shaders.classic3d ? (
                <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
              ) : (
                <Img src={iconDanger} css="icon icon--xs" alt="KO" />
              )}{' '}
              - Classic 3D Shader
            </li>
            <li>
              Sega Classic AR: <strong>{ar.sega}</strong>
            </li>
            <li>
              Nintendo Classic AR: <strong>{ar.snes}</strong>
            </li>
            <li>
              Classic 3D Games AR: <strong>{ar.classic3d}</strong>
            </li>
            <li>
              Gamecube AR: <strong>{ar.dolphin}</strong>
            </li>
            <li>
              GameCube and Wii Resolution:{' '}
              <strong>{resolutions.dolphin}</strong>
            </li>
            <li>
              PlayStation 1 Resolution:{' '}
              <strong>{resolutions.duckstation}</strong>
            </li>
            <li>
              PlayStation 2 Resolution: <strong>{resolutions.pcsx2}</strong>
            </li>
            <li>
              PlayStation32 Resolution: <strong>{resolutions.rpcs3}</strong>
            </li>
            <li>
              Switch Resolution: <strong>{resolutions.yuzu}</strong>
            </li>
            <li>
              Nintendo DS Resolution: <strong>{resolutions.melonds}</strong>
            </li>
            <li>
              Nintendo 3DS Resolution: <strong>{resolutions.citra}</strong>
            </li>
          </ul>
        </div>
        <div data-col-sm="3">
          <span className="h5">Your Installation Path:</span>
          <ul>
            <li>
              {storagePath === '$HOME' ? 'User Home Folder' : storagePath}
            </li>
          </ul>
        </div>
      </div>
    </Main>
  );
}

export default Confirmation;
