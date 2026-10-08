import { useTranslation } from 'react-i18next';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import { BtnSimple, Img } from 'getbasecore/Atoms';
import { Alert } from 'getbasecore/Molecules';
import EmuModal from 'components/molecules/EmuModal/EmuModal';
import {
  iconSuccess,
  iconDanger,
  iconWarning,
} from 'components/utils/images/icons';
import './biosChecker.scss';

const biosFiles = require('data/biosFiles.json');

const biosList = [
  { id: 'ps1', command: 'checkPS1BIOS' },
  { id: 'ps2', command: 'checkPS2BIOS', emu: ['pcsx2', 'armsx2'] },
  {
    id: 'ps3',
    command: 'checkPS3Firmware',
    emu: ['rpcs3'],
    help: 'helpPs3',
    hideBiosFolder: true,
    launcher: { name: 'RPCS3', file: 'rpcs3' },
    download:
      'https://www.playstation.com/support/hardware/ps3/system-software/',
  },
  { id: 'eden', command: 'checkEdenBios', emu: ['eden'], help: 'helpEden' },
  {
    id: 'ryujinx',
    command: 'checkRyujinxBios',
    emu: ['ryujinx'],
    help: 'helpRyujinx',
    launcher: { name: 'Ryujinx', file: 'ryujinx' },
  },
  { id: 'segacd', command: 'checkSegaCDBios' },
  { id: 'saturn', command: 'checkSaturnBios' },
  { id: 'nds', command: 'checkDSBios', emu: ['melonds'] },
  { id: 'dreamcast', command: 'checkDreamcastBios', optional: true },
];

// Checks every BIOS needed by the selected emulators and shows help for the missing ones
function BiosChecker({ refresh }) {
  const { t } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { installEmus, system, storagePath } = state;
  const ipcChannel = window.electron.ipcRenderer;
  const [status, setStatus] = useState({});
  const [modal, setModal] = useState(false);

  const visibleBios = biosList.filter(
    (item) => !item.emu || item.emu.some((emu) => installEmus[emu]?.status),
  );

  useEffect(() => {
    setStatus({});
    visibleBios.forEach((item) => {
      ipcChannel.sendMessage('emudeck', [`${item.command}|||${item.command}`]);
      ipcChannel.once(item.command, (message) => {
        setStatus((prev) => ({
          ...prev,
          [item.id]: message.stdout.includes('true'),
        }));
      });
    });
  }, [refresh]);

  // Launches the emulator with the launcher of each system
  const openEmulator = ({ name, file }) => {
    let command = `"$toolsPath/launchers/${file}.sh"`;
    if (system === 'win32') {
      command = `powershell -ExecutionPolicy Bypass -NoProfile -File "$toolsPath/launchers/${file}.ps1"`;
    } else if (system === 'darwin') {
      command = `open -a ${name}`;
    }
    ipcChannel.sendMessage('emudeck', command);
    setModal({ active: false });
  };

  // Shows where the missing BIOS has to be copied
  const showHelp = (item) => {
    const closeButton = (
      <BtnSimple
        css="btn-simple--2"
        type="button"
        aria={t('general.close')}
        onClick={() => setModal({ active: false })}
      >
        {t('general.close')}
      </BtnSimple>
    );
    setModal({
      active: true,
      header: <span className="h4">{t(`CheckBios.${item.id}`)}</span>,
      body: (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: t(`CheckBios.${item.help || 'helpDefault'}`),
            }}
          />
          {biosFiles[item.id] && (
            <>
              <span className="h6">{t('CheckBios.validFiles')}</span>
              <ul className="list-two-cols bios-checker__files">
                {biosFiles[item.id].map((file) => (
                  <li key={file}>{file}</li>
                ))}
              </ul>
            </>
          )}
        </>
      ),
      footer: (
        <>
          {item.download && (
            <BtnSimple
              css="btn-simple--1"
              type="link"
              target="_blank"
              href={item.download}
              aria={t('CheckBios.downloadFirmware')}
            >
              {t('CheckBios.downloadFirmware')}
            </BtnSimple>
          )}
          {item.launcher && (
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria={t('CheckBios.openEmu', { name: item.launcher.name })}
              onClick={() => openEmulator(item.launcher)}
            >
              {t('CheckBios.openEmu', { name: item.launcher.name })}
            </BtnSimple>
          )}
          {!item.hideBiosFolder && (
            <BtnSimple
              css={item.launcher ? 'btn-simple--2' : 'btn-simple--1'}
              type="button"
              aria={t('CheckBios.openBiosFolder')}
              onClick={() =>
                ipcChannel.sendMessage(
                  'open-folder',
                  `${storagePath}/Emulation/bios`,
                )
              }
            >
              {t('CheckBios.openBiosFolder')}
            </BtnSimple>
          )}
          {closeButton}
        </>
      ),
      css: 'emumodal--sm',
    });
  };

  return (
    <div className="bios-checker">
      {visibleBios.map((item) => {
        const value = status[item.id];
        const missing = value === false;
        let css = '';
        if (value === true) {
          css = 'alert--success';
        } else if (missing) {
          css = item.optional ? 'alert--warning' : 'alert--danger';
        }
        let text = t('CheckBios.sarching');
        if (value === true) {
          text = t('CheckBios.detected');
        } else if (missing) {
          text = t('CheckBios.missing');
        }
        return (
          <Alert key={item.id} css={`alert--mini ${css}`}>
            {value === true && (
              <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
            )}
            {missing && (
              <Img
                src={item.optional ? iconWarning : iconDanger}
                css="icon icon--xs"
                alt="KO"
              />
            )}
            <span>
              {t(`CheckBios.${item.id}`)} {text}
            </span>
            {missing && !item.optional && (
              <BtnSimple
                css="btn-simple--3 bios-checker__help"
                type="button"
                aria={t('general.help')}
                onClick={() => showHelp(item)}
              >
                {t('general.help')}
              </BtnSimple>
            )}
          </Alert>
        );
      })}
      <EmuModal modal={modal} />
    </div>
  );
}

BiosChecker.propTypes = {
  refresh: PropTypes.number,
};

BiosChecker.defaultProps = {
  refresh: 0,
};

export default BiosChecker;
