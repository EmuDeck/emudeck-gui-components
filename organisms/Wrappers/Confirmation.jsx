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
            {t('ConfirmationPage.installationPath')}{' '}
            {storagePath === '$HOME'
              ? t('ConfirmationPage.userHomeFolder')
              : storagePath}
          </p>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <span className="h5">{t('ConfirmationPage.willInstall')}</span>
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
              <span className="h5">{t('ConfirmationPage.willConfigure')}</span>
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
            <span className="h5">{t('ConfirmationPage.customizations')}</span>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <ul className="list list--customization aspect-ratio">
                <li>
                  <strong>{t('ConfirmationPage.aspectRatio')}</strong>
                </li>
                <li>
                  {t('ConfirmationPage.segaClassic')}{' '}
                  <strong className="list--customization__pill">
                    {ar.sega == '43' ? '4:3' : '3:2'}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.nintendoClassic')}{' '}
                  <strong className="list--customization__pill">
                    {ar.snes == '43' ? '4:3' : '8:7'}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.classic3dGames')}{' '}
                  <strong className="list--customization__pill">
                    {ar.classic3d == '43' ? '4:3' : '16:9'}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.gamecube')}{' '}
                  <strong className="list--customization__pill">
                    {ar.dolphin == '43' ? '4:3' : '16:9'}
                  </strong>
                </li>
              </ul>
              <ul className="list list--customization other">
                <li>
                  <strong>{t('ConfirmationPage.other')}</strong>
                </li>
                <li>
                  {t('ConfirmationPage.autoSave')}
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
                  {t('ConfirmationPage.retroAchievements')}
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
                  {t('ConfirmationPage.bezels')}
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
                  {t('ConfirmationPage.handheldsShader')}
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
                  {t('ConfirmationPage.classic2dShader')}
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
                  {t('ConfirmationPage.classic3dShader')}
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
                  <strong>{t('ConfirmationPage.resolutions')}</strong>
                </li>
                <li>
                  {t('ConfirmationPage.resGamecubeWii')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.dolphin}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.resPs1')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.duckstation}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.resPs2')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.pcsx2}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.resPs3')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.rpcs3}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.resSwitch')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.yuzu}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.resNds')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.melonds}
                  </strong>
                </li>
                <li>
                  {t('ConfirmationPage.resN3ds')}{' '}
                  <strong className="list--customization__pill">
                    {resolutions.azahar}
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
