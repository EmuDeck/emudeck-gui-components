import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import { BtnSimple, BtnGroup } from 'getbasecore/Atoms';
import { Table, Alert } from 'getbasecore/Molecules';
import Notification from 'components/molecules/Notification/Notification';
import Main from 'components/organisms/Main/Main';

import {
  imgdefault,
  imgra,
  imgdolphin,
  imgprimehack,
  imgppsspp,
  imgduckstation,
  imgcitra,
  imgpcsx2,
  imgrpcs3,
  imgyuzu,
  imgryujinx,
  imgcemu,
  imgxemu,
  imgmame,
  imgvita3k,
  imgxenia,
  imgmgba,
  imgsrm,
  imgesde,
  imgrmg,
  imgscummvm,
  imgsupermodelista,
  imgmelonds,
} from 'components/utils/images/images';

const ipcChannel = window.electron.ipcRenderer;
function EmuDetail(props) {
  const {
    onClick,
    onClickInstall,
    onClickUninstall,
    onClickReInstall,
    emuData,
    showNotification,
    textNotification,
    installEmus,
    disableResetButton,
    hideInstallButton,
    updateAvailable,
    yuzuEAaddToken,
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
  const { system } = state;

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
      case 'citra':
        setStateImg({ img: imgcitra });
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
      case 'scummvm':
        setStateImg({ img: imgscummvm });
        break;
      case 'supermodelista':
        setStateImg({ img: imgsupermodelista });
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
        setStateImg({ img: imgesde });
        break;
      case 'rmg':
        setStateImg({ img: imgrmg });
        break;
      default:
        setStateImg({ img: imgdefault });
        break;
    }
  }, [emuData]);

  const checkInstallation = (emulator) => {
    console.log(`Checking ${emulator.name} status`);
    const name = emuData.code;

    ipcChannel.sendMessage('emudeck', [
      `${name}_IsInstalled|||${name}_IsInstalled`,
    ]);
    ipcChannel.once(`${name}_IsInstalled`, (status) => {
      console.log(`${name}_IsInstalled`);
      let { stdout } = status;
      console.log({ stdout });
      stdout = status.replace('\n', '');

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
    // console.log({ name });
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
        biosName = 'Nintendo Switch';
        break;
      default:
        biosName = 'System';
        break;
    }

    return (
      <li key={item}>
        <Alert css={`alert--mini ${biosCSS(item)}`}>
          {biosName} Bios {item} {biosText(item)}
        </Alert>
      </li>
    );
  });

  const biosHTML = <ul className="list-two-cols">{biosComponents}</ul>;

  useEffect(() => {
    checkInstallation(installEmus);
  }, [installEmus]);

  return (
    <>
      <Notification css={showNotification ? 'is-animated' : 'nope'}>
        {textNotification}
      </Notification>
      <Main>
        {emuData.id && (
          <div className="container--grid">
            <div data-col-sm="2">
              <img src={img} alt="logo" />
            </div>

            <div data-col-sm="7">
              {emuData.description && (
                <>
                  <p className="h5">Description</p>
                  <p>{emuData.description}</p>
                </>
              )}
              {emuData.systems && (
                <>
                  <p className="h5">Emulated Systems</p>
                  <p>{emuData.systems}</p>
                </>
              )}
              {emuData.special_configuration && (
                <>
                  <p className="h5">Special Configuration</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${emuData.special_configuration} <br/>You can learn more about this emulator in <strong><a className="link" href="${emuData.wiki}" target="_blank">our Wiki</a></strong>`,
                    }}
                  />
                </>
              )}

              {emuData.bios.length > 0 && (
                <>
                  <p className="h5">Bios needed</p>
                  {biosHTML}
                </>
              )}
              <BtnGroup>
                {disableInstallButton && (
                  <BtnSimple
                    css={updateAvailable ? 'btn-simple--6' : 'btn-simple--1'}
                    type="button"
                    aria="Update or reset configuration"
                    onClick={() =>
                      onClick(emuData.code, emuData.name, emuData.id)
                    }
                    disabled={disableResetButton}
                  >
                    {updateAvailable && 'Update configuration'}
                    {updateAvailable || 'Reset configuration'}
                  </BtnSimple>
                )}

                {!disableInstallButton && (
                  <BtnSimple
                    css="btn-simple--3"
                    type="button"
                    aria="Install"
                    disabled={disableInstallButton}
                    onClick={() => onClickInstall(emuData.id, emuData.code)}
                  >
                    Install
                  </BtnSimple>
                )}
                {disableInstallButton && (
                  <BtnSimple
                    css="btn-simple--3"
                    type="button"
                    aria="ReInstall / Update"
                    disabled={hideInstallButton}
                    onClick={() => onClickReInstall(emuData.id, emuData.code)}
                  >
                    ReInstall / Update
                  </BtnSimple>
                )}
                {disableInstallButton && system !== 'win32' && (
                  <BtnSimple
                    css="btn-simple--3"
                    type="button"
                    aria="Uninstall"
                    disabled={false}
                    onClick={() => onClickUninstall(emuData.id, emuData.code)}
                  >
                    Uninstall
                  </BtnSimple>
                )}
              </BtnGroup>
              <br />
              <br />
              <BtnGroup>
                {emuData.id === 'cemu' && system !== 'win32' && (
                  <>
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      aria="install Cemu Appimage"
                      disabled={hideInstallButton}
                      onClick={() => {
                        if (
                          window.confirm(
                            'This action will install Cemu Appimage alongside your current Cemu'
                          ) === true
                        ) {
                          onClickInstall('cemunative', 'CemuNative');
                        }
                      }}
                    >
                      Install Cemu AppImage
                    </BtnSimple>
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      aria="Install Cemu AppImage"
                      disabled={disableResetButton}
                      onClick={() => {
                        onClick('cemunative', 'CemuNative');
                      }}
                    >
                      Reset Cemu AppImage
                    </BtnSimple>
                  </>
                )}

                {emuData.id === 'yuzu' && system !== 'win32' && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria="Go Back"
                    onClick={() => {
                      yuzuEAaddToken();
                    }}
                  >
                    Setup Early Access
                  </BtnSimple>
                )}
              </BtnGroup>
            </div>
            <div data-col-sm="3">
              {emuData.hotkeys && (
                <Table
                  css="table-reflow"
                  description="Table description"
                  items={emuData.hotkeys}
                />
              )}
            </div>
          </div>
        )}
      </Main>
    </>
  );
}

EmuDetail.propTypes = {
  onClick: PropTypes.func,
  onClickInstall: PropTypes.func,
  onClickUninstall: PropTypes.func,
  onClickReInstall: PropTypes.func,
  emuData: PropTypes.any,
  showNotification: PropTypes.bool,
  textNotification: PropTypes.string,
  installEmus: PropTypes.array,
  disableResetButton: PropTypes.bool,
  hideInstallButton: PropTypes.bool,
  updateAvailable: PropTypes.bool,
  yuzuEAaddToken: PropTypes.func,
};

EmuDetail.defaultProps = {
  onClick: '',
  onClickInstall: '',
  onClickUninstall: '',
  onClickReInstall: '',
  emuData: '',
  showNotification: '',
  textNotification: '',
  installEmus: '',
  disableResetButton: '',
  hideInstallButton: '',
  updateAvailable: '',
  yuzuEAaddToken: '',
};

export default EmuDetail;
