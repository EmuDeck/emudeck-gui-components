import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import { BtnSimple, BtnGroup } from 'getbasecore/Atoms';
import { Table, Alert } from 'getbasecore/Molecules';
import Main from 'components/organisms/Main/Main';
import './emudetail.scss';
import {
  imgdefault,
  imgra,
  imgares,
  imgdolphin,
  imgprimehack,
  imgppsspp,
  imgduckstation,
  imgazahar,
  imgpcsx2,
  imgrpcs3,
  imgyuzu,
  imgeden,
  imgcitron,
  imgsuyu,
  imgryujinx,
  imgcemu,
  imgxemu,
  imgmame,
  imgvita3k,
  imgflycast,
  imgxenia,
  imgmgba,
  imgsrm,
  imgFrontESDE,
  imgFrontPegasus,
  imgrmg,
  imgscummvm,
  imgsupermodel,
  imgmodel2,
  imgbigpemu,
  imgmelonds,
  imgshadps4,
} from 'components/utils/images/images';

const ipcChannel = window.electron.ipcRenderer;
function EmuDetail(props) {
  const { t, i18n } = useTranslation();
  const {
    onClick,
    onClickInstall,
    onClickUninstall,
    onClickReInstall,
    onClickMigrate,
    onClickCustomParser,
    onClickOptionalParser,
    emuData,
    installEmus,
    disableResetButton,
    hideInstallButton,
    updateAvailable,
    yuzuEAaskToken,
    onClickHotkeys,
    onClickControls,
    onClickParsers,
    onClickRemoveParsers,
  } = props;
  const [stateImg, setStateImg] = useState({
    img: imgdefault,
  });
  const { img } = stateImg;

  const [statePage, setStatePage] = useState({
    disableInstallButton: false,
  });

  const { disableInstallButton } = statePage;

  const { state } = useContext(GlobalContext);
  const { system, mode } = state;

  useEffect(() => {
    switch (emuData.id) {
      case 'ra':
        setStateImg({ img: imgra });
        break;
      case 'dolphin':
        setStateImg({ img: imgdolphin });
        break;
      case 'primehack':
        setStateImg({ img: imgprimehack });
        break;
      case 'ppsspp':
        setStateImg({ img: imgppsspp });
        break;
      case 'duckstation':
        setStateImg({ img: imgduckstation });
        break;
      case 'melonds':
        setStateImg({ img: imgmelonds });
        break;
      case 'azahar':
        setStateImg({ img: imgazahar });
        break;
      case 'pcsx2':
        setStateImg({ img: imgpcsx2 });
        break;
      case 'rpcs3':
        setStateImg({ img: imgrpcs3 });
        break;
      case 'yuzu':
        setStateImg({ img: imgyuzu });
        break;
      case 'eden':
        setStateImg({ img: imgeden });
        break;
      case 'citron':
        setStateImg({ img: imgcitron });
        break;
      case 'suyu':
        setStateImg({ img: imgsuyu });
        break;
      case 'ryujinx':
        setStateImg({ img: imgryujinx });
        break;
      case 'cemu':
        setStateImg({ img: imgcemu });
        break;
      case 'xemu':
        setStateImg({ img: imgxemu });
        break;
      case 'mame':
        setStateImg({ img: imgmame });
        break;
      case 'vita3k':
        setStateImg({ img: imgvita3k });
        break;
      case 'flycast':
        setStateImg({ img: imgflycast });
        break;
      case 'scummvm':
        setStateImg({ img: imgscummvm });
        break;
      case 'supermodel':
        setStateImg({ img: imgsupermodel });
        break;
      case 'xenia':
        setStateImg({ img: imgxenia });
        break;
      case 'mgba':
        setStateImg({ img: imgmgba });
        break;
      case 'srm':
        setStateImg({ img: imgsrm });
        break;
      case 'esde':
        setStateImg({ img: imgFrontESDE });
        break;
      case 'pegasus':
        setStateImg({ img: imgFrontPegasus });
        break;
      case 'rmg':
        setStateImg({ img: imgrmg });
        break;
      case 'ares':
        setStateImg({ img: imgares });
        break;
      case 'model2':
        setStateImg({ img: imgmodel2 });
        break;
      case 'bigpemu':
        setStateImg({ img: imgbigpemu });
        break;
      case 'shadps4':
        setStateImg({ img: imgshadps4 });
        break;

      default:
        setStateImg({ img: imgdefault });
        break;
    }
  }, [emuData]);

  const checkInstallation = (emulator) => {
    const name = emuData.code;

    ipcChannel.sendMessage('emudeck', [
      `${name}_IsInstalled|||${name}_IsInstalled`,
    ]);
    ipcChannel.once(`${name}_IsInstalled`, (status) => {
      let { stdout } = status;

      stdout = stdout.replace('\n', '');

      if (stdout.includes('true')) {
        setStatePage({
          ...statePage,
          disableInstallButton: true,
        });
      } else {
        setStatePage({
          ...statePage,
          disableInstallButton: false,
        });
      }
    });
  };

  const biosText = (name) => {
    // eslint-disable-next-line react/destructuring-assignment
    const nameProp = props[`${name}`];
    switch (nameProp) {
      case true:
        return 'detected!';
      case false:
        return 'missing!';
      case null:
        return '...searching...';
      default:
        return '...searching...';
    }
  };

  const biosCSS = (name) => {
    // eslint-disable-next-line react/destructuring-assignment
    const nameProp = props[`${name}`];

    switch (nameProp) {
      case true:
        return 'alert--success ';
      case false:
        return 'alert--danger ';
      case null:
        return ' null';
      default:
        return ' nothing';
    }
  };

  let biosName;
  const biosComponents = emuData.bios.map((item) => {
    switch (item) {
      case 'ps1':
        biosName = 'Playstation 1';
        break;
      case 'ps2':
        biosName = 'Playstation 2';
        break;
      case 'segacd':
        biosName = 'SegaCD';
        break;
      case 'saturn':
        biosName = 'Saturn';
        break;
      case 'dreamcast':
        biosName = 'Dreamcast';
        break;
      case 'nds':
        biosName = 'Nintendo DS';
        break;
      case 'nswitch':
        biosName = 'Nintendo Switch - Yuzu';
        break;
      case 'eswitch':
        biosName = 'Nintendo Switch - Eden';
        break;
      case 'rswitch':
        biosName = 'Nintendo Switch - Ryujinx';
        break;
      case 'cswitch':
        biosName = 'Nintendo Switch - Citron';
        break;
      default:
        biosName = 'System';
        break;
    }

    return (
      <li key={item}>
        <Alert css={`alert--mini ${biosCSS(item)}`}>
          {biosName} {t('EmulatorsDetailPage.bios')} {biosText(item)}
        </Alert>
      </li>
    );
  });

  const biosHTML = <ul className="list-two-cols">{biosComponents}</ul>;

  useEffect(() => {
    checkInstallation(installEmus);
  }, [installEmus]);

  return (
    <Main>
      {emuData.id && (
        <div className="container--grid">
          <div data-col-sm="2">
            <img style={{ borderRadius: '100%' }} src={img} alt="logo" />
          </div>

          <div data-col-sm="7">
            {emuData.description && (
              <>
                <p className="h5">{t('general.description')}</p>
                <p>{emuData.description}</p>
              </>
            )}
            {emuData.systems && (
              <>
                <p className="h5">{t('EmulatorsDetailPage.emulatedSystems')}</p>
                <p>{emuData.systems}</p>
              </>
            )}
            {emuData.special_configuration && (
              <>
                <p className="h5">
                  {t('EmulatorsDetailPage.specialConfiguration')}
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${emuData.special_configuration}`,
                  }}
                />
              </>
            )}

            {emuData.bios.length > 0 && (
              <>
                <p className="h5">{t('EmulatorsDetailPage.biosNeeded')}</p>
                <p>{biosHTML}</p>
              </>
            )}
          </div>
          <div data-col-sm="3">
            {emuData.id !== 'yuzu' &&
              emuData.id !== 'citron' &&
              emuData.id !== 'eden' && (
                <p className="h5">{t('EmulatorsDetailPage.actions')}</p>
              )}
            <div className="emudetail__actions">
              {!disableInstallButton &&
                emuData.id === 'yuzu' &&
                emuData.id === 'citron' &&
                emuData.id === 'eden' && (
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('aria.updateOrReset')}
                  >
                    {t('EmulatorsDetailPage.emulatorNotFound')}
                  </BtnSimple>
                )}

              {disableInstallButton && (
                <BtnSimple
                  css={updateAvailable ? 'btn-simple--1' : 'btn-simple--2'}
                  type="button"
                  aria={t('aria.updateOrReset')}
                  onClick={() =>
                    onClick(emuData.code, emuData.name, emuData.id)
                  }
                  disabled={disableResetButton}
                >
                  {updateAvailable &&
                    t('EmulatorsDetailPage.updateConfiguration')}
                  {updateAvailable ||
                    t('EmulatorsDetailPage.resetConfiguration')}
                </BtnSimple>
              )}

              {!disableInstallButton &&
                emuData.id !== 'yuzu' &&
                emuData.id !== 'citron' &&
                emuData.id !== 'eden' && (
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('general.install')}
                    disabled={disableInstallButton}
                    onClick={() => onClickInstall(emuData.id, emuData.code)}
                  >
                    {t('general.install')}
                  </BtnSimple>
                )}
              {disableInstallButton &&
                emuData.id !== 'yuzu' &&
                emuData.id !== 'citron' &&
                emuData.id !== 'eden' && (
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.reinstallUpdate')}
                    disabled={hideInstallButton}
                    onClick={() => onClickReInstall(emuData.id, emuData.code)}
                  >
                    {t('EmulatorsDetailPage.reinstallUpdate')}
                  </BtnSimple>
                )}
              {disableInstallButton &&
                emuData.id !== 'yuzu' &&
                emuData.id !== 'citron' &&
                emuData.id !== 'eden' && (
                  <BtnSimple
                    css="btn-simple--3"
                    type="button"
                    aria={t('general.uninstall')}
                    disabled={false}
                    onClick={() => onClickUninstall(emuData.id, emuData.code)}
                  >
                    {t('general.uninstall')}
                  </BtnSimple>
                )}
              {emuData.id === 'srm' && (
                <>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('aria.goBack')}
                    onClick={() => {
                      onClickRemoveParsers();
                    }}
                  >
                    {t('EmulatorsDetailPage.removeCache')}
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('aria.goBack')}
                    onClick={() => {
                      onClickParsers();
                    }}
                  >
                    {t('EmulatorsDetailPage.standaloneParsers')}
                  </BtnSimple>
                  {/* <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('aria.goBack')}
                    onClick={() => {
                      onClickOptionalParser();
                    }}
                  >
                    Add optional parsers
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('aria.goBack')}
                    onClick={() => {
                      onClickCustomParser();
                    }}
                  >
                    Open custom parsers
                  </BtnSimple> */}
                </>
              )}
            </div>

            <div className="emudetail__actions">
              {(emuData.id === 'primehack' ||
                emuData.id === 'pcsx2' ||
                emuData.id === 'yuzu' ||
                emuData.id === 'eden' ||
                emuData.id === 'citron' ||
                emuData.id === 'cemu' ||
                emuData.id === 'dolphin' ||
                emuData.id === 'ra') && (
                <>
                  {emuData.id === 'ra' || emuData.id === 'dolphin' || (
                    <BtnSimple
                      css="btn-simple--2"
                      type="button"
                      aria={t('EmulatorsDetailPage.controls')}
                      onClick={() => onClickControls(emuData.id, emuData.code)}
                    >
                      {t('EmulatorsDetailPage.controls')}
                    </BtnSimple>
                  )}

                  {(emuData.id === 'ra' ||
                    emuData.id === 'primehack' ||
                    emuData.id === 'pcsx2') && (
                    <BtnSimple
                      css="btn-simple--2"
                      type="button"
                      aria={t('EmulatorsDetailPage.hotkeys')}
                      onClick={() => onClickHotkeys(emuData.id, emuData.code)}
                    >
                      {t('EmulatorsDetailPage.hotkeys')}
                    </BtnSimple>
                  )}
                </>
              )}

              {emuData.id === 'pcsx2' && (
                <BtnSimple
                  css="btn-simple--2"
                  type="button"
                  aria={t('EmulatorsDetailPage.hotkeys')}
                  onClick={() => onClickHotkeys('pcsx2_expert')}
                >
                  {t('EmulatorsDetailPage.hotkeysExpert')}
                </BtnSimple>
              )}
              {emuData.id === 'dolphin' && (
                <>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.controls')}
                    onClick={() => onClickControls('gamecube')}
                  >
                    {t('EmulatorsDetailPage.controlsGamecube')}
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.hotkeys')}
                    onClick={() => onClickHotkeys('gamecube')}
                  >
                    {t('EmulatorsDetailPage.hotkeysGamecube')}
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.controls')}
                    onClick={() => onClickControls('wii_classic')}
                  >
                    {t('EmulatorsDetailPage.classicControlsWii')}
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.hotkeys')}
                    onClick={() => onClickControls('wii')}
                  >
                    {t('EmulatorsDetailPage.controlsWii')}
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.hotkeys')}
                    onClick={() => onClickControls('wii_nunchuck')}
                  >
                    {t('EmulatorsDetailPage.nunchuckControls')}
                  </BtnSimple>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.controls')}
                    onClick={() => onClickControls('wii')}
                  >
                    {t('EmulatorsDetailPage.hotkeysWii')}
                  </BtnSimple>
                </>
              )}

              {emuData.id === 'dolphin' && (
                <>
                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.controls')}
                    onClick={() => onClickHotkeys('gamecube_expert')}
                  >
                    {t('EmulatorsDetailPage.hotkeysGamecubeExpert')}
                  </BtnSimple>

                  <BtnSimple
                    css="btn-simple--2"
                    type="button"
                    aria={t('EmulatorsDetailPage.hotkeys')}
                    onClick={() => onClickHotkeys('wii_expert')}
                  >
                    {t('EmulatorsDetailPage.hotkeysWiiExpert')}
                  </BtnSimple>
                </>
              )}

              {emuData.id === 'cemu' && (
                <BtnSimple
                  css="btn-simple--2"
                  type="button"
                  aria={t('aria.resetCemuProton')}
                  disabled={disableResetButton}
                  onClick={() => {
                    onClick('CemuProton', 'CemuProton', 'cemuproton');
                  }}
                >
                  {t('EmulatorsDetailPage.resetCemuProton')}
                </BtnSimple>
              )}
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

EmuDetail.propTypes = {
  onClick: PropTypes.func,
  onClickInstall: PropTypes.func,
  onClickUninstall: PropTypes.func,
  onClickReInstall: PropTypes.func,
  emuData: PropTypes.object,
  installEmus: PropTypes.string,
  disableResetButton: PropTypes.bool,
  hideInstallButton: PropTypes.bool,
  updateAvailable: PropTypes.bool,
  yuzuEAaskToken: PropTypes.func,
};

EmuDetail.defaultProps = {
  onClick: '',
  onClickInstall: '',
  onClickUninstall: '',
  onClickReInstall: '',
  emuData: '',
  installEmus: '',
  disableResetButton: '',
  hideInstallButton: '',
  updateAvailable: '',
  yuzuEAaskToken: () => {},
};

export default EmuDetail;
